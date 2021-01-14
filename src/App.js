import './App.css';
import DrawerLeft from './components/DrawerLeft'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <h2 style={{left:0}}>Profile</h2>
    </div>
  );
}

export default App;
