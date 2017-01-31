import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import StationList from './station_list';

export default class App extends Component {
  render() {
    return (
      <div>
          React simple starter
          <SearchBar />
          <WeatherList />
        <StationList />
      </div>

    );
  }
}
