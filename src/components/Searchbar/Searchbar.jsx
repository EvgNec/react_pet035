import React, { Component } from 'react';
import styles from './Searchbar.module.css';


export default class Searchbar extends Component {

    
  render() {
  return (
    <header className={styles['Searchbar']}>
    <form
      onSubmit={this.handleFormSubmit}
      className={styles['SearchForm']}
    >
      <button className={styles['SearchForm-button']} type="submit">
        Search
      </button>
        <input
          className={styles['SearchForm-input']}
          type="text"
          name="filter"
          required
          placeholder="filter name"

        />
    </form>
    </header>
    );
}
}
// onChange={onCharge}
// value={value}