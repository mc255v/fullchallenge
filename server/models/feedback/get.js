module.exports = (knex, Feedback) => (query) => {
    return Promise.resolve(
      knex("employee_feedback")
        .select()
        .where(query)
        .then((feedbackList) => feedbackList.map((feedback) => new Feedback(feedback)))
    );
};