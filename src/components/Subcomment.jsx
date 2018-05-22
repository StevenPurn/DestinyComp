
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Avatar from '@material-ui/core/Avatar';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({
 root: {
   width: '100%',
   maxWidth: 360,
   backgroundColor: theme.palette.background.paper,
 },
 nested: {
   paddingLeft: theme.spacing.unit * 4,
 },
});

class NestedList extends React.Component {
 state = { open: true };

 handleClick = () => {
   this.setState({ open: !this.state.open });
 };

 render() {
   const { classes, comment } = this.props;

   return (
     <div className={classes.root}>
         <ListItem button>
           <ListItemIcon>
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {comment.username[0]}
              </Avatar>
           </ListItemIcon>
           <ListItemText inset primary={comment.body} />
         </ListItem>
         <Collapse in={this.state.open} timeout="auto" unmountOnExit>
           <List component="div" disablePadding>

           </List>
         </Collapse>
     </div>
   );
 }
}

NestedList.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);