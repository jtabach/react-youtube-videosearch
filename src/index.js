import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDXrY5YCNGwaUD19FvtiXLCn_BCb0qT5IM';

// Create a new component. This component should produce
// some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's genreated HTLM an dput it
// on the page (in the DOM)
ReactDOM.render(
  <App />
  ,
  document.querySelector('.container')
);
