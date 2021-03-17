import React from 'react'
import { Card, Button } from 'react-bootstrap'
const Todolist = ({ todolist, editData }) => {
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
          className='col-md-5 mt-3 mr-5 bg-white rounded list-unstyled shadow-sm py-2'
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
            <div>PROGRAMMING</div>
            {!item.completed && <div>IN PROGRESS</div>}
          </div>
          <h6>{item.text}</h6>

          {/* footer */}
          <div
            className='d-flex justify-content-between text-muted mt-3'
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

            <div>2m</div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Todolist
