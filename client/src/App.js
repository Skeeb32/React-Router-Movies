import React, { useState } from 'react';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Route exact path ="/" component={MovieList} />
      <Route path ="/movies/:id" component={Movie} />
      <SavedList list={savedList} />
      <div></div>
    </div>
  );
};

export default App;
