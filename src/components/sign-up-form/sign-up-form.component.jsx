import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { SignUpContainer } from "./sign-up-form.styles.jsx";

// Default form fields info
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// Sign up form
export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = function () {
    setFormFields(defaultFormFields);
  };

  // Receives form fields info and creates new user
  const handleSubmit = async function (event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password is different of confirm password field");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use.");
      } else {
        console.log(error);
      }
      return;
    }
  };

  // Get info from form fields and stores it
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
}
