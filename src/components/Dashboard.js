import React, { useState, useEffect } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { feedbackUtil } from '../utils/helper';

const Dashboard = ({ jumbo, table, id, handleClick }) => {
  const [feedbackTable, setFeedbackTable] = useState(false);
  const [showBottom, setShowBottom] = useState(jumbo.bottom.show);

  useEffect(() => {
    if (table.show)
      feedbackUtil.getFeedback({ id, type: table.type }).then(res => {
        res.length > 0 ? setFeedbackTable(res) : setShowBottom(true);
      });
  }, [table.show, id, table.type]);

  const jumbotron = text => {
    return (
      <Jumbotron fluid>
        <Container className="text-center">
          <p className="lead">{text}</p>
        </Container>
      </Jumbotron>
    );
  };

  return (
    <main role="main" className="col-md-10 col-lg-10 px-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group mr-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Export
            </button>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary dropdown-toggle"
          >
            This week
          </button>
        </div>
      </div>

      {jumbotron(jumbo.topText)}

      <h2>{table.header}</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Assign Date</th>
              <th scope="col">Employee ID#</th>
              <th scope="col">Completed</th>
            </tr>
          </thead>
          <tbody>
            {feedbackTable &&
              feedbackTable.map(feedback => (
                <tr key={feedback.id} onClick={() => handleClick()}>
                  <th scope="row">{feedback.assigned_date}</th>
                  <td>{feedback.review_id}</td>
                  <td>{feedback.completed ? 'Yes' : 'No'}</td>
                </tr>
              ))}
          </tbody>
        </table>

        {showBottom && jumbotron(jumbo.bottom.text)}
      </div>
    </main>
  );
};

export default Dashboard;
