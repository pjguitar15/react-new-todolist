import React from 'react'
import logo from '../Assets/white-logo.svg'
const Header = () => {
  return (
    <div className='py-5 text-light' style={{ background: '#2C62E9' }}>
      <div>
        <img style={{ maxHeight: '40px' }} src={logo} alt='' />
      </div>
      <h3 className='text-center'>My Todolist</h3>
    </div>
  )
}

export default Header
