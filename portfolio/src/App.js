import './App.css';
import Navbar from './shared/Navbar';
import Home1 from './components/Home/Home1';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home1 />
      <About/>
      <Services/>
      <Portfolio/>
    </div>
  );
}

export default App;
