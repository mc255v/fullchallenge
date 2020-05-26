import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reviewUtil } from '../utils/helper';
import modalFeedbackTable from '../props/table';

import AssignedReviews from './AssignedReviews';

const Review = () => {
  const initialState = { q1: '1', q2: '1', q3: '' };
  const [tableProps, setTableProps] = useState();
  const [review, setReview] = useState(initialState);
  const [q1, setQ1] = useState('1');
  const [q2, setQ2] = useState('1');
  const [q3, setQ3] = useState('');
  const { id } = useParams();

  useEffect(() => {
    reviewUtil.getReview(id).then(data => {
      setReview(data);
      setQ1(data.q1);
      setQ2(data.q2);
      setQ3(data.q3);
      modalFeedbackTable(data.employee_id).then(list => setTableProps(list));
    });
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    reviewUtil.updateReview({ ...review, q1, q2, q3 });
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'inlineRadio':
        setQ1(e.target.value);
        break;
      case 'select':
        setQ2(e.target.value);
        break;
      case 'textarea':
        setQ3(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <main role="main" className="col-md-10 col-lg-10 px-4">
      <h2>Performance Review</h2>
      <form id="reviewForm" onSubmit={e => handleSubmit(e)}>
        <label htmlFor="q1">Random performance question</label>
        <div id="q1" className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadio"
              id="inlineRadio1"
              value="1"
              onChange={e => handleChange(e)}
              checked={q1 === '1'}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              1
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadio"
              id="inlineRadio2"
              value="2"
              onChange={e => handleChange(e)}
              checked={q1 === '2'}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              2
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadio"
              id="inlineRadio3"
              value="3"
              onChange={e => handleChange(e)}
              checked={q1 === '3'}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              3
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="select">Random performance question</label>
          <select
            className="form-control"
            id="select"
            name="select"
            onChange={e => handleChange(e)}
            value={q2}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="textarea">Random performance question</label>
          <textarea
            className="form-control"
            name="textarea"
            id="textarea"
            rows="3"
            onChange={e => handleChange(e)}
            value={q3}
          />
        </div>
      </form>
      <button form="reviewForm" className="btn btn-primary col-md-3 mr-2">
        Update
      </button>
      <hr />
      <AssignedReviews tableProps={tableProps} />
    </main>
  );
};

export default Review;
