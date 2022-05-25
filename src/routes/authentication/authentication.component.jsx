import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { AuthenticationContainer } from "./authentication.styles.jsx";

// Authentication page that has the sign in and sign up forms
export default function Authentication() {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
}
