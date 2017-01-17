import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyCJ83sXZFEoxC5HtNVM3papGiwnpqXoXb4";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
