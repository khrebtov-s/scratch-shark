import React from 'react';

const ComponentLoader = (props) => {
  if (props.pastDelay) {
    return (
      <div
        className="bg-blue-gradient"
        style={{
          width: '100vw',
          height: '100vh',
        }}
      />
    );
  } else {
    return null;
  }
};

export default ComponentLoader;
