import { PropsWithChildren, ReactElement } from 'react';
import { Header } from './Header/Header';
import { Box } from '@chakra-ui/react';

export function AppLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <>
      <Header />

      <Box maxW="container.xl" margin="auto">
        {children}
      </Box>
    </>
  );
}
