module.exports = (knex, Feedback) => () => {
    return Promise.resolve(
      knex("employee_feedback")
        .select()
        .then((feedbackList) => feedbackList.map((feedback) => new Feedback(feedback)))
    );
};
