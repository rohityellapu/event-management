import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios';
const apiURL = "https://todo-api-d05y.onrender.com/event";
import AddEvent from './AddEvent';
import { Link, useNavigate } from 'react-router-dom';
function Admin() {
    const [events, setEvents] = useState([]);
    const [isLoading, setisLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        if (!sessionStorage.getItem('admin')) navigate('/');
        (async () => {
            setisLoading(true)
            await axios.get(apiURL).then(res => {
                setEvents(res.data.events)
            }).catch(console.log)
            setisLoading(false);
        })()
    }, [])

    console.log(events)
    return (
        <>
            <Nav />
            <div className='mt-36 m-4 flex flex-col justify-center items-center gap-8'>

                <AddEvent />
                <table className='table-auto'>
                    <thead>
                        <tr className='m-2 p-2 bg-gray-600'>
                            <th className='w-20 lg:w-56 text-lg lg:text-2xl p-2 m-2 border-2'>Event</th>
                            <th className='w-20 lg:w-56 text-lg lg:text-2xl p-2 m-2 border-2'>Registrants</th>
                            <th className='w-20 lg:w-56 text-lg lg:text-2xl p-2 m-2 border-2'>Attendies</th>
                            <th className='w-20 lg:w-56 text-lg lg:text-2xl p-2 m-2 border-2'>Action</th>

                        </tr>
                    </thead>
                    <tbody className=''>
                        { events.map((event, i) => (
                            <tr key={ event._id } className='m-2 p-2 text-start px-10 text-semibold'>
                                <th className='p-2 border-2'>{ event.name }</th>
                                <th className='p-2 border-2'>{ event.registrations.length }</th>
                                <th className='p-2 border-2'>{ event.registrations.filter((user) => {
                                    for (let e of user.events) {
                                        if (event._id == e.event) return e.joined
                                    }
                                }).length }</th>
                                <th className='p-2 border-2'><button onClick={ () => navigate(`/administration/${event._id}`, { state: event }) } className='text-blue-500'>See details</button> </th>
                            </tr>
                        )) }

                    </tbody>
                </table>
                { isLoading && <div className='w-full flex items-center justify-center p-5'>
                    <img className='h-12 w-12' src={ require('../images/loading.gif') } alt="" />
                </div> }
            </div>
        </>
    )
}

export default Admin