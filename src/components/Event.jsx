import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav';

import { useForm } from "react-hook-form";
import axios from 'axios';
import Popup from 'reactjs-popup';
const apiURL = "https://todo-api-d05y.onrender.com/event/register";
const joinURL = "https://todo-api-d05y.onrender.com/event/join"
function Event() {
    const { state } = useLocation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [err, setErr] = useState('');
    const [isLoading, setisLoading] = useState(false)
    const [ticket, setticket] = useState("")
    const [success, setSuccess] = useState("")

    const onSubmit = async data => {
        console.log(data);

        try {
            setisLoading(true)
            const response = await axios.post(apiURL,
                { ...data, event: state }).then(res => {
                    setSuccess(`You are succesfully registered, Your ticket number is ${res.data.newTicket.number}. *Please note it down, it is required while joining Event.`)
                })

                .catch(err => {
                    const { status, data } = err.response;
                    console.log(err.response);
                    if (status === 409) {
                        let userEvent = data.oldUser.events.filter((e) => e.event == state._id)
                        setErr(`Already Registered, your Ticket Number is ${userEvent[0].ticket.number}`)
                    } else setErr('Something went wrong, try again.')
                }).finally(() => {
                    setTimeout(() => setErr(''), 5000);
                    setTimeout(() => setSuccess(''), 10000);
                    reset()
                });
            setisLoading(false)


        } catch (error) {
            console.log(error)
        }
    }
    const onJoin = async e => {
        e.preventDefault();
        console.log(ticket);
        try {
            setisLoading(true)
            const response = await axios.post(joinURL,
                { ticketNum: ticket, event: state }).then(() => {
                    setSuccess('You are successfully joined.')
                })

                .catch(err => {
                    const { status, data } = err.response;
                    console.log(err.response);
                    if (status === 403) {

                        setErr(`Invalid ticket`)
                    } else setErr('Something went wrong, try again.')
                }).finally(() => {
                    setTimeout(() => setErr(''), 5000);
                    setTimeout(() => setSuccess(''), 10000);
                    setticket('');
                });
            setisLoading(false)


        } catch (error) {
            console.log(error)
        }
    }
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
            <div className="event mt-36 m-10flex flex-col gap-36">
                <h1 className='text-5xl text-center m-10'>{ state.name }</h1>
                <div className="box flex gap-4 justify-around">
                    <div className="when flex flex-col gap-5">
                        <h2 className='text-2xl font-semibold opacity-60'>When</h2>
                        <p>Starts at{ getTime(state.startTime) }</p>
                        <p>Ends by{ getTime(state.endTime) }</p>
                    </div>
                    <div className="where flex flex-col gap-10">
                        <h2 className='text-2xl font-semibold opacity-60'>Where</h2>
                        <p className='w-56'>{ state.address }</p>
                    </div>
                    <div className="image h-56 w-96">
                        <img src={ state.image } alt="" className='h-full w-full rounded-xl' />
                    </div>
                </div>
                <p className='text-center font-thin text-xl m-10'>{ state.info }</p>
                <div className="Actions flex justify-center gap-4">
                    <Popup
                        className=''
                        trigger={ <button className="button p-2 bg-blue-500 rounded-md">Book Ticket </button> }
                        modal
                        nested
                    >
                        { close => (
                            <div className="modal w-96 flex flex-col gap-4 items-center justify-center bg-black text-white rounded-xl">
                                <button className="close absolute top-1 right-1 text-2xl font-bold text-red-700 bg-red-100 rounded-full py-1 px-2" onClick={ close }>
                                    &times;
                                </button>
                                <div className="header text-3xl p-4"> Register </div>
                                <form onSubmit={ handleSubmit(onSubmit) } className='flex flex-col gap-4 text-white bg-black p-4 rounded-xl w-full'>

                                    <div className="name">

                                        <input autoComplete='off' className='bg-black w-full p-2 rounded-md border-none focus:outline-green-400' type="text" placeholder='Name' { ...register('name', { required: "Please enter your name." }) } id="" />
                                        <p className='text-red-400 text-xs pl-1'>{ errors.name?.message }</p>
                                    </div>
                                    <div className="lemail">

                                        <input autoComplete='off' className='bg-black w-full p-2 rounded-md border-none focus:outline-green-400' type="email" placeholder='Email' { ...register('email', { required: "Please enter email." }) } id="" />
                                        <p className='text-red-400 text-xs pl-1'>{ errors.email?.message }</p>
                                    </div>


                                    <div className="actions flex justify-around">
                                        <input disabled={ isLoading } type="submit" value="Register" className='p-2 rounded-md bg-blue-600 disabled:opacity-50 hover:cursor-pointer hover:saturate-200' />
                                        <button
                                            className="button bg-red-500 rounded-md p-2"
                                            onClick={ () => {
                                                close();
                                            } }
                                        >
                                            Close
                                        </button>
                                    </div>
                                    <p className='text-green-500 text-center text-lg'>{ success }</p>
                                    <p className='text-lg text-red-400 text-center'>{ err }</p>

                                    { isLoading && <div className='w-full flex items-center justify-center p-5'>
                                        <img className='h-12 w-12' src={ require('../images/loading.gif') } alt="" />
                                    </div> }
                                </form>

                            </div>
                        ) }
                    </Popup>
                    <Popup
                        className=''
                        trigger={ <button className="button p-2 bg-green-500 rounded-md">Join Event </button> }
                        modal
                        nested
                    >
                        { close => (
                            <div className="modal w-96 flex flex-col gap-4 items-center justify-center bg-black text-white rounded-xl">
                                <button className="close absolute top-1 right-1 text-2xl font-bold text-red-700 bg-red-100 rounded-full py-1 px-2" onClick={ close }>
                                    &times;
                                </button>
                                <div className="header text-3xl p-4"> Attend Event </div>
                                <form onSubmit={ onJoin } className='flex flex-col gap-4 text-white bg-black p-4 rounded-xl w-full'>

                                    <div className="name">

                                        <input autoComplete='off' value={ ticket } onChange={ (e) => setticket(e.target.value) } className='bg-black w-full p-2 rounded-md border-none focus:outline-green-400' type="text" placeholder='Ticket Number' id="" />
                                        <p className='text-red-400 text-xs pl-1'></p>
                                    </div>



                                    <div className="actions flex justify-around">
                                        <input disabled={ isLoading } type="submit" value="Join" className='p-2 rounded-md bg-blue-600 disabled:opacity-50 hover:cursor-pointer hover:saturate-200' />
                                        <button
                                            className="button bg-red-500 rounded-md p-2"
                                            onClick={ () => {
                                                close();
                                            } }
                                        >
                                            Close
                                        </button>
                                    </div>
                                    <p className='text-green-500 text-center text-lg'>{ success }</p>
                                    <p className='text-lg text-red-400 text-center'>{ err }</p>

                                    { isLoading && <div className='w-full flex items-center justify-center p-5'>
                                        <img className='h-12 w-12' src={ require('../images/loading.gif') } alt="" />
                                    </div> }
                                </form>

                            </div>
                        ) }
                    </Popup>


                </div>
            </div>
        </>
    )
}

export default Event