import React, { Component } from 'react';

// functional components do not have state
// only class based components do
// everytime a class changes state,
// it's component and all of it's subcomponents rerender

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.turn}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
