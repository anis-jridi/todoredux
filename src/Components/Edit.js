import { FcUndo, FcEditImage } from 'react-icons/fc'
import { Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editTask } from '../redux/action'

const Edit = ({ task }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [consto, setConsto] = useState(task.Description)

  const dispatch = useDispatch()
  return (
    <div>
<button className="button" variant="primary"
        onClick={handleShow}> EDIT</button>

      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT</Modal.Title>
        </Modal.Header>
        <input
          type="text"
          value={consto}
          onChange={(e) => setConsto(e.target.value)}
        ></input>{' '}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(editTask(task.id, consto))
              handleClose()
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit
