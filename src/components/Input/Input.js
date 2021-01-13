import * as React from 'react';
import { string, number, func, bool } from 'prop-types';
import { Slider } from 'components';
import { Container } from './InputStyles';

function Input({ label, htmlFor, value, onChange, min, max, isCurrency = false }) {
  const formattedValue = isCurrency ? `$ ${value}` : value;

  function handleInputChange(event) {
    const { value: rawValue } = event.target;
    const inputValue = isCurrency ? rawValue.replace('$', '').trim() : rawValue;
    onChange(Number(inputValue));
  }

  function handleSliderChange(sliderValue) {
    onChange(Number(sliderValue));
  }

  return (
    <Container>
      <label htmlFor={htmlFor}>{label}</label>
      <input type="text" name={htmlFor} id={htmlFor} value={formattedValue} onChange={handleInputChange} />
      <Slider min={min} max={max} value={value} onChange={handleSliderChange} isCurrency={isCurrency} />
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
  isCurrency: bool,
};

export default Input;
