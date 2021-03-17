import React from 'react'
import { Form } from 'react-bootstrap'
const TodoForm = ({ text, setText, addData }) => {
  return (
    <Form style={{ marginTop: '3rem' }} onSubmit={addData}>
      <Form.Group>
        <Form.Control
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Add todo'
        ></Form.Control>
      </Form.Group>
    </Form>
  )
}

export default TodoForm
