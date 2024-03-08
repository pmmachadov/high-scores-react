import React, { useState } from 'react';
import allCountryScores from './data/scores';
import HighScoreTable from './components/HighScoreTable/HighScoreTable';
import styles from './App.module.css';

const App = () => {
  const [ascending, setAscending] = useState(false);

  const toggleSortOrder = () => {
    setAscending(!ascending);
  };

  const sortedCountries = allCountryScores.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={ styles.app }>
      <button onClick={ toggleSortOrder }>
        Sort { ascending ? 'Descending' : 'Ascending' }
      </button>
      { sortedCountries.map((country) => (
        <HighScoreTable
          key={ country.name }
          country={ country }
          ascending={ ascending }
        />
      )) }
    </div>
  );
};

export default App;
