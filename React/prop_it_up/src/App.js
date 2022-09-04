import './App.css';
import Person from './components/Person'

function App() {
  return (
    <div className="App">
      <Person 
        firstName={"Boba"}
        lastName={"Fett"}
        age={25}
        hair={"Black"}
      />
      <Person 
        firstName={"Jango"}
        lastName={"Fett"}
        age={88}
        hair={"Brown"}
      />
      <Person 
        firstName={"Sheev"}
        lastName={"Palpatine"}
        age={120}
        hair={"None"}
      />
      <Person 
        firstName={"Chew"}
        lastName={"Bacca"}
        age={66}
        hair={"Brown"}
      />
    </div>
  );
}

export default App;
