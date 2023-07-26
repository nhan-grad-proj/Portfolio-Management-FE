import {
  Card,
  CardBody,
  CardBodyProps,
  HStack,
  Tag,
  Text
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { TrendingItem } from '../../../app-models/analytic.model';

type Props = TrendingItem &
  Omit<CardBodyProps, 'onClick'> & {
    onClick?: (item: TrendingItem) => void;
  };

export function TrendingItemCard({
  tag,
  type = 'neutral',
  content,
  onClick,
  ...rest
}: Props): ReactElement {
  const typeColor = {
    positive: 'green',
    neutral: 'yellow',
    negative: 'gray'
  }[type];

  function handleClick() {
    onClick?.({
      tag,
      type,
      content
    });
  }

  return (
    <>
      <Card>
        <CardBody className="space-y-4" {...rest} onClick={handleClick}>
          <HStack justifyContent="space-between">
            <Text fontSize="md" fontWeight="semibold">
              {tag}
            </Text>
            <Tag variant="solid" colorScheme={typeColor}>
              {type}
            </Tag>
          </HStack>

          <Text noOfLines={3}>{content}</Text>
        </CardBody>
      </Card>
    </>
  );
}
