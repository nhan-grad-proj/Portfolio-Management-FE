import { User } from '../entities/user.types';

export type UserSession = {
  user?: User;
  sessionStatus: 'authenticated' | 'unauthenticated' | 'verifying';
};
