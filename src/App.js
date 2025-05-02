import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Admin } from './Pages/admin'
import { WatchVideo } from './Pages/watchVideo'
import { Login } from './Pages/login'

import './App.css';



// const addVideoWTUser = () => {
//   axios.post(BACKEND_URL+"/addVideoWTUser", {
//     userId: 1,
//     videoId: 1,
//     watchTime: 10
//   })
// }

function App() {

  let homePage = <Login/>
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='mainTitle'>
          PP Project Master
        </h1>
        <Router>
          <Routes>
            <Route path="/" element={homePage}/>
            <Route path="/video" element={<WatchVideo/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
