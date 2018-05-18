import React from 'react';

export default class PreviousGame extends React.Component {
  render() {
    const game = this.props.game;
    const previousGameStyle = {
      gridRow: "span 2",
      gridColumn: "span 2",
      backgroundSize: "cover",
      backgroundPosition: "center",
      brightness: "50%",
      backgroundImage: `url(${game.imgUrl})`,
    }
    return (
    <div style={previousGameStyle}/>
    )
  }
}
