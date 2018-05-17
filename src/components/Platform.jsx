import React from 'react';

const platformImgs = {
  'PlayStation 4': 'http://via.placeholder.com/35x35',
  'PC': 'http://via.placeholder.com/35x35',
  'Mac': 'http://via.placeholder.com/35x35',
}

export default class Platform extends React.Component {
  render() {
    return (
      <div>
        <img src={platformImgs[this.props.name]}/>
        <div>{this.props.name}</div>
      </div>
    )
  }
}
