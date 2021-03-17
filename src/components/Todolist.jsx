import React from 'react'
import { Card, Button } from 'react-bootstrap'
const Todolist = ({ todolist, editData, deleteData }) => {
  const bootstrapColors = {
    success: '#1BA345',
    warning: '#FEC001',
    danger: '#DE3E44',
  }
  return (
    <div className='row mx-auto p-0 mb-4'>
      {todolist.map((item, index) => (
        <Card
          key={index}
          className='card-container col-md-5 mt-3 mr-5 bg-white rounded list-unstyled shadow-sm py-2'
          style={
            item.completed
              ? { borderLeft: '6px solid' + bootstrapColors.success }
              : { borderLeft: '6px solid' + bootstrapColors.warning }
          }
        >
          <div
            className='d-flex justify-content-between text-muted mb-3'
            style={{ fontSize: '12px', letterSpacing: '1px' }}
          >
            <div className='text-uppercase'>{item.category}</div>
            {!item.completed && <div>IN PROGRESS</div>}
          </div>
          <h6 className='text-capitalize'>
            {item.text.slice(0, item.text.indexOf('/'))}
          </h6>

          {/* footer */}
          <div
            className='d-flex justify-content-between align-items-center text-muted mt-3'
            style={{ fontSize: '12px', letterSpacing: '1px' }}
          >
            {!item.completed ? (
              <Button
                onClick={() => editData(item)}
                variant='outline-success'
                size='sm'
              >
                Complete
              </Button>
            ) : (
              <div>Compeleted</div>
            )}
            <Button
              onClick={() => deleteData(item)}
              className='delete-btn bg-none p-0'
              variant='muted'
            >
              <i style={{ fontSize: '14px' }} className=' fas fa-trash'></i>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Todolist
