import { useEffect } from 'react';
import { UserSession } from '../../domain/usecases/user.usecase';
import { useQueryMyProfile } from './useQueryMyProfile';
import { useDispatch } from 'react-redux';
import { systemActions } from './system.store';

export function useUserSession(): UserSession {
  const dispatch = useDispatch();
  const { profile, status } = useQueryMyProfile();

  function getSessionStatus() {
    if (status === 'loading') {
      return 'verifying';
    }

    if (status === 'success' && profile) {
      return 'authenticated';
    }

    return 'unauthenticated';
  }

  useEffect(
    function setUserSession() {
      if (status === 'success' && profile) {
        dispatch(systemActions.setUser(profile));
      }
    },
    [dispatch, profile, status]
  );

  return {
    user: profile,
    sessionStatus: getSessionStatus()
  };
}
