import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { HeroSection } from './Components/HeroSection';
import { Sidebar } from './Components/Sidebar';

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
