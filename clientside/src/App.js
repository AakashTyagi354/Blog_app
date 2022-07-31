
import './App.css';
import Topbar from './component/topbar/Topbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/setting/Setting';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <div className="App">

      <Router>
        <Topbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/register' exact element={ user ?<Home/>: <Register/>}/>
          <Route path='/login' exact element={user ? <Home/>:<Login/>}/>
          <Route path='/write' exact element={ user ? <Write/> : <Register/>}/>
          <Route path='/setting' exact element={ user? <Setting/>:<Register/>}/>
          <Route path='/post/:postId' exact element={<Single/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
