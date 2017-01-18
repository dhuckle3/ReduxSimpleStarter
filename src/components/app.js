import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import StationList from './station-list';

export default class App extends Component {
  render() {
    return (
      <div>
        React simple starter
        <SearchBar />
        <StationList />
      </div>

    );
  }
}
