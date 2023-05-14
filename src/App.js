import './App.css';
import { Navbar } from './components';
import { Home} from './containers'
function App() {
  return (
    <div className="App"> 
     <div className="gradient__bg">
      <Navbar />
           <Home />

     </div>
    </div>
  );
}

export default App;
