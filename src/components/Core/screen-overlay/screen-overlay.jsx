import React, {memo} from 'react';
import './screen-overlay.scss'; 
import { useSearchContext } from '../../contexts/SearchContext';

const ScreenOverlay = () => {
  console.log("ScreenOverlay rendering");
  const { showSearchHistory, setShowSearchHistory } = useSearchContext();

  const handleOverlayClick = (e) => {
    // Hide both components when clicking outside the SearchHistoryContainer
    if (showSearchHistory && !e.target.closest('.search-history-container')) {
      setShowSearchHistory(false);
    }
  };

  return showSearchHistory ? (
    <div className="screen-overlay" onClick={handleOverlayClick} /*style={{ display: 'none' }}*/>
      <div className="screen-overlay-blur"></div>
    </div>
  ): null;
};

export default memo(ScreenOverlay);
