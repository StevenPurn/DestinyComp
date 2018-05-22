import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const PollPercentages = (props) => {
  const style = {
    margin: '20px',
  };
  return (
    <div style={style}>
      <Tooltip id="tooltip-right-start" title={props.percentage + '%'} placement="right-end">
        <div>
          <Typography variant="subheading" component="h3">
            {props.name}
          </Typography>
          <LinearProgress variant="determinate" min={0} max={100} value={props.percentage} />
        </div>
      </Tooltip>
    </div>
  );
};

export default PollPercentages;
