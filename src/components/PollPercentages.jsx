import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const PollPercentages = (props) => {
  return (
    <div>
      <Typography variant="subheading" component="h3">
        {props.name}
      </Typography>
      <LinearProgress variant="determinate" min={0} max={100} value={props.percentage} />
    </div>
  );
};

export default PollPercentages;
