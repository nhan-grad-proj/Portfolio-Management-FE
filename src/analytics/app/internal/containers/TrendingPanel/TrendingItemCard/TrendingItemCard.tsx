import { Card, CardBody, CardBodyProps, HStack, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { TrendingItem } from '../../../app-models/analytic.model';
import { TrendingTag } from '../TrendingTag/TrendingTag';

type Props = TrendingItem &
  Omit<CardBodyProps, 'onClick'> & {
    onClick?: (item: TrendingItem) => void;
  };

export function TrendingItemCard({
  tag,
  type = 'neutral',
  content,
  created,
  onClick,
  ...rest
}: Props): ReactElement {
  function handleClick() {
    onClick?.({
      tag,
      type,
      content,
      created
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

            <TrendingTag tagType={type} />
          </HStack>

          <Text noOfLines={3}>{content}</Text>
        </CardBody>
      </Card>
    </>
  );
}
