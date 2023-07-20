import { styled } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 50px;
  width: 110px;

  outline: none;
  border: none;
  color: var(--tg-theme-button-text-color);
  background-color: ${(props) => {
    let color = "";
    switch (props.color) {
      case "default":
        color = "var(--tg-theme-bg-color)";
        break;
      case "add":
        color = "#52d463";
        break;
      case "remove":
        color = "#ea6056";
        break;
      default:
        break;
    }
    return color;
  }};
`;

export default function Button({ type, className, children, onClick }) {
  return (
    <StyledButton onClick={onClick} color={type} className={className}>
      {children}
    </StyledButton>
  );
}
