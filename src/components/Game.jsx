import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HeaderImage from './HeaderImage';

const comments = [{
  username: 'Oliver',
  upvotes: 69,
  body: "This game wasn't all that good",
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
];

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
};

function Game({ game }) {
  const imgs = game.imgs.map((image, index) =>
    <HeaderImage imgUrl={image} key={index} index={index} />);
  const commentDiv = comments.map(comment => <Comment comment={comment} />);
  return (
    <div>
      <div>
        {imgs}
      </div>
      <div>
        {commentDiv}
      </div>
    </div>
  );
}

Game.propTypes = {
  game: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Game);

ReactDOM.render(
  <Game />,
  document.getElementById('game'),
);
