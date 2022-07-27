import { StyledButton } from "./index.style";

export interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {};

export function Button({
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      {...rest}
    />
  );
};