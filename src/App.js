//import logo from './logo.svg';
import './App.css';

function App() { //has to start with cap letter
  const title = 'Welcome to the new blog';
  const likes = 50; //React converts whatever data type to a string before browser output
  const link = "http://www.google.com";

  return (  //have to return this inside a component
    <div className="App">
     <div className="content">
       <h1>{title}</h1>
       <p>Likes {likes} times</p>
       <p>{10}</p>
       <p>{"hello ninjas"}</p>
       <p>{[1,2,3,4]}</p>
       <p>{Math.random() * 10}</p>
       <a href={link}>Google Site</a>
     </div>
    </div>
  );
}

export default App;
