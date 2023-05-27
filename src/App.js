import './App.css';
import { ErrorPage } from './components';
import { Home, BookPage, ChapterPage, Search, Upload} from './containers'
import { Routes, Route } from 'react-router-dom';
const App = () =>{
  return (    
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/search" element={ <Search />} />
      <Route path="/book/:id" element={ <BookPage />} />
      <Route path="/book/:id/:chapter" element={ <ChapterPage />} />
      <Route path="/book/:id/upload" element={ <Upload />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
