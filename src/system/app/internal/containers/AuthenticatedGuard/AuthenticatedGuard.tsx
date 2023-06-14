import { PropsWithChildren, useEffect, ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useUserSession } from '../../useUserSession';

type AuthenticatedGuardProps = PropsWithChildren<{
  fallbackRoute: string;
}>;

export function AuthenticatedGuard({
  fallbackRoute,
  children
}: AuthenticatedGuardProps): ReactElement {
  const { push } = useRouter();
  const { sessionStatus } = useUserSession();

  useEffect(
    function interceptUnAuthenticatedUser() {
      if (sessionStatus !== 'unauthenticated') {
        return;
      }

      push(fallbackRoute);
    },
    [fallbackRoute, push, sessionStatus]
  );

  return <>{sessionStatus === 'authenticated' && children}</>;
}
