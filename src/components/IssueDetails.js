import React from 'react';

const IssueDetail = ({ issues }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {issues.map(issue => (
        <li key={issue.number} className='list-group-item'>
            {issue}
        </li>
      ))}
    </ul>
  );
};

export default IssueDetail;