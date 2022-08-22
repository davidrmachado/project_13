import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

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
           src={ searchIcon }
           alt="Search Icon"
           data-testid="search-top-btn"
         />
       )}
      <Link
        to="/profile"
        href="teste"
      >
        <img
          src={ profileIcon }
          alt="Profile button"
          data-testid="profile-top-btn"
        />
      </Link>
    </div>
  );
}
