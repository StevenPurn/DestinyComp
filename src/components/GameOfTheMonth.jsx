import React from 'react';

export default class GameOfTheMonth extends React.Component {

  render() {
    const game = this.props.game;
    return (
    <div>
      <img src={game.imgUrl}/>
      <h1>{game.title}</h1>
      <div>{game.studio}</div>
      <div>{game.releaseDate}</div>
    </div>
    )
  }
}
