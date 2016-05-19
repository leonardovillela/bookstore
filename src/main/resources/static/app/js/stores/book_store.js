import Reflux from 'reflux';
import BookActions from '../actions/book_actions';
import reqwest from 'reqwest';
import Materialize from 'materialize-css';

var _state = {
  books: []
};

export default Reflux.createStore({
  listenables: BookActions,
  getInitialState: function() {
    return _state.books;
  },

  onFetchBooks: function() {
    let promise = reqwest({
       url: '/books',
       method: 'get'
    });

    promise.then(
      (resp) => { this.updateBooks(resp); },
      (err, msg) => { Materialize.toast('Falha ao buscar livros!', 4000); }
    );
  },

  onAddBook: function(book) {
    let promise = reqwest({
      url: '/books',
      method: 'POST',
      data: JSON.stringify(book),
      contentType: 'application/json'
    });

    promise.then(
      (resp) => {  Materialize.toast('Livro inserido com sucesso!', 4000); },
      (err, msg) => { Materialize.toast('Falha ao inserir livro!', 4000); }
    );
  },

  onRemoveBook: function(bookForDeleteIndex) {
    var updatedBooks = _state.books.filter((book, index) => {
      return index != bookForDeleteIndex;
    });
    this.updateBooks(updatedBooks);
  },

  updateBooks: function(newBooks) {
    _state.books = newBooks;
    this.trigger(_state.books);
  }
});
