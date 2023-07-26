import { Card, CardBody, HStack, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { TrendingItem } from '../../../app-models/analytic.model';

type Props = TrendingItem;

export function TrendingItemCard({ tag, type, content }: Props): ReactElement {
  return (
    <Card>
      <CardBody>
        <HStack justifyContent="space-between">
          <Text fontSize="lg">{tag}</Text>
          <div>{type}</div>
        </HStack>

        <Text noOfLines={3}>{content}</Text>
      </CardBody>
    </Card>
  );
}
