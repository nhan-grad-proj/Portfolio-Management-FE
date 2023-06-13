import { PropsWithChildren, ReactElement, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useToggle } from 'react-use';
import { ToggleMenuButton } from './ToggleMenuButton/ToggleMenuButton';
import { SideBar } from './SideBar/SideBar';
import { Header } from '../../ui/AdminLayout/Header';
import { Footer } from '../../ui/AdminLayout/Footer';
import { AuthenticatedGuard } from '../AuthenticatedGuard/AuthenticatedGuard';

export function AdminLayout({ children }: PropsWithChildren): ReactElement {
  const [isSideBarHidden, toggleHiddenBar] = useToggle(false);
  const [isSideBarHovering, setIsSideBarHovering] = useState(false);

  function handleHoverToggleItem() {
    if (isSideBarHidden && !isSideBarHovering) {
      setIsSideBarHovering(true);
    }
  }

  function handleMouseLeaveToggleItem() {
    if (isSideBarHidden && isSideBarHovering) {
      setIsSideBarHovering(false);
    }
  }

  return (
    <AuthenticatedGuard fallbackRoute="/login">
      <ToggleMenuButton
        isMenuHidden={isSideBarHidden}
        onClick={toggleHiddenBar}
        onMouseOver={handleHoverToggleItem}
        onMouseLeave={handleMouseLeaveToggleItem}
      />

      <Flex h="100vh" gap={4} paddingY="1.5rem">
        <SideBar
          isSideBarHidden={isSideBarHidden}
          isHovering={isSideBarHovering}
          onMouseOver={handleHoverToggleItem}
          onMouseLeave={handleMouseLeaveToggleItem}
        />

        <Box flex={1}>
          <Header isMenuHidden={isSideBarHidden} />

          <div className="p-6">{children}</div>

          <Footer />
        </Box>
      </Flex>
    </AuthenticatedGuard>
  );
}
