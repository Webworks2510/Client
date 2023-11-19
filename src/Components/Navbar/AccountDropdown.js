import React from 'react'
import { Link } from 'react-router-dom'

function AccountDropdown({handleAccountIconLeave}) {
  return (
    <ul onMouseLeave={handleAccountIconLeave} className='ww-navdropdown-account ww-border-radius'>
        <li className='ww-list'><Link className='ww-link'>My account</Link></li>
        <li className='ww-list'><Link className='ww-link'>Orders</Link></li>
        <li className='ww-list'><Link className='ww-link'>Wishlist</Link></li>
        <li className='ww-list'><Link className='ww-link'>Rewards</Link></li>
    </ul>
  )
}

export default AccountDropdown