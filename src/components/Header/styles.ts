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
  
`;