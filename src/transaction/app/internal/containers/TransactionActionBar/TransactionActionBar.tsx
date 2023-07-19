import { ReactElement } from 'react';
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Spacer
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AddTransactionModal } from './AddTransactionModal/AddTransactionModal';
import { AddFeeModal } from './AddFeeModal/AddFeeModal';

export function TransactionActionBar(): ReactElement {
  return (
    <Flex>
      <div className="space-x-2">
        <AddTransactionModal />

        <AddFeeModal />
      </div>

      <Spacer />

      <Flex className="space-x-2">
        <InputGroup>
          <Input placeholder="Search ..." />
          <InputRightElement pointerEvents="none">
            <FontAwesomeIcon icon={faSearch} />
          </InputRightElement>
        </InputGroup>

        <Button className="space-x-2">
          <FontAwesomeIcon icon={faFilter} />
          <span>Filters</span>
        </Button>
      </Flex>
    </Flex>
  );
}
