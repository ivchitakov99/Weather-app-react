import React from 'react';
import './search-history-container.scss'; 

const SearchHistoryContainer = () => {
    return (
      <div className="search-history-container">
        <div className="search-history-header">
          <h2>Search History</h2>
          <button className="close-btn">&times;</button>
        </div>
        <ul id="search-history-list"></ul>
      </div>
    );
  };
  
export default SearchHistoryContainer;