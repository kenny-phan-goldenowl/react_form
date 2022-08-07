import {Routes, Route} from 'react-router-dom';
import './App.css';
import SignUp from './Components/SignUpPage/SignUp';
import Login from './Components/LoginPage/Login';
import Home from './Components/HomePage/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  )
}

export default App;
