import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

const modalFeedbackTable = async employeeID => {
  const body = await axios.post('/employees/custom/list', {
    query: ['id', 'name', 'position'],
    where: ['id', '!=', `${employeeID}`],
  });
  return {
    attributes: { size: 'sm' },
    tableHead: ['Employee ID', 'Name', 'Position'],
    tableBody: body.data,
  };
};

export default modalFeedbackTable;
