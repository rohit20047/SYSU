import React, { useEffect } from 'react';

export default function Popular({ onChildValue }) {
  // Retrieve starred categories from local storage
  const starredCategories = JSON.parse(localStorage.getItem('starredCategories')) || [];
  
  // Popular categories list
  const popularCategories = [
    'ENGINEERING DAYS',
    'BANGALORE STORIES',
    'GOA DIARIES',
    'NITK STUFFS',
    'IIM THINGS',
    'IIMB FACTS',
    'SHAYARI',
    'VIKAS MEENA'
  ];

  // Calculate the number of categories needed from the popular list
  const remainingCategoriesCount = 10 - starredCategories.length;

  // Merge starred categories and popular categories
  const mergedCategories = [...starredCategories, ...popularCategories.slice(0, remainingCategoriesCount)];

  function ListItem({ value }) {
    const handleClick = () => {
      onChildValue(value);
    };

    return <li onClick={handleClick}>{value}</li>;
  }

  useEffect(() => {
    // Ensure localStorage retrieval runs only once on component mount
  }, []);

  return (
    <div className='popular'>
      {starredCategories.length > 0 ? (
        <h1>Your favourite topics</h1>
      ) : (
        <h1>Popular topics</h1>
      )}

      <div className='list'>
        <ul className='list-items'>
          {mergedCategories.map((category, index) => (
            <ListItem key={`${category}_${index}`} value={category} />
          ))}
        </ul>
      </div>
    </div>
  );
}
