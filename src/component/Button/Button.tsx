import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}

export const Button = (props: ButtonProps): JSX.Element => {
  return <StyledButton {...props}>{props.content}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 2rem;
`;
