import React from 'react';

const PreviousGame = (props) => {
  const game = props.game;
  const previousGameStyle = {
    gridRow: 'span 2',
    gridColumn: 'span 2',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    brightness: '50%',
    backgroundImage: `url(${game.imgUrl})`,
  };
  return (
    <div style={previousGameStyle} />
  );
};

export default PreviousGame;
