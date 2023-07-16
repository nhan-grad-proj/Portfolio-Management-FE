import { ReactElement } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { AddTransactionModalModel } from '../../../app-models/transaction.model';
import { useCreateTransactionMutation } from '../../../useCreateTransactionMutation';
import { FullLoader } from '../../../../../../system/app/internal/ui/Loader/Full/FullLoader';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

const validateSchema = object().shape({
  ticket: string(),
  operation: string(),
  date: string(),
  amount: string(),
  price: string(),
  fee: string(),
  note: string()
});

export function AddTransactionModal(): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm<AddTransactionModalModel>({
    resolver: yupResolver(validateSchema)
  });

  const { mutateCreateTransaction, isLoading } = useCreateTransactionMutation();

  function resolveSubmitResult(data: AddTransactionModalModel) {
    mutateCreateTransaction(data, {
      onSuccess: onClose
    });
  }
  return (
    <>
      {isLoading && <FullLoader />}

      <Button
        colorScheme="blue"
        variant="outline"
        className="space-x-2"
        onClick={onOpen}
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Add transaction</span>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="space-y-4">
            <FormControl isRequired>
              <FormLabel>Ticker/Company</FormLabel>
              <Input
                placeholder="Start entering in the ticker or company name.."
                {...register('ticket')}
              />
            </FormControl>

            <Grid templateColumns="repeat(2,1fr)" className="space-x-2">
              <GridItem>
                <FormControl isRequired>
                  <FormLabel>Operation</FormLabel>
                  <Select
                    {...register('operation')}
                    placeholder="Select option"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl isRequired>
                  <FormLabel>Date</FormLabel>
                  <Input {...register('date')} type="date" />
                </FormControl>
              </GridItem>
            </Grid>

            <Grid templateColumns="repeat(2,1fr)" className="space-x-2">
              <GridItem>
                <FormControl isRequired>
                  <FormLabel>Amount</FormLabel>
                  <Input {...register('amount')} type="number" />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl isRequired>
                  <FormLabel>Price</FormLabel>
                  <Input {...register('price')} type="number" />
                </FormControl>
              </GridItem>
            </Grid>

            <FormControl>
              <FormLabel>Fee</FormLabel>
              <Input {...register('fee')} type="number" />
            </FormControl>

            <FormControl>
              <FormLabel>Note</FormLabel>
              <Textarea {...register('note')} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSubmit(resolveSubmitResult)}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
