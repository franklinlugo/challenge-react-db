import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.lightBlue};
`;
