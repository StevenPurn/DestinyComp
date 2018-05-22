import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import db from '../../database/db';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.games[0].name,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //send request to db to increase vote for active thing
    this.props.handleClick();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });

  }

  render() {
    const { classes, games } = this.props;
    const choices = games.map(game =>
      <FormControlLabel value={game.name} control={<Radio color="primary" />} label={game.name} />);

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <Typography gutterBottom variant="headline" component="h1">
            Next Month&apos;s Game
          </Typography>
          <RadioGroup
            aria-label="next-month"
            name="next-month"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            {choices}
          </RadioGroup>
          <Button variant="raised" color="primary" onClick={() => this.handleClick()}>
            Submit Vote
          </Button>
        </FormControl>
      </div>
    );
  }
}

Poll.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Poll);
