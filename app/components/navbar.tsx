import React from 'react'
import Link from 'next/link'
import { HomeIcon } from '@primer/octicons-react'

const navItems = [
  {path: '/about', text: 'About'},
  {path: '/pricing', text: 'Pricing'},
  {path: '/contact', text: 'Contact'},
]
export default function Navbar() {

  return (
    <nav className='flex  aling font-bold bg-blue-800 bg-opacity-30 rounded mr-2 px-4'>
        <Link className='flex flex-1 p-1 items-center' href={'/'}>
            <HomeIcon size={24}/>
            <span className='ml-1'>Home</span>
        </Link>
        {
          navItems.map( navItem =>(
            <Link key={navItem.path} className='mr-2' href={ navItem.path }>{navItem.text}</Link>
          ))
        }
    </nav>
  )
}
