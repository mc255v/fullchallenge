import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { feedbackUtil } from '../utils/helper';
import { useParams } from 'react-router-dom';
import TableStriped from './TableStriped';

const ModalCenter = (props) => {
  let { id } = useParams();

  const handleClick = ({e, body}) => {
    const ids = {
      review_id: id,
      employee_id: body.id
    }
    feedbackUtil.createFeedback(ids).then(res => {
      if (res === "success") props.onHide()
    })
  }

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select an employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TableStriped tableProps={props.tableProps} handleClick={handleClick}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger">Cancel</Button>
      </Modal.Footer>
    </Modal>
 );
}

export default ModalCenter;