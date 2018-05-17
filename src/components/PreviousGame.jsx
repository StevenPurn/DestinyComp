import React from 'react';

export default class PreviousGame extends React.Component {
  render() {
    const game = this.props.game;
    return (
    <div>
      <img src={game.imgUrl}/>
      <div>{game.title}</div>
      <div>{game.studio}</div>
    </div>
    )
  }
}
