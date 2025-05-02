import axios from 'axios';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Admin } from './Pages/admin'
import { WatchVideo } from './Pages/watchVideo'
import { Login } from './Pages/login'

import './App.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


//data will be the string we send from our server
const apiCall = () => {
  axios.get(BACKEND_URL).then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}
const addVideoWTUser = () => {
  axios.post(BACKEND_URL+"/addVideoWTUser", {
    userId: 1,
    videoId: 1,
    watchTime: 10
  })
}

function App() {

  let homePage = <Login/>
  
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={homePage}/>
            <Route path="/video" element={<WatchVideo/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Routes>
        </Router>
        <label>{BACKEND_URL}</label>
        <button onClick={apiCall}>Make API Callll</button>
        <button onClick={addVideoWTUser}>ADDdd VIDEO WT USER</button>
      </header>
    </div>
  );
}

export default App;
