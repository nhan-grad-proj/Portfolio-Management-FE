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
import { faFilter, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AddPortfolioModal } from '../AddPortfolioModal/AddPortfolioModal';

export function PortfolioActionBar(): ReactElement {
  return (
    <Flex>
      <div className="space-x-2">
        <AddPortfolioModal
          triggerButton={props => (
            <Button
              colorScheme="blue"
              variant="outline"
              className="space-x-2"
              {...props}
            >
              <FontAwesomeIcon icon={faPlus} />
              <span>Add portfolio</span>
            </Button>
          )}
        />
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