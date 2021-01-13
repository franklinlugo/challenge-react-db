import styled from 'styled-components';

export const Container = styled.div`
  width: 750px;
  padding: 2rem;
  background-color: ${(props) => props.theme.darkBlue};
  transform: translateY(-25%);
  color: white;
`;
