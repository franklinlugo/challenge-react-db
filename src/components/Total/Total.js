import * as React from 'react';
import { oneOfType, string, number } from 'prop-types';
import { Container } from './TotalStyles';

function Total({ amount = 0 }) {
  return (
    <Container>
      <span className="text">CUOTA FIJA POR MES</span>
      <span className="amount">{amount}</span>
    </Container>
  );
}

Total.propTypes = {
  amount: oneOfType([string, number]),
};

export default Total;
