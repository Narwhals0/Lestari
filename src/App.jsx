import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Article from './components/Article';
import ArticleDetail from './components/ArticleDetail';
import DropPoint from './components/DropPoint';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/article" element={<Article />} />
                <Route path="/article/:id" element={<ArticleDetail />} />
                <Route path="/droppoint" element={<DropPoint />} />
            </Routes>
        </Router>
    );
};

export default App;
