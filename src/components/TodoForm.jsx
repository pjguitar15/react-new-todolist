import React from 'react'
import { Form } from 'react-bootstrap'
const TodoForm = ({ text, setText, addData }) => {
  return (
    <Form style={{ marginTop: '3rem' }} onSubmit={addData}>
      <Form.Group>
        <Form.Control
          className='col-lg-5 main-form'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Enter todo item'
        ></Form.Control>
        {/* <select
          className='form-select mt-3 border-0 px-3 py-1 shadow-sm rounded'
          aria-label='Default select example'
        >
          <option selected>Select a category</option>
          <option value='1'>Music</option>
          <option value='2'>Academics</option>
          <option value='3'>Work</option>
          <option value='3'>Household Chores</option>
        </select> */}
      </Form.Group>
    </Form>
  )
}

export default TodoForm
