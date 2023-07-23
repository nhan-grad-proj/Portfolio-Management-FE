import { ReactElement, useEffect } from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { AddPortfolioModal } from '../../../../../../../portfolio/app/internal/containers/AddPortfolioModal/AddPortfolioModal';
import { Portfolio } from '../../../../../../../portfolio/domain/portfolio.usecase';
import {
  selectedPortfolioSelector,
  systemActions
} from '../../../../system.store';

type Props = {
  items: Portfolio[];
};

export function PortfolioMenu({ items }: Props): ReactElement {
  const dispatch = useDispatch();
  const selectedPortfolio = useSelector(selectedPortfolioSelector);

  function handleSelectPortfolio(portfolio: Portfolio) {
    return function handler() {
      dispatch(
        systemActions.set({
          key: 'selectedPortfolio',
          data: portfolio
        })
      );
    };
  }

  useEffect(
    function selectFirstPortfolio() {
      if (selectedPortfolio || !items.length) return;

      dispatch(
        systemActions.set({
          key: 'selectedPortfolio',
          data: items[0]
        })
      );
    },
    [dispatch, items, selectedPortfolio]
  );

  return (
    <Menu>
      <MenuButton as={Button}>
        <FontAwesomeIcon icon={faSuitcase} />
        <span className="mx-2">Portfolio</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </MenuButton>

      <MenuList>
        {items.map(portfolio => {
          return (
            <MenuItem
              key={portfolio.id}
              onClick={handleSelectPortfolio(portfolio)}
              color={
                selectedPortfolio?.name === portfolio.name ? 'blue' : 'current'
              }
            >
              <FontAwesomeIcon icon={faSuitcase} />
              <span className="ml-2">{portfolio.name}</span>
            </MenuItem>
          );
        })}

        <MenuItem>
          <AddPortfolioModal />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
