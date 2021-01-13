import * as React from 'react';
import { func } from 'prop-types';
import { Container } from './ActionButtonsStyles';

function ActionButtons({ handleGetCredit = () => {}, handleGetInstallmenstDetails = () => {} }) {
  return (
    <Container>
      <button className="getCredit" type="button" onClick={handleGetCredit}>
        OBTENÉ CRÉDITO
      </button>
      <button className="getInstallmenstDetails" type="button" onClick={handleGetInstallmenstDetails}>
        VER DETALLE DE CUOTAS
      </button>
    </Container>
  );
}

ActionButtons.propTypes = {
  handleGetCredit: func,
  handleGetInstallmenstDetails: func,
};

export default ActionButtons;
