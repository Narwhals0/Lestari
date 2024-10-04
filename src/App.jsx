import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h1>Welcome to Lestari!</h1>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
