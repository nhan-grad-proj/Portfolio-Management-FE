import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { UseDisclosureReturn } from '@chakra-ui/hooks/dist/use-disclosure';
import { differenceInHours } from 'date-fns';
import { SummarizeItem } from '../../../../../../domain/ui-models/summarize.model';
import { SummarizeTag } from '../../Tag/SummarizeTag';

type Props = Pick<UseDisclosureReturn, 'isOpen' | 'onClose'> & SummarizeItem;

export function SummarizeModal({
  isOpen,
  onClose,
  type,
  tag,
  content,
  created
}: Props): ReactElement {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading as="h2" size="lg">
            {tag}
          </Heading>
          <div className="text-sm flex items-end font-light space-x-1">
            <span>
              about {differenceInHours(new Date(), new Date(created))}
            </span>
            <SummarizeTag tagType={type} />
          </div>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody marginBottom={4}>
          <div>{content}</div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
