import React from 'react';
import reactMixin from 'react-mixin';
import Reflux from 'reflux';
import Book from './book.jsx';
import BookActions from '../actions/book_actions';
import BookStore from '../stores/book_store';

@reactMixin.decorate(Reflux.connect(BookStore, 'bookList'))
export default class BookList extends React.Component {

  constructor(props) {
    super(props);
    BookActions.fetchBooks();
  }

  render() {
    return (
      <table className="bordered highlight">
        <thead>
          {this.renderHeader()}
        </thead>
        <tbody>
          {this.renderLines()}
        </tbody>
      </table>
    );
  }

  renderHeader() {
    return (
      <tr>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Número de Paginas</th>
        <th>ISBN</th>
      </tr>
    );
  }

  renderLines() {
    let lines = this.state.bookList.map((book, index) => {
      return (
        <tr key={index}>
          <td>{book.name}</td>
          <td>{book.description}</td>
          <td>{book.numberOfPages}</td>
          <td>{book.isbn}</td>
        </tr>
      );
    });

    return lines;
  }
}
