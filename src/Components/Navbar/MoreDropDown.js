import React from 'react'
import { Link } from 'react-router-dom'

function MoreDropDown({handleMoreIconLeave}) {
  return (
    <ul onMouseLeave={handleMoreIconLeave} className='ww-navdropdown-more ww-border-radius'>
        <li className='ww-list'><Link className='ww-link'>Bot Support</Link></li>
        <li className='ww-list'><Link className='ww-link'>Customer Care</Link></li>
        <li className='ww-list'><Link className='ww-link'>Q/A</Link></li>
    </ul>
  )
}

export default MoreDropDown