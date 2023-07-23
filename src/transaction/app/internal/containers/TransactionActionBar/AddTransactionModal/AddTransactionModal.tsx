import { ReactElement, useMemo } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  Button,
  FormControl,
  FormErrorMessage,
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
  Select
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useController, useForm } from 'react-hook-form';
import { AddTransactionModalModel } from '../../../app-models/transaction.model';
import { useCreateTransactionMutation } from '../../../useCreateTransactionMutation';
import { FullLoader } from '../../../../../../system/app/internal/ui/Loader/Full/FullLoader';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { Combobox } from '../../../../../../system/app/internal/ui/Combobox/Combobox';
import { CreateTransactionPayload } from '../../../../../domain/transaction.usecase';
import { useSearchAsset } from '../../../../../../assets/app/internal/useSearchAsset';
import { BoxItem } from '../../../../../../system/domain/ui-models/combobox.model';
import { useDebounce } from '../../../../../../system/app/internal/useDebounce';
import { EMPTY_BOX } from '../../../../../../system/domain/constants';
import { TransactionType } from '../../../../../domain/constant';

const validateSchema = object().shape({
  ticket: object({
    text: string().required(),
    value: string().required()
  }),
  operation: string().oneOf(
    Object.values(TransactionType),
    `Values must be selected one of ${Object.values(TransactionType)}`
  ),
  date: string().required('Please select date'),
  amount: string().required('Please input amount'),
  price: string().required('Please input price')
});

const initValues: Partial<AddTransactionModalModel> = {
  ticket: EMPTY_BOX
};

export function AddTransactionModal(): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<AddTransactionModalModel>({
    resolver: yupResolver(validateSchema),
    defaultValues: initValues
  });
  const { field } = useController({
    name: 'ticket',
    control
  });

  const { mutateCreateTransaction, isLoading } = useCreateTransactionMutation();

  const debounced = useDebounce(field.value);
  const { assets } = useSearchAsset(debounced.text);
  const ticketItems: BoxItem[] = useMemo(() => {
    return assets.map(asset => ({
      text: asset.symbol,
      value: asset.symbol
    }));
  }, [assets]);

  function resolveSubmitResult(data: AddTransactionModalModel) {
    const payload: CreateTransactionPayload = {
      asset: data.ticket.value,
      portfolio_id: 1,
      transaction_type: data.operation,
      quantity: parseFloat(data.amount),
      price: parseFloat(data.price),
      transaction_date: data.date
    };

    mutateCreateTransaction(payload, {
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
            <FormControl isRequired isInvalid={!!errors.ticket}>
              <FormLabel>Ticker/Company</FormLabel>
              <Combobox
                placeholder="Start entering in the ticket or company name ..."
                items={ticketItems}
                {...field}
              />

              {errors.ticket && (
                <FormErrorMessage>{errors.ticket.message}</FormErrorMessage>
              )}
            </FormControl>

            <Grid templateColumns="repeat(2,1fr)" className="space-x-2">
              <GridItem>
                <FormControl isRequired isInvalid={!!errors.operation}>
                  <FormLabel>Operation</FormLabel>
                  <Select
                    {...register('operation')}
                    placeholder="Select option"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>

                  {errors.operation && (
                    <FormErrorMessage>
                      {errors.operation.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl isRequired isInvalid={!!errors.date}>
                  <FormLabel>Date</FormLabel>
                  <Input {...register('date')} type="date" />

                  {errors.date && (
                    <FormErrorMessage>{errors.date.message}</FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>
            </Grid>

            <Grid templateColumns="repeat(2,1fr)" className="space-x-2">
              <GridItem>
                <FormControl isRequired isInvalid={!!errors.amount}>
                  <FormLabel>Amount</FormLabel>
                  <Input {...register('amount')} type="number" />

                  {errors.amount && (
                    <FormErrorMessage>{errors.amount.message}</FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl isRequired isInvalid={!!errors.price}>
                  <FormLabel>Price</FormLabel>
                  <Input {...register('price')} type="number" />

                  {errors.price && (
                    <FormErrorMessage>{errors.price.message}</FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>
            </Grid>
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
