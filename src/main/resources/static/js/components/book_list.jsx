import React from 'react'
import reactMixin from 'react-mixin'
import Reflux from 'reflux'
import Book from './book.jsx'
import BookActions from '../actions/book_actions'
import BookStore from '../stores/book_store'

export default class BookList extends React.Component {
  render() {
    return (
      <div>
        {
          this.state.bookList.books.map((book, index) => {
            return (
              <div key={index}>
                <Book
                  name={book.name}
                  description={book.description}
                  numberOfPages={book.numberOfPages} />
                <button onClick={BookActions.removeBook.bind(null, index)}>
                  Deletar
                </button>
              </div>
            );
          })
        }
      </div>
    );
  }
}

reactMixin.onClass(BookList, Reflux.connect(BookStore, "bookList"));
