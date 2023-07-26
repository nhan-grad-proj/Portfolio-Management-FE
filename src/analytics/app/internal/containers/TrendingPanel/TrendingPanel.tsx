import { ReactElement, useState } from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { TrendingItemCard } from './TrendingItemCard/TrendingItemCard';
import { useTrendingItems } from '../../useTrendingItems';
import { TrendingDetailModal } from './TrendingDetailModal/TrendingDetailModal';
import { useDisclosure } from '@chakra-ui/hooks';
import { TrendingItem } from '../../app-models/analytic.model';

export function TrendingPanel(): ReactElement {
  const { tag, crypto } = useTrendingItems();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<TrendingItem | undefined>();

  function openDetail(item: TrendingItem) {
    setSelectedItem(item);
    onOpen();
  }

  return (
    <>
      <div className="cursor-pointer">
        {isOpen && (
          <TrendingDetailModal
            isOpen={isOpen}
            onClose={onClose}
            {...(selectedItem as TrendingItem)}
          />
        )}

        <Text fontSize="2xl" fontWeight="bold">
          Trending crypto
        </Text>

        <Grid
          marginTop={'4'}
          templateColumns={`repeat(${crypto.length}, 1fr)`}
          className="space-x-4"
        >
          {crypto.map(item => {
            return (
              <GridItem key={item.tag}>
                <TrendingItemCard {...item} onClick={openDetail} />
              </GridItem>
            );
          })}
        </Grid>
      </div>

      <div className="cursor-pointer">
        <Text fontSize="2xl" fontWeight="bold">
          Trending tokens
        </Text>

        <Grid
          marginTop={'4'}
          templateColumns={`repeat(${tag.length}, 1fr)`}
          className="space-x-4"
        >
          {tag.map(item => {
            return (
              <GridItem key={item.tag}>
                <TrendingItemCard {...item} onClick={openDetail} />
              </GridItem>
            );
          })}
        </Grid>
      </div>
    </>
  );
}
