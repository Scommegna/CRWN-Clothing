import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles.jsx";

// Different types of buttons that is in the application
export const BUTTON_TYPES_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

// Auxiliar function that helps mapping which button will be rendered
const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

// Button component for different buttons that share similar style
export default function Button({ children, buttonType, ...otherProps }) {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
}
