import { ReactElement } from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { TrendingItemCard } from './TrendingItemCard/TrendingItemCard';
import { useTrendingItems } from '../../useTrendingItems';

export function TrendingPanel(): ReactElement {
  const { tag, crypto } = useTrendingItems();

  return (
    <>
      <div>
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
                <TrendingItemCard {...item} />
              </GridItem>
            );
          })}
        </Grid>
      </div>

      <div>
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
                <TrendingItemCard {...item} />
              </GridItem>
            );
          })}
        </Grid>
      </div>
    </>
  );
}
