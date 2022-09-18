import React, {useState} from 'react';
import Create from './components/Create';
import List from './components/List';
import './App.css';

function App() {
  const [toDo, setToDo] = useState([])
  
  return (
    <div className="App">
      <Create toDo={toDo} setToDo={setToDo}/>
      <List toDo={toDo} setToDo={setToDo}/>
    </div>
  );
}

export default App;
