import '../styles/globals.scss';
import '../styles/typography.module.scss';
import { UserProvider } from 'src/user/contexts/UserContext/user.provider';
import { AdminLayout } from 'src/shared/layouts/AdminLayout/AdminLayout';
import { useHandleError } from 'src/system/app/internal/useHandleError';
import { SystemProvider } from 'src/system/infrastructure/providers/system.provider';
import { AppPropsWithLayout } from 'src/system/infrastructure/next.types';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const handleError = useHandleError();

  const renderLayout =
    Component.getLayout ?? (page => <AdminLayout>{page}</AdminLayout>);

  return (
    <SystemProvider onError={handleError} pageProps={pageProps}>
      <UserProvider>{renderLayout(<Component {...pageProps} />)}</UserProvider>
    </SystemProvider>
  );
}

export default MyApp;
