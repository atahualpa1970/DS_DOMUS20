import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import WebHome from './web/WebHome'
import RequestDate from './web/RequestDate'

import LogIn from './components/LogIn'
import ListDates from './components/ListDates'
import NewDate from './components/NewDate'
import CalendarDates from './components/CalendarDates'

import NewClient from './components/NewClient'
import AdminClients from './components/AminClients'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WebHome />} />
                <Route path="requestDate/:idProp" element={<RequestDate />} />
                <Route path="app/" element={<LogIn />} />
                <Route path="app/home" element={<ListDates />} />
                <Route path="app/listDates" element={<ListDates />} />
                <Route path="app/newDate" element={<NewDate />} />
                <Route path="app/calendarDates" element={<CalendarDates />} />

                <Route path="app/newClient" element={<NewClient />} />
                <Route path="app/adminClients" element={<AdminClients />} />

                <Route path="*" element={<div>Not Found</div>} />

            </Routes>
        </BrowserRouter>
    )
}

export default App
