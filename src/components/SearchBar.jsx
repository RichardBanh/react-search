import React, { Component } from "react";

class SearchBar extends Component {
  onInputChange() {
    
  }
  render() {
    return (
      <div className="flexbox-center">
        <label htmlFor='text'>Search</label>
        <input type='text' />
      </div>
    );
  }
}

export default SearchBar;
