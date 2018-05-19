import React from 'react';

const platformImgs = {
  'PlayStation 4': 'http://via.placeholder.com/35x35',
  Steam: 'http://via.placeholder.com/35x35',
  'Xbox One': 'http://via.placeholder.com/35x35',
};

const Platform = (props) => {
  return (
    <div>
      <img alt="google.com" src={platformImgs[props.name]} />
      <div>{props.name}</div>
    </div>
  );
};

export default Platform;
