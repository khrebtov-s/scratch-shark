import React from 'react';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';

import 'rc-slider/assets/index.css';
import './slider.scss';

const SliderComponent = (props) => {
  const { marks, ...rest } = props;
  const marksObject = Object.assign(
    {},
    marks.map((value, index) => {
      return (
        <span
          key={value}
          id={`pos${index}`}
          style={{
            color: '#fff',
            fontSize: '14px',
            left: '-10px',
            top: '-55px',
            position: 'absolute',
          }}
        >
          {`$${value}`}
        </span>
      );
    }),
  );
  return <Slider {...rest} marks={marksObject} />;
};

SliderComponent.propTypes = {
  marks: PropTypes.array.isRequired,
};

export default SliderComponent;
