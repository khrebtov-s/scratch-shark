import React from 'react';
import './Loader.scss';
import PropTypes from 'prop-types';

const Loader = (props) => {
  const { style } = props;
  return (
    <div className="lds-ring" style={style || { left: '45%' }}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

Loader.propTypes = {
  style: PropTypes.object,
};

Loader.defaultProps = {
  style: {},
};

export default Loader;
