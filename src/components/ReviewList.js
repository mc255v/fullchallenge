import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { reviewUtil }  from '../utils/helper';

const ReviewList = () => {
  let history = useHistory();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    reviewUtil.listReviews().then(list => setReviews(list));
  }, [])

  const handleClick = (id) => {
    history.push(`/admin/reviews/${id}`)
  }

  return (
    <main role="main" className="col-md-10 col-lg-10 px-4">
      <h2>Performance Review Listing</h2>   
      <div className="table-responsive">
      <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Employee ID</th>
          <th scope="col">Creation Date</th>
        </tr>
      </thead>
      <tbody>
        {reviews && reviews.map(review => (
          <tr key={review.id} onClick={() => handleClick(review.id)}>
            <th scope="row">{review.id}</th>
            <td>{review.employee_id}</td>
            <td>{review.created_date}</td>
        </tr>
        ))}
      </tbody>
      </table>
      </div>
    </main>
  );
}

export default ReviewList;