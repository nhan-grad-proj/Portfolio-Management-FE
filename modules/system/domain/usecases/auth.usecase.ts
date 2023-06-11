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
