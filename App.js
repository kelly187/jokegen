import logo from './logo.svg';
import './App.css';
import Button from './Button'
//import joke from './Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         
        </p>
        
        <Button/>
        <code> Yours Truly </code> 
        <a
          className="App-link"
          href="/"n
          target="_blank"
          rel="noopener noreferrer"
        >
          Kelly Smart        </a>
      </header>
      <h1>Joke Generator Using React and Joke API</h1>
    </div>
  );
}

export default App;
