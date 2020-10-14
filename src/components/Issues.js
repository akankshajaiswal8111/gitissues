import React from 'react';

import {
  Link
} from "react-router-dom";

const Issues = ({ issues, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {issues.map(issue => (
        <Link to={ "issue/" + issue.number}>
        <li key={issue.number} className='list-group-item'>
            <a href='!#' className='page-link'>
            {issue.number}. {issue.title}
            <p>State: {issue.state}</p>
            </a>        
          </li>
        </Link>
         
      ))}
    </ul>
  );
};

export default Issues;