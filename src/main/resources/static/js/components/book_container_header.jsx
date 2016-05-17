import React from 'react';

export default class BookContainerHeader extends React.Component {
  render () {
    return (
      <nav className="light-blue lighten-1 menu-bottom" role="navigation">
        <div className="nav-wrapper container">
          {this.renderLogo()}
          <a href="#" data-activates="nav-mobile" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    );
  }

  renderLogo() {
    return (
      <a id="logo-container" href="#" className="brand-logo">
        BookStore do Léo
      </a>
    );
  }
}

export default BookContainerHeader;
