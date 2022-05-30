import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header/>
      <div class="container-fluid">
      <div class="row">
        <Navbar/>
        <Main/>
      </div>
      </div>
    </>
  );
}

export default App;
