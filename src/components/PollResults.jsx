import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PollPercentages from './PollPercentages';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const PollResults = (props) => {
  const { classes } = props;
  const games = props.games.map(game => 
    <PollPercentages percentage={(game.votes / props.totalVotes) * 100} name={game.name} />);
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="headline" component="h1">
        Results for Next Month&apos;s Game
      </Typography>
      {games}
    </div>
  );
};

export default withStyles(styles)(PollResults);
