import './App.css';
import Routes from './Routes'
import NavBar from './components/navBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar>
        <Routes/>
      </NavBar>
    </div>
  );
}

export default App;
