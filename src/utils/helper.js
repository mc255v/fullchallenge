import axios from 'axios';

axios.defaults.baseURL = `${process.env.BASE_URL ||
  'http://localhost:5000'}/api`;

export const employeeUtil = {
  createEmployee: async employee => {
    const res = await axios.post('/employees', employee);
    return res.data;
  },
  listEmployees: async () => {
    const res = await axios.get('/employees');
    return res.data;
  },
  getEmployee: async id => {
    const res = await axios.get(`/employees/${id}`);
    return res.data;
  },
  updateEmployee: async update => {
    const res = await axios.post(`/employees/${update.id}`, update);
    return res.data;
  },
  removeEmployee: async id => {
    const res = await axios.delete(`/employees/${id}`);
    return res.data;
  },
};

export const reviewUtil = {
  createReview: async id => {
    const res = await axios.post('/reviews', id);
    return res.data;
  },
  listReviews: async () => {
    const res = await axios.get('/reviews');
    return res.data;
  },
  getReview: async id => {
    const res = await axios.get(`/reviews/${id}`);
    return res.data;
  },
  updateReview: async review => {
    const res = await axios.post(`/reviews/${review.id}`, review);
    return res.data;
  },
};

export const feedbackUtil = {
  createFeedback: async ids => {
    const res = await axios.post('/feedback', ids);
    return res.data;
  },
  getFeedback: async ({ id, type }) => {
    const res = await axios.get(`/feedback/${id}?type=${type}`);
    return res.data;
  },
  listFeedback: async () => {
    const res = await axios.get('/feedback');
    return res.data;
  },
};
