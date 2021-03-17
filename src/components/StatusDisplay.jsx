import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
const StatusDisplay = ({ todolist, completedCount, progressCount }) => {
  return (
    <Container style={{ marginTop: '-2rem' }}>
      <Card className=' border-0 rounded shadow-sm py-4'>
        <Row>
          <Col md='4' className='text-center'>
            <h4 className='font-weight-bold text-dark'>{todolist.length}</h4>
            <div className='text-secondary' style={{ fontSize: '14px' }}>
              Total Items
            </div>
          </Col>
          <Col md='4' className='text-center'>
            <h4 className='font-weight-bold text-dark'>{completedCount}</h4>
            <div className='text-secondary' style={{ fontSize: '14px' }}>
              Completed
            </div>
          </Col>
          <Col md='4' className='text-center'>
            <h4 className='font-weight-bold text-dark'>{progressCount}</h4>
            <div className='text-secondary' style={{ fontSize: '14px' }}>
              In Progress
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default StatusDisplay
