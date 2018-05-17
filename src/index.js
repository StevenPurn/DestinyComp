import React from 'react';
import ReactDOM from 'react-dom';
import GameOfTheMonth from './components/GameOfTheMonth.jsx';

const title = 'Testing reload';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {
        title: 'Octodad: Dadliest Catch',
        studio: 'Young Horses',
        releaseDate: '4/1/17',
        platforms: ['PlayStation 4', 'PC', 'Mac'],
        imgUrl: 'https://vignette.wikia.nocookie.net/markiplier/images/7/7e/OctodadDadliestCatch.png',
      }
    }
  }

  render() {
    return (
    <div>
      <GameOfTheMonth game={this.state.game}/>
    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
