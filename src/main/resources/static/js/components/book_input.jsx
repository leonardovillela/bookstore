import React from 'react';
import FormBookActions from '../actions/form_book_actions'

export default class BookInput extends React.Component {

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type={this.props.type} name={this.props.name} onChange={this.handleChange} />
      </div>
    );
  }

  handleChange(e) {
    let value = e.target.value;
    let field = e.target.name;
    FormBookActions.changeValue(value, field);
  }
}

BookInput.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired
};
