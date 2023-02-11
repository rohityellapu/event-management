import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {
    const navigate = useNavigate()

    return (
        <nav className='h-24 z-20 w-screen fixed top-0 bg-blue-500 flex flex-row p-6 justify-between items-center'>
            <div className="brand">
                <Link to='/' className='text-2xl'>  Param Innovations</Link>
            </div>
            <div className="logo text-3xl font-bold">
                <Link to='/'>All Events</Link>
            </div>
            <div className="user text-center text-2xl font-bold">
                { sessionStorage.getItem('admin') ? <div className="admin flex gap-x-5"><Link to='/administration'>Monitor Events</Link><button onClick={ () => {
                    sessionStorage.removeItem('admin');
                    navigate('/');
                } } className=''>Log Out</button></div> : <Link to='/admin-login'> Admin Login</Link> }

            </div>
        </nav>
    )
}

export default Nav