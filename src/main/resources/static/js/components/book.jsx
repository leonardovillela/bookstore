import React from 'react'

export default class Book extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <div>
          <span>{this.props.description}</span>
        </div>
        <div>
          <span>{this.props.numberOfPages}</span>
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  numberOfPages: React.PropTypes.number.isRequired
};
