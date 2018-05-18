import React from 'react';
import ReactDOM from 'react-dom';
import GameOfTheMonth from './components/GameOfTheMonth.jsx';
import PreviousGames from './components/PreviousGames.jsx';
import NextMonth from './components/NextMonth.jsx';

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
          'https://news-cdn.softpedia.com/images/news2/Octodad-Dadliest-Catch-Is-Headed-to-the-Xbox-One-and-Wii-U-This-Summer-video-475708-2.jpg',
          'https://cdn.videogamesblogger.com/wp-content/uploads/2014/01/octodad-dadliest-catch-walkthrough.jpg',
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
      <NextMonth />
      <PreviousGames />
    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
