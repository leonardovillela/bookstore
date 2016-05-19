import React from 'react';
import BookForm from './book_form.jsx';
import BookList from './book_list.jsx';
import BookContainerHeader from './book_container_header.jsx';

export default class BookContainer extends React.Component {

  render() {
    return (
      <div>
        <BookContainerHeader />
        <div className="container">
          <BookForm />
          <BookList />
        </div>
      </div>
    );
  }
};
