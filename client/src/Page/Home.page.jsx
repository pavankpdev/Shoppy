import React from "react";
import { Button, Container } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  // Destructuring auth data from Auth0 hook
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Container>
        <h1>Welcome to Shoppy</h1>
        <Button color="primary" onClick={() => loginWithRedirect()}>
          Log In
        </Button>
      </Container>
    </>
  );
};

export default HomePage;
