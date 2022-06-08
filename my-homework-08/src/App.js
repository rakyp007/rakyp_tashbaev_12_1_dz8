import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layouts';
import MainPage from './page/mainPage/MainPage';
import AboutPage from './page/aboutPage/AboutPage';
import ContactsPage from './page/contactsPage/ContactsPage';
import Description from './components/descrition/Descrityion';
import PortfolioPage from './page/prortfolioPage/PrortFolioPage';
import BlogsPage from './page/blogPage/BlogPage.Js';
import News from './page/news/News';
import LayoutBack from './components/layoutBack/LayoutBack';
import Blog from './components/blog.js/Blog';
import NotFound from './page/notFound/NotFound';

function App() {
  return (
    <>
    <Routes>
    <Route path ="/" element={<Layout/>}>
    
      <Route index element={<MainPage/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='contact' element={<ContactsPage/>}/>
      <Route path='description' element={<Description/>}/>
      <Route path='portfolio' element={<PortfolioPage/>}/>
      <Route path='blogs' element={<BlogsPage/>}/>
      <Route path='news' element={<News/>}/>

    </Route>
    <Route path ="/" element={<LayoutBack/>}>
    <Route path='blogs/:news' element={<Blog/>}/>
    </Route>

      <Route path='*' element={<NotFound/>}/>
    </Routes>
    
    </>
  )
}

export default App; 
