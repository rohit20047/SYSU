import React from 'react';

const CategoryPage = ({ category }) => {
  return (
    <div>
      <h1>{category.toUpperCase()} Category Page</h1>
      {/* Add content specific to the category */}
    </div>
  );
}

export default CategoryPage;
