import React from 'react';

const styles = [
  {
    gridRow: "span 3",
    gridColumn: "span 2",
    backgroundSize: "cover",
    backgroundPosition: "top",
    brightness: "50%"
  },
  {
    gridRow: "span 3",
    gridColumn: "span 3",
    backgroundSize: "cover",
    backgroundPosition: "top",
    brightness: "50%"
  },
  {
    gridRow: "span 2",
    gridColumn: "span 1",
    backgroundSize: "cover",
    backgroundPosition: "top",
    brightness: "50%"
  },
  {
    gridRow: "span 2",
    gridColumn: "span 3",
    backgroundSize: "cover",
    backgroundPosition: "top",
    brightness: "50%"
  },
  {
    gridRow: "span 2",
    gridColumn: "span 1",
    backgroundSize: "cover",
    backgroundPosition: "top",
    brightness: "50%"
  },
]

export default class HeaderImage extends React.Component {
  render() {
    const style = styles[this.props.index];
    style.backgroundImage = `url(${this.props.imgUrl})`;
    return (
    <div style={style}>
    </div>
    )
  }
}
