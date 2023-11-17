import { FALLBACK_IMAGE_URL } from '../../../../config';
import { ProductCardProps } from './ProductCard.interface';
import { StyledCard, StyledCardImage, StyledCardTitle } from './ProductCard.styles';

function ProductCard({ item, onClick }: ProductCardProps) {
  return (
    <>
      <StyledCard data-testid="styled-card" onClick={onClick}>
        <StyledCardImage
          src={item.image}
          loading="lazy"
          alt=""
          width={190}
          height={190}
          onError={(ev) => {
            ev.currentTarget.src = FALLBACK_IMAGE_URL;
          }}
        />
        <StyledCardTitle>{item.title}</StyledCardTitle>
      </StyledCard>
    </>
  );
}

export default ProductCard;
