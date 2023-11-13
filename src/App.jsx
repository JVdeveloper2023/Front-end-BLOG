import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  {Header}  from './components/header';
import Home from './pages/home';
import CreateArticle from './pages/created-article';
import Article from './pages/article'
import Footer from './components/footer';
import NotFound from './pages/not-found';

function App() {
  return (
    <Router className="dark:bg-neutral-900">
      <Header/>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/create-article" element={<CreateArticle />} />
        <Route path='/article/:id' element={<Article/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
