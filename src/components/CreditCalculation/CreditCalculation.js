import * as React from 'react';
import { Title, Total, ActionButtons } from 'components';
import { Container } from './CreditCalculationStyles';

function CreditCalculation() {
  return (
    <Container>
      <Title />
      <Total amount={376570} />
      <ActionButtons />
    </Container>
  );
}

export default CreditCalculation;
