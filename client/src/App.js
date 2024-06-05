import logo from './mech-pro-sol.svg';
import './App.css';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <header className="bg-[#ddf186]">
        <img src={logo} className="App-logo h-[20px]" alt="logo" />
        <a>Home</a>
        <a>Contact</a>
        <a>Career</a>
        <a>About Us</a>
        
      </header>
      <Project></Project>
    
    </div>
  );
}

export default App;
