export type LoginCredentials = {
  email: string;
  password: string;
};

export type UserCredentials = {
  accessToken: string;
};

export type AuthUseCase = {
  loginByCredentials: (
    credentials: LoginCredentials
  ) => Promise<UserCredentials>;
};

type LoginProps = {
  onSuccess?: (credentials: UserCredentials) => void;
  onError?: () => void;
};
type LoginState = {
  login: (payload: LoginCredentials) => void;
  isMutating: boolean;
};
export type LoginUseCase = (props: LoginProps) => LoginState;

type LogOutState = () => void;
export type LogOutUseCase = () => LogOutState;
