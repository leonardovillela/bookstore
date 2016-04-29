import React from 'react'
import Reflux from 'reflux'
import reactMixin from 'react-mixin'
import FormBookActions from '../actions/form_book_actions'
import BookActions from '../actions/book_actions'
import FormBookStore from '../stores/form_book_store'
import BookInput from './book_input.jsx'

export default class BookForm extends React.Component {

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <BookInput type="text" label="Name" name="name"/>
        <BookInput type="text" label="Description" name="description"/>
        <BookInput type="number" label="Number of Pages" name="numberOfPages"/>
        <button type="submit" value="submit">Enviar</button>
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    FormBookActions.submit();
    var clone = Object.assign({}, this.state.book);
    BookActions.addBook(clone);
  }
}

reactMixin.onClass(BookForm, Reflux.connect(FormBookStore, "book"));
