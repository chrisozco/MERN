import React, {useState} from 'react';
import './App.css';
import Box from './components/Box';
import Form from './components/Form';

function App() {
  const [boxColor, setBoxColor] = useState([])

  return (
    <div className="App">
      <Form boxColor={boxColor} setBoxColor={setBoxColor} />
      <Box boxColor={boxColor}/>
    </div>
  );
}

export default App;
