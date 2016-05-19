import Reflux from 'reflux';
import AuthorActions from '../actions/author_actions';
import reqwest from 'reqwest';
import $ from 'jquery';

window.jQuery = $;

var _state = {
  authors: []
};

export default Reflux.createStore({
  listenables: AuthorActions,

  getInitialState: function() {
    return _state.authors;
  },

  onFetchAuthors: function() {
    let promise = reqwest({
       url: '/authors',
       method: 'get'
    });

    promise.then(
      (resp) => { this.updateAuthors(resp); },
      (err, msg) => {
        $('.tooltipped').tooltip('remove');
        Materialize.toast('Falha ao buscar autores!', 4000);
      }
    );
  },

  updateAuthors: function(newAuthors) {
    _state.authors = newAuthors;
    this.trigger(_state.authors);
  }
});
