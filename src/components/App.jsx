import React, { Component } from 'react';
import * as API from './Api/Api.js';
import Searchbar from './Searchbar/index.js';
import ImageGallery from './ImageGalleryItem/index.js';





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

      this.setState({ img: img.hits, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  // async filtredImg() {
  //   try {
  //     const response = await API.getImg();
  //     return response.data; // або якась обробка
  //   } catch (error) {
  //     console.error('Помилка завантаження зображень:', error);
  //     throw error;
  //   }
  // }

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

