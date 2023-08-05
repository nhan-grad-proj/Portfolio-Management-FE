import { Container, Grid, GridItem, Image } from '@chakra-ui/react';
import Head from 'next/head';
import { RegisterForm } from 'src/system/app/internal/containers/RegisterForm/RegisterForm';
import { NoLayout } from 'src/system/app/internal/ui/NoLayout/NoLayout';
import { NextPageWithLayout } from 'src/system/infrastructure/next.types';

const RegisterPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Register with us</title>
      </Head>

      <Container maxW="container.xl">
        <Grid templateColumns="repeat(2, 1fr)" height="100vh">
          <GridItem>
            <RegisterForm />
          </GridItem>

          <GridItem>
            <div>
              <Image
                className="h-screen"
                src="/login-background.jpg"
                alt="Background image"
              />
            </div>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

RegisterPage.getLayout = NoLayout;

export default RegisterPage;
