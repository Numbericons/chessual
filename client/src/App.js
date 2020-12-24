import logo from './logo.svg';
import './App.css';

const axios = require('axios');

const hitBackend = () => {
  axios.get('/test')
    .then((response) => {
      console.log(response.data)
    })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={hitBackend}>Send request</button>
      
      </header>
    </div>
  );
}

export default App;
