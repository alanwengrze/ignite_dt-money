import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 568px) {
    > img {
      width: 100px;
    }
  }
  
`;

export const NewTransactionButton = styled.button`
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["white"]};
  font-weight: bold;
  border-radius: 6px;
  padding: 12px 24px;
  border: 0;  
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
    
  }

  @media (max-width: 568px) {
    padding: 8px 16px;
  }
`;