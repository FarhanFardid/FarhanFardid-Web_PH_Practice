import logo from './logo.svg';
import './App.css';
const person ={
  name:'John',
  age: 52
};

const nameStyle ={
  color: 'red', 
  backgroundColor: 'yellow'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <p style={nameStyle}>Name : {person.name}</p>
        <p>age: {person.age}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
