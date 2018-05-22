import Typography from '@material-ui/core/Typography';
import React from 'react';
import Platform from './Platform';
import HeaderImage from './HeaderImage';
import Comment from './Comment';

const comments = [{
  username: 'Oliver',
  upvotes: 69,
  body: "This game wasn't all that great",
  date: '5/13/18',
  children: [
    {
      username: 'Andyson',
      upvotes: 0,
      body: 'I disagree, you are a bad man.',
      date: '5/14/18',
      children: [],
    },
    {
      username: 'Robin',
      upvotes: 900,
      body: 'Shut up Andy',
      date: '5/14/18',
      children: [],
    },
    {
      username: 'Jessica',
      upvotes: 50,
      body: "I didn't like it either",
      date: '5/15/18',
      children: [],
    },
  ],
},
{
  username: 'Belinda',
  upvotes: 240,
  body: 'This was probably my favorite game so far',
  date: '5/18/18',
  children: [
    {
      username: 'Pooja',
      upvotes: 500,
      body: "I don't get it, he was just a normal dad.",
      date: '5/20/18',
      children: [],
    },
  ],
},
{
  username: 'Noah',
  upvotes: 9001,
  body: 'I liked the part where Fortnite is better than PUBG',
  date: '5/18/18',
  children: [
    {
      username: 'Steven',
      upvotes: 500,
      body: 'Amen',
      date: '5/20/18',
      children: [],
    },
    {
      username: 'Rongsiu',
      upvotes: 500,
      body: 'I like turtles',
      date: '5/20/18',
      children: [],
    },
  ],
},
{
  username: 'David',
  upvotes: 961,
  body: 'I liked the family aspect',
  date: '5/18/18',
  children: [
    {
      username: 'Mike',
      upvotes: 52,
      body: 'I also enjoyed that',
      date: '5/20/18',
      children: [],
    },
    {
      username: 'Zach',
      upvotes: 432,
      body: 'I have over 4,000 wins in Fortnite',
      date: '5/20/18',
      children: [],
    },
  ],
},
];

const GameOfTheMonth = ({ game }) => {
  const headerStyle = {
    display: 'grid',
    height: '600px',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '1px',
    textDecoration: 'none',
  };

  const commentStyle = {
    display: 'grid',
    gridTemplateRows: 'repeat(1, 1fr)',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '10px',
    textDecoration: 'none',
  };
  const platforms = game.platforms.map((platform, index) =>
    <Platform name={platform} key={index} />);
  const imgs = game.imgs.map((image, index) =>
    <HeaderImage imgUrl={image} key={index} index={index} />);
  const commentDiv = comments.map(comment => <Comment comment={comment} />);
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
      <div style={commentStyle}>{commentDiv}</div>
    </div>
  );
};

export default GameOfTheMonth;
