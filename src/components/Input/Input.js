import * as React from 'react';
import { string, number, func } from 'prop-types';
import { Container } from './InputStyles';

function Input({ label, htmlFor, value, onChange }) {
  return (
    <Container>
      <label htmlFor={htmlFor} className="label">
        {label}
      </label>
      <input type="text" name={htmlFor} id={htmlFor} value={value} onChange={onChange} />
    </Container>
  );
}

Input.propTypes = {
  label: string.isRequired,
  htmlFor: string.isRequired,
  value: number.isRequired,
  onChange: func.isRequired,
};

export default Input;
