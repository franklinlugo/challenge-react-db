import * as React from 'react';
import { number, func } from 'prop-types';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Container } from './SliderStyles';

function Slider({ min, max, value, onChange }) {
  return (
    <Container>
      <RCSlider min={min} max={max} value={value} onChange={onChange} />
    </Container>
  );
}

Slider.propTypes = {
  min: number.isRequired,
  max: number.isRequired,
  value: number.isRequired,
  onChange: func.isRequired,
};

export default Slider;
