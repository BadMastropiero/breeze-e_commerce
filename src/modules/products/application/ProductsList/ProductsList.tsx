import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';

import Spinner from '../../../../components/Spinner/Spinner';
import { FALLBACK_IMAGE_URL } from '../../../../config';
import { useIntersectionTrigger } from '../../../../hooks/useItersectionTrigger';
import useLockBodyScroll from '../../../../hooks/useLockScroll';
import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import { Product } from '../../domain/types';
import DataService from '../../infrastructure/service';
import ContentItem from '../ContentItem/ContentItem';
import ProductCard from '../ProductCard/ProductCard';
import {
  StyledCloseButton,
  StyledModal,
  StyledModalImage,
  StyledProductsGrid,
  StyledTitle,
  StyledWrapper,
} from './ProductsList.styles';

function ProductsList() {
  const [productsRendered, setProductsRendered] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product | null>(null);
  const modalImgRef = useRef(null);
  const { ref: loadMoreItems, isTriggered: loadingMore } = useIntersectionTrigger();
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleSelected = (v: Product | null) => {
    setSelected(v);
    if (v) modalRef.current?.showModal();
    else modalRef.current?.close();
  };

  const { data: products, isLoading: isLoadingProducts } = useQuery('products', () =>
    DataService.getProducts('large-page'),
  );
  const { data: contents } = useQuery('contents', () =>
    DataService.getContent('large-page'),
  );

  useOnClickOutside(modalImgRef, (e) => {
    handleSelected(null);
    e.stopPropagation();
  });
  useLockBodyScroll(!!selected, [selected]);

  useEffect(() => {
    if (!loadingMore) return;

    const ticks = setInterval(() => {
      setProductsRendered((p) => products?.products?.slice(0, p.length + 1) || []);
    }, 50);
    return () => clearInterval(ticks);
  }, [loadingMore, products]);

  return (
    <StyledWrapper>
      <StyledTitle>Products </StyledTitle>
      {isLoadingProducts && <Spinner />}
      <StyledProductsGrid>
        {productsRendered.map((p) => (
          <ProductCard key={p.product_id} item={p} onClick={() => handleSelected(p)} />
        ))}
        {contents?.data.map((c, i) => <ContentItem key={i} item={c} />)}
      </StyledProductsGrid>
      <div className="" ref={loadMoreItems} />
      <StyledModal ref={modalRef}>
        {selected && (
          <>
            <StyledCloseButton onClick={() => handleSelected(null)}>
              &times;
            </StyledCloseButton>
            <br />
            <StyledModalImage
              ref={modalImgRef}
              src={selected.image}
              alt=""
              onError={(ev) => {
                ev.currentTarget.src = FALLBACK_IMAGE_URL;
              }}
            />
          </>
        )}
      </StyledModal>
    </StyledWrapper>
  );
}

export default ProductsList;
