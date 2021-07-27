import React, { Component } from 'react';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';

export default class RandomColor extends Component {
  state = {
    color: ''
  }

  componentDidMount() {

    // const colorsArray = ['black', 'green', 'red', 'yellow', 'orange'];

    setInterval(() => {
      // const randIndex = Math.floor(Math.random() * colorsArray.length);
      // const selectedColor = colorsArray[randIndex];
      const selectedColor = randomColor();
      this.setState({ color: selectedColor });
    }, 1000);
  }

  render() {
    const { color } = this.state;

    return (
      <div
        style={{
          backgroundColor: color,
          width: '50rem',
          height: '50rem',
        }}></div>
    );
  }
} 

RandomColor.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
