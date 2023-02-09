import React from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav';

function EventDetail() {
    if (!sessionStorage.getItem('admin')) navigate('/');
    const { state } = useLocation();
    console.log(state);
    function getTime(time) {
        Date.prototype.monthNames = [
            "January", "February", "March",
            "April", "May", "June",
            "July", "August", "September",
            "October", "November", "December"
        ];

        Date.prototype.getShortMonthName = function () {
            return this.monthNames[this.getMonth()].substr(0, 3);
        };

        let date = new Date(time);
        let dateTime = ` ${date.getDate()} ${date.getShortMonthName()} ${date.getFullYear()} on ${date.getHours()}:${date.getMinutes()}`
        return dateTime
    }
    return (
        <>
            <Nav />
            <div className="event mt-36 justify-around flex items-center">
                <h1 className='text-4xl text-center'>Event: { state.name }</h1>

                <div className="image h-56 w-96">
                    <img src={ state.image } alt="" className='h-full w-full rounded-xl' />
                </div>


            </div>
            <h1 className='m-10 text-5xl text-center'>Registrations</h1>
            <div className="flex justify-center">

                <table className='table-auto'>
                    <thead>
                        <tr className='m-2 p-2 bg-gray-600'>
                            <th className='w-20 lg:w-56 text-lg lg:text-2xl p-2 m-2 border-2'>Name</th>
                            <th className='w-20 lg:w-56 text-lg lg:text-2xl p-2 m-2 border-2'>Email</th>
                            <th className='w-20 lg:w-56 text-lg lg:text-2xl p-2 m-2 border-2'>Attended</th>

                        </tr>
                    </thead>
                    <tbody className=''>
                        { state.registrations.map((user, i) => (
                            <tr key={ user._id } className='m-2 p-2 text-start px-10 text-semibold'>
                                <th className='p-2 border-2'>{ user.name }</th>
                                <th className='p-2 border-2'>{ user.email }</th>
                                <th className='p-2 border-2'>{ user.events.filter(e => e.event == state._id)[0].joined ? 'Yes' : 'No' }</th>
                            </tr>
                        )) }


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EventDetail