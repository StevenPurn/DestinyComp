import React from 'react';
import PreviousGame from './PreviousGame';

const prevGames = [
  {
    title: 'Duck Game',
    studio: 'Adult Swim Games',
    imgUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/312530/header.jpg',
  },
  {
    title: 'Kingdom Hearts',
    studio: 'Square Enix',
    imgUrl: 'https://www.n3rdabl3.com/wp-content/images/uploads/2018/01/kingdom-hearts-logo.jpg',
  },
  {
    title: 'Chrono Cross',
    studio: 'Square Enix',
    imgUrl: 'https://techraptor.net/wp-content/uploads/2015/08/Chrono-Cross-Title-Screen.jpg',
  },
  {
    title: "The Beginner's Guide",
    studio: 'Davey Wreden',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/d/df/The_beginners_guide_cover_art.jpg',
  },
]

export default class PreviousGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: prevGames,
    }
  }

  render() {
    const games = this.state.games.map((game, index) => {
      return <PreviousGame game={game} key={index}/>
    });
    const previousGamesStyle = {
      "display": "grid",
      "height": "800px",
      "gridTemplateRows": "repeat(6, 1fr)",
      "gridTemplateColumns": "repeat(4, 1fr)",
      "gridGap": "10px",
      "textDecoration": "none",
      "color": "white",
      "align": "center",
    }
    return (
    <div>
      <h1>Previous Months' Games</h1>
      <div style={previousGamesStyle}>
        {games}
      </div>
    </div>
    )
  }
}
