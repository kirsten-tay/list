import react ,{ Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Sec from './components/Sec';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
  <Nav> </Nav>
  <Sec></Sec>
  <Footer></Footer>
    </div>
  );
}

export default App;
