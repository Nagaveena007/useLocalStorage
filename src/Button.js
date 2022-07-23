import styled from "styled-components";

const Button = ({ text, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick} type="button">
      {text}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  border: 1px solid black;
  background: white;
  padding: 10px 20px;
  border-radius: 20px;
`;
