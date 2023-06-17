import { useMutation } from 'react-query';
import { LoginUseCase } from '../../domain/usecases/auth.usecase';
import { authClient } from './services/auth-client';

export const useLogin: LoginUseCase = ({ onError, onSuccess }) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: authClient.loginByCredentials,
    mutationKey: 'POST_LOGIN',
    onSuccess,
    onError
  });

  return {
    login: mutate,
    isMutating: isLoading
  };
};
