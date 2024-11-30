import './App.css';
import Navbar from './shared/Navbar';
import Home1 from './components/Home/Home1';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home1 />
      <About/>
    </div>
  );
}

export default App;
