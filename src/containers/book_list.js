import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  render() {
    return (
      <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
    );
  }

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick ={() => this.props.selectBook(book )}
          key={book.title}
          className="list-group-item">{book.title}
        </li>
      );
    });
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // When selectBook is called, the result should be passed to all of the
  // reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}


// Promote BookList from a component to a container - it needs to know about
// this new dispatch method, selectedBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
