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
    page: 1,
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

  onSearch = async (value, page = 1) => {
    try {
      this.setState({ isLoading: true });
      const img = await API.getImg(value, page);
  
      this.setState(prevState => ({
        img: page === 1 ? img.hits : [...prevState.img, ...img.hits], // додає зображення
        isLoading: false,
        search: value,
        page,
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.error(error);
    }
  };

  handleLoadMore = () => {
    const { search, page } = this.state;
    const nextPage = page + 1;
    this.onSearch(search, nextPage);
  };

  render() {
    const { img} = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSearch} value={this.state.search.trim()}/>
        <ImageGallery image={img}/>
        {img.length > 0 && (
        <button onClick={this.handleLoadMore}>More</button>
      )}
      </div>
    )
  }
}

export default App

