import React from 'react'
import { Card, Button } from 'react-bootstrap'
const Todolist = ({ todolist, editData, deleteData }) => {
  const bootstrapColors = {
    success: '#1BA345',
    warning: '#FEC001',
    danger: '#DE3E44',
  }
  return (
    <div className='todolist-main row mx-auto p-0 mb-4'>
      {todolist.map((item, index) => (
        <Card
          key={index}
          className='card-container col-md-5 mt-3 mr-md-5 bg-white rounded list-unstyled shadow-sm py-2'
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
            <div className='text-uppercase'>Category</div>
            {!item.completed && <div>IN PROGRESS</div>}
          </div>
          <h6 className='text-capitalize'>{item.text}</h6>

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
                className='py-0'
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
