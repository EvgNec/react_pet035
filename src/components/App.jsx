import React, { Component } from 'react';
import * as API from './Api/Api.js';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/index.js';
import Button from './Button/Button';
import css from './App.module.css';
import Modal from './Modal/Modal.js';
import { Loader } from './Loader/Loader.js';

export class App extends Component {
  state = {
    img: [],
    search: '',
    isLoading: false,
    error: false,
    page: 1,
    showModal: false, // початково прихована
    selectedImage: null, // сюди зберігатимемо велике зображення
  };

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
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleImageClick = largeImageURL => {
    this.setState({
      selectedImage: largeImageURL,
      showModal: true,
    });
  };

  render() {
    const { img, showModal, isLoading } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSearch} value={this.state.search.trim()} />
        {isLoading && <Loader/>}
        <ImageGallery image={img} onImageClick={this.handleImageClick} />
        {img.length > 0 && (
          <Button onClick={this.handleLoadMore}>Load More </Button>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.selectedImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
