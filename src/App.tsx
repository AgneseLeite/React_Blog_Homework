import { useState } from 'react'
import './App.css'
import { Routes, Route, NavLink, Link } from "react-router-dom"; 
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/BlogPost/BlogPost';
import AddPost from './components/AddPost/AddPost';
import AddPostForm from './components/AddPostForm/AddPostForm';
import Comments from './pages/Comments/Comments';

function App() {

  const active = {
    fontWeight: "bold",
  };

  type AddStyle = {
    isActive: boolean,
    isPending: boolean
  }

  const addStyle = ({isActive}: AddStyle) => {
    return isActive ? active : undefined;
  }
  
  return (
    <div className="app__container">
      <nav className="nav">
        <div className="link-group">
        <NavLink to="/" style={addStyle}>Home</NavLink>
        <NavLink to="/blog" style={addStyle}>Blog</NavLink>
        </div>
        <AddPost />
      </nav>

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/blog" element={ <Blog />} />
        <Route path="/blog/:id" element={ <BlogPost />} />
        <Route path="/blog/:id/:comments" element={ <Comments/>} />
        <Route path="/form" element={ <AddPostForm />} />
        <Route path="/blog/form" element={ <AddPostForm />} />
      </Routes>
    </div>
  )
}

export default App
