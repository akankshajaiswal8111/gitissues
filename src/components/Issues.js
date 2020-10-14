import React from 'react';

const Issues = ({ issues, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {issues.map(issue => (
        <li key={issue.number} className='list-group-item'>
            <a href='!#' className='page-link'>
            
            {issue.number}. {issue.title}
            {issue.state}
            </a>
          
        </li>
      ))}
    </ul>
  );
};

export default Issues;