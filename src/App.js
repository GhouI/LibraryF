import './App.css';
import { ErrorPage } from './components';
import { Home, BookPage} from './containers'
import { Routes, Route } from 'react-router-dom';
const App = () =>{
  return (    
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/book/:id" element={ <BookPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
