import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
const apiURL = "http://localhost:3005/event";
function Events() {
    const [events, setEvents] = useState([]);
    const [isLoading, setisLoading] = useState(false)
    useEffect(() => {
        (async () => {
            setisLoading(true);
            await axios.get(apiURL).then(res => {
                console.log(res.data.events)
                setEvents(res.data.events)
            }).catch(console.log)
            setisLoading(false);
        })()
    }, [])
    const navigate = useNavigate();
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
        let dateTime = `${date.getShortMonthName()} ${date.getDate()} on ${date.getHours()}:${date.getMinutes()}`
        return dateTime
    }

    return (
        <>
            <Nav />
            <div className='mt-36 m-10 flex flex-col gap-8'>

                { events.map((event, i) => (
                    <div className='flex gap-8' key={ event._id + i }>
                        <div className="image w-96 h-56"><img className='h-full w-full rounded-xl' src={ event.image } /></div>
                        <div className="details flex flex-col gap-2 justify-around w-96">
                            <h1 className='text-3xl font-semibold'>{ event.name }</h1>
                            <div className="timing flex gap-10 justify-between opacity-70 my-2">
                                <div className="starts font-semibold">From { getTime(event.startTime) }</div>
                                <div className="ends font-semibold">To { getTime(event.endTime) }</div>
                            </div>
                            <div className="location text-lg opacity-80">Location: { event.address.substring(0, 30) }.......</div>
                            <div className="info flex items-center justify-center"><button onClick={ () => navigate(`/${event._id}`, { state: event }) } className='p-2 px-3 rounded-md bg-slate-200 border-2 border-gray-400'>View Event</button>
                            </div>
                        </div>
                    </div>
                )) }
                { isLoading && <div className='w-full flex items-center justify-center p-5'>
                    <img className='h-12 w-12' src={ require('../images/loading.gif') } alt="" />
                </div> }

            </div>
        </>
    )
}

export default Events