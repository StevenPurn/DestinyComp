import React from 'react';
import Platform from './Platform.jsx';
import HeaderImage from './HeaderImage.jsx';

const GameOfTheMonth = ({ game }) => {
  const headerStyle = {
    display: 'grid',
    height: '800px',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '1px',
    textDecoration: 'none',
    opacity: '0.5',
  };
  const platforms = game.platforms.map((platform, index) => <Platform name={platform} key={index} />);
  const imgs = game.imgs.map((image, index) => <HeaderImage imgUrl={image} key={index} index={index} />);
  return (
    <div>
      <div style={headerStyle}>{imgs}</div>
      <h1>{game.title}</h1>
      <div>{game.studio}</div>
      <div>{game.releaseDate}</div>
      <div>{platforms}</div>
    </div>
  );
};

export default GameOfTheMonth;
