import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1.5rem;
  margin-block: 1rem;
  background-color: ${props => props.theme['gray-700']};
  border-radius: 6px;

  .description {
    color: ${props => props.theme['gray-300']};
    line-height: 160%;
  }

  @media (min-width: 769px) {
    display: none;
  }

`;

export const ButtonWrapperMobile = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: end;
  align-items: center;
`;

export const CategoryAndDateMobile = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme['gray-500']};
`;

export const WrapperMobile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TransactionsTableScroll = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

`;

export const TransactionsTable = styled.table`
  display: none;
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

  @media (min-width: 769px) {
    display: table;
    width: 100%;
    
  }
`;

interface PriceHighlightProps {
  $variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${props => props.$variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};

  @media (max-width: 769px) {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 160%;
  }
`;

export const ButtonFilterWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
`;