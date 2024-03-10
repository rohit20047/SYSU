import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Story from './Story';
import NotFound from './NotFound';
import CategoryPage from './CategoryPage';

// List of categories
const categories = [
 'engineering-days',
 'bangalore-stories',
 'goa-diaries',
 'nitk-stuffs',
 'iim-things',
 'iimb-facts',
 'shayari',
 'vikas-meena',
 'figma',
 'food',
 'engineering',
 'cinema'
];

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Story />} />
        {/* Route for each category */}
        {categories.map(category => (
          <Route key={category} path={`/categories/${category}`} element={<CategoryPage category={category} />} />
        ))}
        {/* Route for handling unknown paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
 );
}

export default App;
