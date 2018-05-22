import Typography from '@material-ui/core/Typography';
import React from 'react';
import Platform from './Platform';
import HeaderImage from './HeaderImage';

const GameOfTheMonth = ({ game }) => {
  const headerStyle = {
    display: 'grid',
    height: '600px',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '1px',
    textDecoration: 'none',
  };
  const platforms = game.platforms.map((platform, index) =>
    <Platform name={platform} key={index} />);
  const imgs = game.imgs.map((image, index) =>
    <HeaderImage imgUrl={image} key={index} index={index} />);
  return (
    <div>
      <div style={headerStyle}>{imgs}</div>
      <Typography gutterBottom variant="headline" component="h1">
        {game.title}
      </Typography>
      <Typography gutterBottom variant="headline" component="h3">
        {game.studio}
      </Typography>
      <Typography gutterBottom variant="headline" component="h3">
        {game.releaseDate}
      </Typography>
      <div>{platforms}</div>
    </div>
  );
};

export default GameOfTheMonth;
