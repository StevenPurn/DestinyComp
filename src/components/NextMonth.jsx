import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Poll from './Poll';
import PollResults from './PollResults';

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

class NextMonth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [{ name: 'Firewatch', votes: 4 }, { name: 'Fortnite', votes: 8 }, { name: 'PUBG', votes: 1 }, { name: 'Skyrim', votes: 3 }],
      totalVotes: 16,
      voted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      voted: true
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { classes } = this.props;
    const div = this.state.voted ? <PollResults games={this.state.games} totalVotes={this.state.totalVotes} />
      : <Poll games={this.state.games} handleClick={this.handleClick} />;
    return (
      <div>
        {div}
      </div>
    );
  }
}

NextMonth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NextMonth);
