import Card from '@material-ui/core/Card';
import React from 'react';
import Platform from './Platform';
import HeaderImage from './HeaderImage';
import Comment from './Comment';

const comment = {
  username: 'Oliver',
  upvotes: 69,
  body: 'This game was utter shit',
  children: [
    {
      username: 'Andyson',
      upvotes: 0,
      body: 'I disagree, you are a bad man.',
      children: [
        {
          username: 'Robin',
          upvotes: 900,
          body: 'Shut up Andy',
          children: [],
        },
      ],
    },
  ],
};

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
  const commentDiv = comment ? <Comment comment={comment} /> : null;
  return (
    <div>
      <div style={headerStyle}>{imgs}</div>
      <h1>{game.title}</h1>
      <div>{game.studio}</div>
      <div>{game.releaseDate}</div>
      <div>{platforms}</div>
      {commentDiv}
    </div>
  );
};

export default GameOfTheMonth;
