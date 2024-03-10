import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Story from './Story';
import NotFound from './NotFound';
import CategoryPage from './CategoryPage';

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Story />} />
        {/* Route for each category */}
        <Route path="/categories/:category" element={<CategoryPage />} />
        {/* Route for handling unknown paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
 );
}

export default App;
