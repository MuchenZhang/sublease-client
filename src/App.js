import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar/NavbarComp.js';
import Home from './components/Home/Home.js';
import Login from './components/LoginModal/Login.js';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Login />
    </div>
  );
}

export default App;
