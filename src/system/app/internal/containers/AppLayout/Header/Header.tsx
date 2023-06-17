import { ReactElement } from 'react';
import {
  HStack,
  Avatar,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuDivider,
  Box
} from '@chakra-ui/react';
import { HeaderMenu } from './Menu/Menu';
import { useMenu } from '../../../useMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

export function Header(): ReactElement {
  const { items, activeItem, navigate } = useMenu();

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
          <Button>Subscribe</Button>
          <FontAwesomeIcon icon={faSearch} />

          <Menu>
            <MenuButton>
              <FontAwesomeIcon icon={faUser} />
            </MenuButton>

            <MenuList>
              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="asc">Ascending</MenuItemOption>

              <MenuDivider />

              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="asc">Ascending</MenuItemOption>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
}
