import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const DropdownMenuContainer = styled(DropdownMenu.Root)`
  
`;
export const Trigger = styled(DropdownMenu.Trigger)`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme["white"]};

`
export const TriggerItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-100"]};
    > h3 {
      color: ${(props) => props.theme["green-300"]};
    }
  }

  > svg {
    color: ${(props) => props.theme["green-300"]};

    &:hover {
      color: ${(props) => props.theme["green-500"]};
    }
  }

  @media (max-width: 768px) {
    > span {
      display: none;
    }
  }
`

export const Portal = styled(DropdownMenu.Portal)`

`

export const Content = styled(DropdownMenu.Content)`
  width: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: none;
  border-radius: 6px;
  padding: 1rem;
  margin: 0.5rem 1rem 0 0;
  background-color: ${(props) => props.theme["gray-800"]};

`