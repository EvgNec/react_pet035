import React, { Component } from 'react';
import styles from './Searchbar.module.css';


export default class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
    
  handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmedSearch = this.state.search.trim();

    if (!trimmedSearch) return; // захист від пустого запиту

    this.props.onSubmit(trimmedSearch);
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;
    return (
      <header className={styles['Searchbar']}>
        <form
          onSubmit={this.handleSearchSubmit}
          className={styles['SearchForm']}
        >
          <button className={styles['SearchForm-button']} type="submit">
            Search
          </button>
          <input
            className={styles['SearchForm-input']}
            type="text"
            name="search"
            required
            placeholder="filter name"
            onChange={this.handleChange}
            value={search}
            autoFocus
            autoComplete="off"
          />
        </form>
      </header>
    );
  }
}