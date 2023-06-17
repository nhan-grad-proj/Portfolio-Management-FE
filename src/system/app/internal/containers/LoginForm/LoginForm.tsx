import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text
} from '@chakra-ui/react';
import classes from './LoginForm.module.scss';
import { LoginModel } from '../../app-models/auth.model';
import { useLogin } from '../../useLogin';
import { persistentStorage } from '../../services/persistent.storage';

export function LoginForm(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LoginModel>();

  const { login } = useLogin({
    onSuccess: credentials => {
      persistentStorage.setAccessToken(credentials.accessToken);
      reset();
    }
  });

  function submitResolver(model: LoginModel) {
    const loginCredentials = {
      email: model.username,
      password: model.password
    };

    login(loginCredentials);
  }

  return (
    <>
      <div className={classes['form-container']}>
        <Heading size="md" className="text-left mb-3" color="primary">
          Welcome back
        </Heading>

        <Text fontSize="sm" className="text-left mb-5">
          Enter your username and password to sign in
        </Text>

        <form onSubmit={handleSubmit(submitResolver)}>
          <FormControl isInvalid={!!errors?.username?.message} isRequired>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              {...register('username', {
                minLength: 4,
                required: true
              })}
            />

            {errors.username && (
              <div>Username required longer than 6 character</div>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors?.password?.message} isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              {...register('password', {
                minLength: 6,
                required: true
              })}
            />
            {errors.password && (
              <div>Password required longer than 6 character</div>
            )}
          </FormControl>

          <Button
            variant="outline"
            colorScheme="teal"
            type="submit"
            className="w-full mt-5"
          >
            Sign In
          </Button>
        </form>
      </div>
    </>
  );
}
