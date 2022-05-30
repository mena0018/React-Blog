import './index.scss';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import AddArticle from './Pages/AddArticle/AddArticle';
import Contact from './Pages/Contact/Contact';
import Article from './Pages/Article/Article';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/ecrire" element={ <AddArticle /> }/>
        <Route path="/contact" element={ <Contact /> }/>
        <Route path="/article" element={ <Article /> }/>
      </Routes>

    </>
  );
}

export default App;
