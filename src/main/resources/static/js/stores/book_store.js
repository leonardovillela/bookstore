import Reflux from 'reflux'
import BookActions from '../actions/book_actions'

export default Reflux.createStore({
  listenables: BookActions,
  state: {
    books: [{
      name: 'Primeiro',
      description: 'Meu primeiro teste',
      numberOfPages: 200
    }]
  },
  getInitialState: function() {
    return this.state;
  },
  onAddBook: function(book) {
    var updatedBooks = this.state.books.slice();
    updatedBooks.push(book);
    this.updateBooks(updatedBooks);
  },
  onRemoveBook: function(bookForDeleteIndex) {
    var updatedBooks = this.state.books.filter((book, index) => {
      return index != bookForDeleteIndex
    });
    this.updateBooks(updatedBooks);
  },
  updateBooks: function(newBooks) {
    this.state.books = newBooks;
    this.trigger(this.state);
  }
});
