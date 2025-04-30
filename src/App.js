import logo from './logo.svg';
import axios from 'axios';

import './App.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

//data will be the string we send from our server
const apiCall = () => {
  axios.get(BACKEND_URL).then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label>{BACKEND_URL}</label>
        <button onClick={apiCall}>Make API Call</button>
      </header>
    </div>
  );
}

export default App;
