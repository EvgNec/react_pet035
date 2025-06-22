import React, { Component } from 'react';
import * as API from './Api/Api.js';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/index.js';





export class App extends Component {
 state = {
    img: [],
    isLoading: false,
    error: false,
  }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const img = await API.getImg();
      console.log("🚀 ~ App ~ componentDidMount ~ img:", img)
      this.setState({ img: img.hits, isLoading: false });
      } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
     
  }

  render() {
    const { img } = this.state;
    return (
      <div>
        <Searchbar/>
        <ImageGallery image={img}/>
      </div>
    )
  }
}

export default App

