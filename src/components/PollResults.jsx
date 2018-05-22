import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PollPercentages from './PollPercentages';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const paperStyle = {
  width: '400px',
  height: '300px',
  padding: '15px',
  margin: '15px',
};

const PollResults = (props) => {
  const { classes } = props;
  const games = props.games.map(game => 
    <PollPercentages percentage={(game.votes / props.totalVotes) * 100} name={game.name} />);
  return (
    <Paper className={classes.root} style={paperStyle}>
      <Typography gutterBottom variant="headline" component="h1">
        Results for Next Month&apos;s Game
      </Typography>
      {games}
    </Paper>
  );
};

export default withStyles(styles)(PollResults);
