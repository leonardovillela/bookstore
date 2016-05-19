import React from 'react';
import Reflux from 'reflux';
import reactMixin from 'react-mixin';
import AuthorStore from '../stores/author_store';
import AuthorActions from '../actions/author_actions';
import FormBookActions from '../actions/form_book_actions';
import reqwest from 'reqwest';
import Materialize from 'materialize-css';
import $ from 'jquery';

export default class AuthorsAutocomplete extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      authors: []
    }
  }

  componentDidMount() {
    let promise = reqwest({
      url: '/authors',
      method: 'get'
    });

    promise.then(this.sucessHandler.bind(this), this.errorHandler.bind(this));
  }

  sucessHandler(data) {
    this.setState({authors: data});
    $('select').material_select(() => 'update');
  }

  errorHandler() {
    $('.tooltipped').tooltip('remove');
    Materialize.toast('Falha ao buscar autores!', 4000);
  }

  render () {
    return (
      <div className={"input-field " + this.props.className}>
        <select name="authors" multiple={true}>
          <option value="" disabled defaultValue>Selecione o(s) autor(es)</option>
          {this.renderAuthors()}
        </select>
        <label>Autores</label>
      </div>
    );
  }

  renderAuthors() {
    let authors = this.state.authors.map((author, index) => {
      return (
        <option key={index} value={author.id} onClick={this.handleChange}>
          {author.name}
        </option>
      )
    });

    return authors;
  }
}
