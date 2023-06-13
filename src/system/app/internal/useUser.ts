import { useEffect } from 'react';
import { UserSession } from '../../domain/usecases/user.usecase';
import { useQueryMyProfile } from '../../../user/hooks/data/useQueryMyProfile';
import { useUser } from '../../../user/contexts/UserContext/useUser.hook';

export const useUserSession: UserSession = () => {
  const { dispatch: setUser } = useUser();
  const { data, status } = useQueryMyProfile({ enabled: true });

  function getSessionStatus() {
    if (status === 'loading') {
      return 'verifying';
    }

    if (status === 'success' && data) {
      return 'authenticated';
    }

    return 'unauthenticated';
  }

  useEffect(
    function setUserSession() {
      if (status === 'success' && data) {
        setUser(data);
      }
    },
    [status, data, setUser]
  );

  return {
    data,
    sessionStatus: getSessionStatus()
  };
};
