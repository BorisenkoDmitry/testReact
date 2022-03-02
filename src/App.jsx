
import './App.css';
import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import Header from './header/Header';
import TodayPage from './PAGES/Today/Today';
import AnimalsPage from './PAGES/Animals/Animals';
import LoginPage from './PAGES/Login/Login';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { Home } from './PAGES/Home/Home';


function App() {
  const dispatch = useDispatch()
  const updateFromLocal = () => {
    return localStorage.getItem("user") ?
      JSON.parse(localStorage.getItem("user"))
      :
      {user: {}, token: false, tokenLive: false }
  }

  const isTimeoutToken = () => {
    if (localStorage.getItem("user")) {
      if(JSON.parse(localStorage.getItem("user")).tokenLive <= Date.now()) {
        localStorage.removeItem("user")
        localStorage.removeItem("animalsToday")
        localStorage.removeItem("AllAnimals")
        return true
      } else {
        return false
      }
    } 
  }
  useEffect(() => {
    dispatch({type: "USER_AUTH", payload: updateFromLocal()})
    dispatch({type: "SET_AUTH", payload: localStorage.getItem("user") ? true : false});
    dispatch({type: "TOKEN_TIMEOUT", payload: isTimeoutToken()})
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/today" element={<TodayPage />}/>
        <Route path="/animal" element={<AnimalsPage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </div>
  );
}

export default App;
