import React from "react";
import styled from "@emotion/styled";

const Button = ({ text, handleClick, disabled }) => {
  return (
    <StyledButton
      backgroundcolor={disabled ? "#C6C6C6" : "#007bff"}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 10%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${(p) => p.backgroundcolor};
  color: #fff;
  border-radius: 4px;
  margin-left: 12px;
  cursor: pointer;
`;

export default Button;
