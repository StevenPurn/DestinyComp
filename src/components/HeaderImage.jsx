import React from 'react';

const styles = [
  {
    gridRow: 'span 3',
    gridColumn: 'span 2',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    brightness: '50%',
  },
  {
    gridRow: 'span 3',
    gridColumn: 'span 3',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    brightness: '50%',
  },
  {
    gridRow: 'span 2',
    gridColumn: 'span 1',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    brightness: '50%',
  },
  {
    gridRow: 'span 2',
    gridColumn: 'span 3',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    brightness: '50%',
  },
  {
    gridRow: 'span 2',
    gridColumn: 'span 1',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    brightness: '50%',
  },
];

const HeaderImage = (props) => {
  const style = styles[props.index];
  style.backgroundImage = `url(${props.imgUrl})`;
  return (
    <div style={style} />
  );
};

export default HeaderImage;
