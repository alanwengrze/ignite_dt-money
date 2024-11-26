import styled from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem;
  gap: 2rem;
  margin-top: -5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;