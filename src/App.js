import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { Header, HeroSection, Sidebar } from './Components';
function App() {
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
