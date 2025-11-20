import React from 'react'
import { navLinks } from '../constants'

export default function Navabar() {
  return (
    <header>
        <nav>
            <img src='/logo.svg' alt=""/>
            <ul>
                {navLinks.map(({label})=>(
                    <li key={label}>
                        <a key={label}>{label}</a>
                    </li>
                ))}
            </ul>

            <div className='flex-center gap-3'>
                <button>
                    <img src='/search.svg' alt=''/>
                </button>
                <button>
                    <img src='/cart.svg' alt=''/>
                </button>
            </div>
        </nav> 
    </header>
  ) 
}
