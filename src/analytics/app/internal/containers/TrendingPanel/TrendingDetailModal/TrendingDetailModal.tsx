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
import { TrendingItem } from '../../../app-models/analytic.model';

type Props = Pick<UseDisclosureReturn, 'isOpen' | 'onClose'> & TrendingItem;

export function TrendingDetailModal({
  isOpen,
  onClose,
  type,
  tag,
  content
}: Props): ReactElement {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading>{tag}</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div>{type}</div>
          <div>{content}</div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
