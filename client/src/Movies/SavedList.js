import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className='saved-list'>
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span key={movie.id} className='saved-movie'>
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: 'indianred',
          }}
          to={`/movies/${movie.id}`}
        >
          {movie.title}
        </NavLink>
      </span>
    ))}
    <div className='home-button'>
      <Link to='/'>Home</Link>
    </div>
  </div>
);

export default SavedList;
