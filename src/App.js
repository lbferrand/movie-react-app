import { useEffect } from 'react'

import './App.css';
import SearchIcon from './search.svg';

// 4d861d85

const API_URL = 'http://www.omdbapi.com?apikey=4d861d85';

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Under the Tuscan Sun');
  }, []);

  return (
    <div className='app'>
      <h1>Movie Land</h1>

      <div className='search'>
        <input
          placeholder='Search for movies'
          value='Superman'
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          
        />
      </div>
    </div>
  );
}

export default App
