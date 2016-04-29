import React from 'react'
import BookForm from './book_form.jsx'
import BookList from './book_list.jsx'

export default class BookContainer extends React.Component {

  render() {
    return (
      <div>
        <BookForm />
        <BookList />
      </div>
    );
  }
};
