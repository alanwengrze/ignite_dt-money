import styled from "styled-components";

export const CardSummaryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: ${(props) => props.theme["gray-600"]};
  padding: 2rem;
  border-radius: 6px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};

  }
`;