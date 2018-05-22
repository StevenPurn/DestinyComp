import React from 'react';

const platformImgs = {
  'PlayStation 4': './images/playstation.png',
  Steam: './images/steam.png',
  'Xbox One': './images/xbox.png',
};

const style = {
  display: 'inline-block',
  width: '100px',
};

const Platform = (props) => {
  return (
    <div style={style}>
      <img alt="google.com" src={platformImgs[props.name]} />
      <div>{props.name}</div>
    </div>
  );
};

export default Platform;
