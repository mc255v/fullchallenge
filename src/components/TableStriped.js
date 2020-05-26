import React from 'react';
import { Table } from 'react-bootstrap';

const TableStriped = (props) => {
  const {attributes, tableHead, tableBody} = props.tableProps;
  return(
    <Table {...attributes} striped bordered hover>
      <thead>
        <tr>
          {tableHead.map((head, index) => <th key={index}>{head}</th>)}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((body, index) => (
          <tr key={index} onClick={(e) => props.handleClick({e, body})}>
            {Object.keys(body).map((value, index) => <td key={index}>{body[value]}</td>)}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableStriped;