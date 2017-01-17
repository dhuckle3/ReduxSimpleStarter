import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>No book selected.</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>This book has {this.props.book.pages} pages.</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.selectBook
  };
}

export default connect (mapStateToProps)(BookDetail);
