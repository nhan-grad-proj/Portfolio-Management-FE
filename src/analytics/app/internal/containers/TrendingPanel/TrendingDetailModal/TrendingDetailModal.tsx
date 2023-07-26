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
import { differenceInHours } from 'date-fns';
import { TrendingTag } from '../TrendingTag/TrendingTag';

type Props = Pick<UseDisclosureReturn, 'isOpen' | 'onClose'> & TrendingItem;

export function TrendingDetailModal({
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
            <TrendingTag tagType={type} />
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
