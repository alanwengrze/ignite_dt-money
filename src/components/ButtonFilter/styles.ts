import styled from "styled-components";

interface ButtonFilterProps {
  $variant: 'income' | 'outcome'
}

export const ButtonFilterContainer = styled.button<ButtonFilterProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 6px;
  border: solid 1px ${(props) => props.$variant === 'income' ? props.theme["green-500"] : props.theme["red-500"]};
  color: ${(props) => props.theme["gray-300"]};
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;

  &:hover {
    background-color: ${(props) => props.$variant === 'income' ? props.theme["green-700"] : props.theme["red-700"]};
    color: ${(props) => props.theme["white"]};
  }
`;