import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar/NavbarComp.js';
import Home from './components/Home/Home.js';
import Login from './components/LoginModal/Login.js';
import HomePage from './components/HomePage/HomePage.js';
import PostingsList from './components/PostingsList/PostingsList.js';
import PostingsForm from './components/PostingsForm/PostingsForm.js';

function App() {
  return (
    <div className="App">
      <PostingsForm />

      {/* <NavbarComp />
      <PostingsList /> */}
      {/* <HomePage/> */}
      {/* <NavbarComp />
      <Login /> */}
    </div>
  );
}

export default App;
