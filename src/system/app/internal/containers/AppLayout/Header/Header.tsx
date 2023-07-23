import { ReactElement, useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList
} from '@chakra-ui/react';
import { HeaderMenu } from './Menu/Menu';
import { useMenu } from '../../../useMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faSuitcase,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons';
import { useLogOut } from '../../../useLogOut';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedPortfolioSelector,
  systemActions,
  userSessionSelector
} from '../../../system.store';
import { useQueryMyPortfolios } from '../../../../../../portfolio/app/internal/useQueryMyPortfolios';
import { Portfolio } from '../../../../../../portfolio/domain/portfolio.usecase';

export function Header(): ReactElement {
  const dispatch = useDispatch();
  const userSession = useSelector(userSessionSelector);
  const selectedPortfolio = useSelector(selectedPortfolioSelector);

  const { items, activeItem, navigate } = useMenu();
  const { portfolios, isSuccess } = useQueryMyPortfolios();
  const logOut = useLogOut();

  function handleSelectPortfolio(portfolio: Portfolio) {
    return () => {
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
      if (!isSuccess || selectedPortfolio || !portfolios.length) return;

      dispatch(
        systemActions.set({
          key: 'selectedPortfolio',
          data: portfolios[0]
        })
      );
    },
    [dispatch, isSuccess, portfolios, selectedPortfolio]
  );

  return (
    <Box bgColor="white" paddingY="2">
      <Flex
        maxW={'container.xl'}
        alignItems={'center'}
        justifyContent={'space-between'}
        margin={'auto'}
      >
        <HStack>
          <Avatar src="https://bit.ly/sage-adebayo" />
          <HeaderMenu
            menus={items}
            activeMenu={activeItem}
            onMenuClick={navigate}
          />
        </HStack>

        <HStack>
          <Menu>
            <MenuButton as={Button}>
              <FontAwesomeIcon icon={faSuitcase} />
              <span className="mx-2">Portfolio</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </MenuButton>

            <MenuList>
              {portfolios.map(portfolio => {
                return (
                  <MenuItem
                    key={portfolio.id}
                    onClick={handleSelectPortfolio(portfolio)}
                    color={
                      selectedPortfolio?.name === portfolio.name
                        ? 'blue'
                        : 'current'
                    }
                  >
                    <FontAwesomeIcon icon={faSuitcase} />
                    <span className="ml-2">{portfolio.name}</span>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton>
              <FontAwesomeIcon icon={faUser} />
            </MenuButton>

            <MenuList>
              <MenuItemOption value="short">
                {userSession?.username}
              </MenuItemOption>

              <MenuDivider />

              <MenuItemOption value="my-account">My account</MenuItemOption>
              <MenuItemOption value="my-subscription">
                My subscription
              </MenuItemOption>

              <MenuDivider />

              <MenuItemOption value="help">Help</MenuItemOption>
              <MenuItemOption value="news">What's new</MenuItemOption>

              <MenuDivider />

              <MenuItemOption value="sign-out" onClick={logOut}>
                Sign Out
              </MenuItemOption>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
}
