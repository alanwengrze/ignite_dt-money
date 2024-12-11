import styled from "styled-components";

interface ButtonFilterProps {
  $variant: 'income' | 'outcome'
}

export const ButtonFilterContainer = styled.button<ButtonFilterProps>`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 6px;
  background-color:${(props) => props.$variant === 'income' ? props.theme["green-500"] : props.theme["red-500"]};
  color: ${(props) => props.theme["white"]};

  &:hover {
    background-color: ${(props) => props.$variant === 'income' ? props.theme["green-700"] : props.theme["red-700"]};
  }
`;