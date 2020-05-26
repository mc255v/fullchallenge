import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { feedbackUtil } from '../utils/helper';

import ModalCenter from './ModalCenter';

const AssignedReviews = (props) => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    feedbackUtil.getFeedback({id, type: "review"}).then(data => setFeedbackList(data))
  }, [id, modalShow])

  const feedbackRows = () => {
    return feedbackList.map(feedback => (
      <div className="container text-center" key={feedback.id}>
        <div className="row">
          <div className="col">
            {feedback.assigned_date}
          </div>
          <div className="col">
            {feedback.employee_id}
          </div>
          <div className="col">
            {feedback.completed ? "Yes" : "No"}
          </div>
        </div>
        {feedback.completed && (
          <div className="row border border-light">
            <div className="col">
              Feedback: {feedback.feedback}
            </div>
          </div>
        )}
      </div>
    ))
  }

  const jumbotron = () => {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <p className="lead">No feedback has been assigned for this review</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <ModalCenter show={modalShow} onHide={() => setModalShow(false)} tableProps={props.tableProps}/>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h2>Assigned Feedback</h2>
          </div>
          <div className="col text-right">
            <button type="button" className="btn btn-info" onClick={() => setModalShow(true)}>
              Assign Feedback
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-3 text-center border-bottom">
        <div className="row">
          <div className="col">
            <strong>Assign Date</strong>
          </div>
          <div className="col">
            <strong>Employee ID#</strong>
          </div>
          <div className="col">
            <strong>Completed</strong>
          </div>
        </div>
      </div>
      {feedbackList.length > 0 ? feedbackRows() : jumbotron()}
    </div>
  );
}

export default AssignedReviews;