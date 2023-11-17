import DOMPurify from 'dompurify';

import { ContentItemProps } from './ContentItem.interface';
import { StyledContent } from './ContentItem.styles';

function ContentItem({ item }: ContentItemProps) {
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(item.contents),
  });

  return (
    <StyledContent
      dangerouslySetInnerHTML={sanitizedData()}
      style={{ gridRow: item.position.split('-')[1] }}
    />
  );
}

export default ContentItem;
