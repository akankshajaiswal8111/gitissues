import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import Issues from './components/Issues';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';
import IssueDetails from './components/IssueDetails'


const App = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [issuesPerPage] = useState(10);

  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      const res = await axios.get('https://api.github.com/repos/walmartlabs/thorax/issues');
      setIssues(res.data);
      setLoading(false);
    };

    fetchIssues();
  }, []);

  // Get current issues
  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  console.log(issues);
  return (
    <Router>
      <Switch>
            <Route path="/issue/:id">
              <IssueDetails data = {currentIssues}/>
            </Route>
            <Route path="/">
              <HomeView />
            </Route>
      </Switch>
    </Router>
  );


  function HomeView() {
    return (
      <div className='container mt-5'>
        <h1 className='text-primary mb-3'>Issue Browser</h1>
        <Issues issues={currentIssues} loading={loading} />
    
        <Pagination
          issuesPerPage={issuesPerPage}
          totalIssues={issues.length}
          paginate={paginate}
        />
    </div>
    );
  }
  // function IssueDetailView() {
  //       let { id } = useParams();
  //       let current = null;
  //       for(let issue in currentIssues) {
  //         if (currentIssues[issue].number == id) {
  //           current = currentIssues[issue];
  //           break;
  //         }
  //       }
  //     return (
  //       <IssueDetails data={current} />
  //     )
  // }
};

export default App;
