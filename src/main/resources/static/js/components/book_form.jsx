import React from 'react';
import Reflux from 'reflux';
import reactMixin from 'react-mixin'
import FormBookActions from '../actions/form_book_actions';
import BookActions from '../actions/book_actions';
import FormBookStore from '../stores/form_book_store';
import BookInput from './book_input.jsx';
import AuthorsAutocomplete from './authors_auto_complete.jsx';

@reactMixin.decorate(Reflux.connect(FormBookStore, "book"))
export default class BookForm extends React.Component {

  render() {
    return (
      <form className="row" onSubmit={this.handleSubmit.bind(this)}>

        <div className="row">
          <BookInput className="col s12 m6 l4" type="text" label="Nome" name="name"/>
          <BookInput className="col s12 m6 l4" type="text" label="ISBN" name="isbn"/>
          <BookInput className="col s12 m6 l4" type="number" label="Número de Paginas" name="numberOfPages"/>
        </div>

        <div className="row">
          <BookInput className="col s12 m6 l6" type="text" label="Descrição" name="description"/>
          <AuthorsAutocomplete className="col s12 m12 l6"/>
        </div>

        <div className="row display-initial">
          <button className="valign btn waves-effect waves-light col s2 m2 l2 right" type="submit">
          Adicionar
          </button>
        </div>
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    FormBookActions.submit();

    var clone = Object.assign({}, this.state.book);
    clone.authors = this._getAuthors();

    BookActions.addBook(clone);
  }

  _getAuthors() {
    let authorsRawId = $('select').val();
    return this._parseAuthors(authorsRawId);
  }

  _parseAuthors(rawAuthors) {
    return rawAuthors.map(authorId => {
      return {id: authorId};
    });
  }
}
