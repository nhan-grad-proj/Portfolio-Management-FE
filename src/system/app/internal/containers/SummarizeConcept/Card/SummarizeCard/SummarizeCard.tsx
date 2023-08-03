import { Card, CardBody, CardBodyProps, HStack, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { SummarizeTag } from '../../Tag/SummarizeTag';
import { SummarizeItem } from '../../../../../../domain/ui-models/summarize.model';

type Props = SummarizeItem &
  Omit<CardBodyProps, 'onClick'> & {
    onClick?: (item: SummarizeItem) => void;
  };

export function SummarizeCard({
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

            <SummarizeTag tagType={type} />
          </HStack>

          <Text noOfLines={3}>{content}</Text>
        </CardBody>
      </Card>
    </>
  );
}
