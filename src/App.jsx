import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Article from './components/Article';
import ArticleDetail from './components/ArticleDetail';
import DropPoint from './components/DropPoint';
import DropPointDetail from './components/DropPointDetail';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Gifts from './components/Gifts';
import Camera from './components/CameraComponent';
import Profile from './components/Profile';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/gifts" element={<Gifts />} />
                <Route path="/camera" element={<Camera />} />
                <Route path="/article" element={<Article />} />
                <Route path="/article/:id" element={<ArticleDetail />} />
                <Route path="/drop-point" element={<DropPoint />} />
                <Route path="/drop-point/:id" element={<DropPointDetail />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default App;
