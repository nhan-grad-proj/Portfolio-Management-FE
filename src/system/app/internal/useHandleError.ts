import {
  ErrorUseCase,
  ErrorDeps
} from 'src/system/domain/usecases/error.usecase';
import { useCallback } from 'react';
import { useNotify } from './useNotify';

export const useHandleError: ErrorUseCase = (deps?: ErrorDeps) => {
  const notify = useNotify();

  return useCallback(
    (error: unknown) => {
      if (!error) {
        return;
      }

      notify({
        title: 'Error',
        status: 'error',
        description: error as string
      });
    },
    [notify]
  );
};
