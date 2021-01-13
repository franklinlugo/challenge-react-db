import * as React from 'react';
import { string, number, func } from 'prop-types';
import { Slider } from 'components';
import { Container } from './InputStyles';

function Input({ label, htmlFor, value, onChange, min, max }) {
  function handleInputChange(event) {
    const { value: inputValue } = event.target;
    onChange(Number(inputValue));
  }

  function handleSliderChange(sliderValue) {
    onChange(Number(sliderValue));
  }

  return (
    <Container>
      <label htmlFor={htmlFor}>{label}</label>
      <input type="text" name={htmlFor} id={htmlFor} value={value} onChange={handleInputChange} />
      <Slider min={min} max={max} value={value} onChange={handleSliderChange} />
    </Container>
  );
}

Input.propTypes = {
  label: string.isRequired,
  htmlFor: string.isRequired,
  value: number.isRequired,
  onChange: func.isRequired,
  min: number.isRequired,
  max: number.isRequired,
};

export default Input;
