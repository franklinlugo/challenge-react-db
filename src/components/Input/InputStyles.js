import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: min-content 12rem;
  grid-template-areas:
    'label input'
    'slider slider';
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  margin: 0 0 2rem 0;
  label {
    grid-area: label;
    white-space: nowrap;
  }
  input {
    grid-area: input;
    text-align: center;
    font-weight: 600;
  }
`;
