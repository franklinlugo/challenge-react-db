import * as React from 'react';
import { number, func, boolean } from 'prop-types';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Container } from './SliderStyles';

const locale = 'es-AR';
const formatOptions = { style: 'currency', maximumFractionDigits: 0, currency: 'ARS' };
function Slider({ min, max, value, onChange, isCurrency = false }) {
  const formattedMax = isCurrency ? max.toLocaleString(locale, formatOptions) : max;
  const formattedMin = isCurrency ? min.toLocaleString(locale, formatOptions) : min;

  const handleStyle = {
    borderColor: 'white',
    height: 28,
    width: 28,
    marginLeft: 0,
    marginTop: -10,
    backgroundColor: 'white',
  };

  const railStyle = {
    backgroundColor: 'white',
    height: 8,
  };

  const trackStyle = {
    display: 'none',
  };

  return (
    <Container>
      <div className="sliderContainer">
        <RCSlider
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          handleStyle={handleStyle}
          railStyle={railStyle}
          trackStyle={trackStyle}
        />
      </div>
      <div className="minMax">
        <span>{formattedMin}</span>
        <span>{formattedMax}</span>
      </div>
    </Container>
  );
}

Slider.propTypes = {
  min: number.isRequired,
  max: number.isRequired,
  value: number.isRequired,
  onChange: func.isRequired,
  isCurrency: boolean,
};

export default Slider;
