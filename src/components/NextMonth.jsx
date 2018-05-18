import React from 'react';

export default class NextMonth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      potentialGames: ['Firewatch', 'Fortnite', 'PUBG', 'Super Mario World'],
    };
  }
  render() {
    const gameList = this.state.potentialGames.map(game => <div>{game}</div>);
    return (
      <div>
        <h1>Vote on Next Month&apos;s Game</h1>
        <div>{gameList}</div>
      </div>
    );
  }
}
