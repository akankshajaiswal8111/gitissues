import React from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'
const IssueDetail = ({data}) => {
  console.log(data);
  let { id } = useParams();
  //console.log(id);
    let current = null;
    for(let issue in data) {
      if (data[issue].number == id) {
        current = data[issue];
        break;
      }
    }
    console.log(current);
  return (
    <div className='container mt-5' >
       <h4 className='list-group-item'>
       Title: {current.title} #{current.number} {current.state}
       </h4>
       <p>{current.body}</p>
       <li> <a href = {current.repository_url}> Repo</a> </li>
       <li> <a href = {current.labels_url}>Labels</a> </li>
       <li> <a href = {current.comments_url}>Comments</a> </li>
       <li><a href = {current.events_url}>Events</a> </li>
       <li><a href = {current.html_url}>Pull</a> </li>


    </div>
  );
};

export default IssueDetail;