import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsTableScroll = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  td {
    background-color: ${props => props.theme['gray-700']};
    padding: 1.25rem 2rem;

    &:first-child {
      color: ${props => props.theme['gray-300']};
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;

      /* display: flex;
      align-items: center;
      gap: 0.5rem; */
      
    }

  }

  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;

interface PriceHighlightProps {
  $variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${props => props.$variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};
`;