import axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { Header, HeroSection, Sidebar } from './Components';
import { useAuth, useUser } from './Store';
function App() {

  
  const {authDispatch} = useAuth()

  const {userDispatch} = useUser()

  const fetchUser = async (userId) => {
    try {
        const response = await axios.post("https://Video-Library-Server.rupamdas.repl.co/user", {
        "userId": userId
        })
        userDispatch({type: "LOAD_USER", payload: response.data.user})
    } catch (error) {
        console.log(error.response.data)
    }
    
}

useEffect(() => {
    const loginStatus = JSON.parse(localStorage.getItem("loginUser"))
    if(loginStatus?.isUserLogin){
        authDispatch({type: "USER_LOGIN"})
        fetchUser(loginStatus.userId)
    }
},[])

  return (
    <div className="App">
      <Router>
        <div className="leftAppSection">
          <Sidebar/>
        </div>
        <div className="rightAppSection">
          <Header/>
          <HeroSection/>
        </div>
      </Router>   
    </div>
  );
}

export default App;
