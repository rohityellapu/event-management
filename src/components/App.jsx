import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Admin from './Admin';
import Events from './Events';
import Event from './Event';
import EventDetail from './EventDetail';

function App() {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path='/admin-login' element={ <Login /> } />
                    <Route path='/administration' element={ <Admin /> } />
                    <Route path='/' element={ <Events /> } />
                    <Route path='/:event' element={ <Event /> } />
                    <Route path='/administration/:event' element={ <EventDetail /> } />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App