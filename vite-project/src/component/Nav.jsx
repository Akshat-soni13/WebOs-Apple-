import React from 'react'
import "./nav.scss"
import DateAndTime from './DateAndTime'

const Nav = () => {
  return (
  <nav>

        <div className='left'>

            <div className='apple-icon'>
                    <i class="ri-apple-fill"></i>
            </div>
            <div className='nav-item'>
                    <p>Akshat Soni</p>
            </div>
            <div className='nav-item'>
                    <p>File</p>
            </div>
            <div className='nav-item'>
                    <p>Edit</p>
            </div>
            <div className='nav-item'>
                    <p>View</p>
            </div>
            <div className='nav-item'>
                    <p>Window</p>
            </div>


        </div>
        <div className='right'>
            <div className="wifi">
                <i class="ri-wifi-line"></i>

            </div>
            <div className='date-time'>

                <DateAndTime/>
            </div>
        </div>


  </nav>
  )
}

export default Nav