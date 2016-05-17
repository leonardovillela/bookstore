import React from 'react';
import ReactDOM from 'react-dom';
import BookContainer from './components/book_container.jsx';

ReactDOM.render(<BookContainer />, document.querySelector("div#main"));

$(document).ready(function() {
  $('select').material_select();
});