import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 1px solid ${(props) => props.theme["green-300"]};
    border-radius: 6px;
    background-color: transparent;
    color: ${(props) => props.theme["green-300"]};
    font-weight: bold;
    padding: 1rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme["green-500"]};
      border-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme["white"]};
    }

    @media (max-width: 768px) {
      width: fit-content;
      > p {
        display: none;
      }
    }

  }

`;