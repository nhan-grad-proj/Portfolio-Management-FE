import { TrendingType } from '../../../app-models/analytic.model';
import { Tag } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  tagType: TrendingType;
}>;

export function TrendingTag({ tagType }: Props) {
  const typeColor = {
    positive: 'green',
    neutral: 'yellow',
    negative: 'gray'
  }[tagType];

  return (
    <Tag variant="solid" colorScheme={typeColor}>
      {tagType}
    </Tag>
  );
}
