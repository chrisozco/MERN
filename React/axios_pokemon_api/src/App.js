import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [state, setState] = useState([])

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((response) => {setState(response.data.results)})
    .catch((error) => console.log(error))
  }, [])

  return (
    <div className="App">
      <ol className='list-group'>
        {
          state.map((pokemon, index) => {
            return (
              <li key={index} className='list-group-item list-group-item-info'>{pokemon.name}</li>
            )
          })
        }
      </ol>
    </div>
  );
}

export default App;
