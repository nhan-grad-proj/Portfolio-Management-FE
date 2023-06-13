import { User } from '../../../user/models/user.type';

export type UserSession = () => {
  data?: User;
  sessionStatus: 'authenticated' | 'unauthenticated' | 'verifying';
};
