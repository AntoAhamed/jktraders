import React from 'react'
import headerImage from '../assets/IMG-20240829-WA0004.jpg'

function Header() {
    return (
        <div className='header'>
            <div className='lhs'>
                <h1>JK Traders</h1>
                <p>
                    Dealers in all kinds of Spray Machine, Fogger Machine, Lawn Mower, Hardware Tools and Fire Fighting Equipment General Order Suppliers.
                </p>
            </div>
            <div className='rhs'>
                <img src={headerImage} alt='Header-Image' />
            </div>
        </div>
    )
}

export default Header
