import logo from './logo.svg';
import './App.css';

function MagicButton() {
  return (
    <div>
    <h3>This is a magic button</h3>
    <button>Magic</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Tyler and MSU!
        </a>
        <MagicButton />
      </header>
    </div>
  );
}

export default App;
