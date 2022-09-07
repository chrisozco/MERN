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
    </div>
  );
}

export default App;

