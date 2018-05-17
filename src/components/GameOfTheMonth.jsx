import React from 'react';
import Platform from './Platform.jsx';

export default class GameOfTheMonth extends React.Component {

  render() {
    const game = this.props.game;
    const platforms = game.platforms.map((platform, index) => {
      return <Platform name={platform} key={index}/>
    })
    return (
    <div>
      <img src={game.imgUrl}/>
      <h1>{game.title}</h1>
      <div>{game.studio}</div>
      <div>{game.releaseDate}</div>
      <div>{platforms}</div>
    </div>
    )
  }
}
