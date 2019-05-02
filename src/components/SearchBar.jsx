import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onSubmitForm(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <div className='flexbox-center'>
        <label htmlFor='text'>Search</label>
        <form onSubmit={event => this.onSubmitForm(event)}>
          <input
            type='text'
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
