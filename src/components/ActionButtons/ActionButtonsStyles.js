import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 0.5rem;
  .getCredit {
    font-weight: 600;
    font-size: 1.5rem;
    background-color: ${(props) => props.theme.green};
    border: none;
    outline: none;
    cursor: pointer;
  }
  .getInstallmenstDetails {
    font-weight: 600;
    background-color: ${(props) => props.theme.lightBlue};
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
