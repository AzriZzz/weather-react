import React, { Component } from 'react';

import SearchBar from '../container/search_bar';
import WeatherList from '../container/weather_list';

export default class App extends Component {
  render() {
    return (
      // <div>React simple starter</div>
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
