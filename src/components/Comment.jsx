import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Subcomment from './Subcomment';

const styles = theme => ({
  card: {
    width: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const rowStyle = {
  display: 'inline-block',
};

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { classes, comment } = this.props;
    const children = comment.children.map(child => <Subcomment comment={child} />);
    return (
      <div style={rowStyle}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar}>
                {comment.username[0]}
              </Avatar>
            }
            title={comment.username}
            subheader={comment.date}
          />
          <CardContent>
            <Typography variant="headline" component="h2">
              {comment.body}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <List
                component="nav"
                subheader={<ListSubheader component="div">Responses</ListSubheader>}
              >
                {children}
              </List>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comment);
