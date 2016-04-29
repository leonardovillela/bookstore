import Reflux from 'reflux'
import FormBookActions from '../actions/form_book_actions'

var _book = {};

export default Reflux.createStore({
  listenables: FormBookActions,
  getInitialState: function() {
    return _book;
  },
  onChangeValue: function(newValue, field) {
    _book[field] = newValue;
  },
  onSubmit: function() {
    this.trigger(_book);
  }
});
