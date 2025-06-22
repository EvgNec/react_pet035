import React, { Component } from 'react';
import * as API from './Api/Api.js';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/index.js';





export class App extends Component {
 state = {
    img: [],
    search: '',
    isLoading: false,
    error: false,
  }

  // async componentDidMount() {
  //   try {
  //     this.setState({ isLoading: true });
  //     const img = await API.getImg();
  //     this.setState({ img: img.hits, isLoading: false });
  //     } catch (error) {
  //     this.setState({ error: true, isLoading: false });
  //     console.log(error);
  //   }
     
  // }

  onSearch = async (value) => {
    console.log("🚀 ~ App ~ onSearch ~ value:", value);
    try {
      this.setState({ isLoading: true });
      const img = await API.getImg(value);
      this.setState({ img: img.hits, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.error(error);
    }
  }
  render() {
    const { img } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSearch} value={this.state.search.trim()}/>
        <ImageGallery image={img}/>
      </div>
    )
  }
}

export default App

