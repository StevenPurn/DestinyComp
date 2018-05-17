import React from 'react';
import ReactDOM from 'react-dom';
import GameOfTheMonth from './components/GameOfTheMonth.jsx';
import PreviousGames from './components/PreviousGames.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {
        title: 'Octodad: Dadliest Catch',
        studio: 'Young Horses',
        releaseDate: '4/1/17',
        platforms: ['PlayStation 4', 'PC', 'Mac'],
        imgs: [
          'https://vignette.wikia.nocookie.net/markiplier/images/7/7e/OctodadDadliestCatch.png',
          'https://steamcdn-a.akamaihd.net/steam/apps/224480/header.jpg?t=1478027333',
          'https://www.touchtapplay.com/wp-content/uploads/2015/11/octodad-dadliest-catch-review.jpg',
          'https://i.ytimg.com/vi/zHgTF6YLUnE/hqdefault.jpg',
          'https://cdn.mos.cms.futurecdn.net/e94febb22d0cff2e59f5f9b836afa95f.jpeg'
        ],
      }
    }
  }

  render() {
    return (
    <div>
      <GameOfTheMonth game={this.state.game}/>
      <PreviousGames />
    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
