import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Header() {
  const { title } = useContext(AppContext);
  return (
    <div>
      <h1 data-testid="page-title">
        {document.title}
      </h1>
      { (title !== 'Done Recipes' && title !== 'Favorite Recipes' && title !== 'Profile')
       && (
         <img
           src="src/images/searchIcon.svg"
           alt="Search Icon"
           data-testid="search-top-btn"
         />
       )}
      <img
        src="src/images/profileIcon.svg"
        alt="Profile button"
        data-testid="profile-top-btn"
      />
    </div>
  );
}
