import React from 'react';

const Feedback = () => {
  const text = "Todo: Show list of all reviews for employee, clickable to view review"

  return (
    <main role="main" className="col-md-10 col-lg-10 px-4">
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <p className="lead">{text}</p>
        </div>
      </div>
    </main>
  );
}

export default Feedback;