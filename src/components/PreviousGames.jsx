import React from 'react';
import PreviousGame from './PreviousGame';

const prevGames = [
  {
    title: 'Duck Game',
    studio: 'Adult Swim Games',
    description: 'Quack',
    imgUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/312530/header.jpg',
  },
  {
    title: 'Kingdom Hearts',
    studio: 'Square Enix',
    description: 'Final Fantasy and Disney collide',
    imgUrl: 'https://www.n3rdabl3.com/wp-content/images/uploads/2018/01/kingdom-hearts-logo.jpg',
  },
  {
    title: 'Chrono Cross',
    studio: 'Square Enix',
    description: 'Traverse timelines to save the world',
    imgUrl: 'https://techraptor.net/wp-content/uploads/2015/08/Chrono-Cross-Title-Screen.jpg',
  },
  {
    title: "The Beginner's Guide",
    studio: 'Davey Wreden',
    description: 'A journey through the games of a friend',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/d/df/The_beginners_guide_cover_art.jpg',
  },
];

export default class PreviousGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: prevGames,
    };
  }

  render() {
    const games = this.state.games.map((game, index) => <PreviousGame game={game} key={index} />);
    const previousGamesStyle = {
      display: 'grid',
      height: '800px',
      gridTemplateRows: 'repeat(6, 1fr)',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: '10px',
      textDecoration: 'none',
      color: 'white',
      align: 'center',
    };
    return (
      <div>
        <h1>Previous Months&apos; Games</h1>
        <div style={previousGamesStyle}>
          {games}
        </div>
      </div>
    );
  }
}
