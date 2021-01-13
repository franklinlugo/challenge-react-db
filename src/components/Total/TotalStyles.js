import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.darkBlue1};

  .text {
    font-size: 1.2rem;
    white-space: nowrap;
    font-weight: 600;
  }
  .amount {
    font-size: 3rem;
    font-weight: 600;
    white-space: nowrap;
    &::before {
      content: '$ ';
    }
  }
`;
