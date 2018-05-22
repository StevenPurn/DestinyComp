import React from 'react';

const platformImgs = {
  'PlayStation 4': './images/playstation.png',
  Steam: './images/steam.png',
  'Xbox One': './images/xbox.png',
};

const divStyle = {
  display: 'inline-block',
  width: '100px',
  height: '100px',
  alignContent: 'center',
};

const imgStyle = {
  display: 'inline-block',
  width: '50px',
  height: '50px',
  alignSelf: 'center',
};

const Platform = (props) => {
  return (
    <div style={divStyle}>
      <img style={imgStyle} alt="google.com" src={platformImgs[props.name]} />
      <div>{props.name}</div>
    </div>
  );
};

export default Platform;
