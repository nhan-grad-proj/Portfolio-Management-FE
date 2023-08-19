import { ReactElement, useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import { SummarizeItem } from '../../../../../system/domain/ui-models/summarize.model';
import { SummarizeModal } from '../../../../../system/app/internal/containers/SummarizeConcept/Modal/SummarizeModal/SummarizeModal';
import { useNewItems } from '../../useNewsItems';
import { SummarizeCard } from '../../../../../system/app/internal/containers/SummarizeConcept/Card/SummarizeCard/SummarizeCard';
import { useIsFetching } from 'react-query';
import { NEWS_QUERY_KEY } from '../../useQueryNews';
import { FullLoader } from '../../../../../system/app/internal/ui/Loader/Full/FullLoader';

export function NewsContainer(): ReactElement {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<SummarizeItem | undefined>();
  const items = useNewItems();
  const isLoading = useIsFetching(NEWS_QUERY_KEY) > 0;

  function openDetail(item: SummarizeItem) {
    setSelectedItem(item);
    onOpen();
  }

  return (
    <div className="cursor-pointer">
      {isLoading && <FullLoader />}
      {isOpen && (
        <SummarizeModal
          isOpen={isOpen}
          onClose={onClose}
          {...(selectedItem as SummarizeItem)}
        />
      )}

      <Grid marginTop={'4'} templateColumns={'repeat(4, 1fr)'} gap={4}>
        {items.map(item => {
          return (
            <GridItem key={item.tag}>
              <SummarizeCard {...item} onClick={openDetail} />
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
}
