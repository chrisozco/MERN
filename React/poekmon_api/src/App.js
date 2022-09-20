import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [state, setState] = useState([]);
  
  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((result) => {
      return result.json()
    }).then((value) => {
      console.log(value)
      setState(value.results)
    }).catch((error) =>{
      console.log(error)
    })
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
