import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import WebHome from './web/WebHome'
import RequestDate from './web/RequestDate'

import LogIn from './components/LogIn'
import ListDates from './components/ListDates'
import ListDates2 from './components/ListDates2'
import CalendarDates from './components/CalendarDates'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<WebHome />} />
                <Route exact path="/requestDate" element={<RequestDate />} />
                <Route exact path="/app" element={<LogIn />} />
                
                <Route path="/app/home" element={<ListDates />} />
                <Route path="/app/listDates" element={<ListDates />} />
                <Route path="/app/listDates2" element={<ListDates2 />} />
                <Route path="/app/calendarDates" element={<CalendarDates />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App
