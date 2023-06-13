import { createContext } from 'react';
import { noop } from 'src/shared/utils';
import { ContextWithDispatcher } from 'src/shared/clients';
import { User } from '../../models/user.type';

export type UserContextState = ContextWithDispatcher<User, User>;

export const initialUserCtxState: User = {
  id: '',
  username: '',
  avatar: '',
  email: '',
  createdAt: '',
  deletedAt: ''
};

export const UserContext = createContext<UserContextState>({
  state: initialUserCtxState,
  dispatch: noop
});
