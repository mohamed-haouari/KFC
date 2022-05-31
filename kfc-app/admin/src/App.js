import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Login from './pages/Login';

function App() {
  return (
    <>
      {/* <Header/>
      <div class="container-fluid">
      <div class="row">
        <Navbar/>
        <Main/>
      </div>
      </div> */}
      <Login/>
    </>
  );
}

export default App;
