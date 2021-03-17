import React from 'react'
import { Container, Button } from 'react-bootstrap'

const Filter = ({ isActive, setActiveHandler }) => {
  return (
    <Container className='mt-4'>
      <Button
        name='all'
        onClick={setActiveHandler}
        className='mx-1'
        size='sm'
        variant={`${isActive.all ? 'secondary' : 'outline-secondary'}`}
      >
        Show All
      </Button>
      <Button
        name='completed'
        onClick={setActiveHandler}
        className='mx-1'
        size='sm'
        variant={`${isActive.completed ? 'secondary' : 'outline-secondary'}`}
      >
        Show completed
      </Button>
      <Button
        name='progress'
        onClick={setActiveHandler}
        className='mx-1'
        size='sm'
        variant={`${isActive.progress ? 'secondary' : 'outline-secondary'}`}
      >
        Show in progress
      </Button>
    </Container>
  )
}

export default Filter
