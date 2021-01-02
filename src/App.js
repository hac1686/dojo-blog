//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() { //has to start with cap letter
    
  return (  //have to return this inside a component
    <div className="App">
      <Navbar />
     <div className="content">
          <Home />
       
     </div>
    </div>
  );
}

export default App;
