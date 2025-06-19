import React, { Component } from 'react';
import * as API from './Api/Api.js';
import Searchbar from './Searchbar/index.js';





export class App extends Component {
  static state = {
    img: [],
    isLoading: false,
    error: false,
  }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const img = await API.getImg();

      this.setState({ img, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <Searchbar/>
      </div>
    )
  }
}

export default App

