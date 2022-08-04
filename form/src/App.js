import {Routes, Route} from 'react-router-dom';
import './App.css';
import SignUp from './Components/SignUpPage/SignUp';
import Login from './Components/LoginPage/Login';
import Home from './Components/HomePage/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Home" element={<Home/>}/>
    </Routes>
  )
}

export default App;
