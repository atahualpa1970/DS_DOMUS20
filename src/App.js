import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import WebHome from './web/WebHome'
import RequestDate from './web/RequestDate'

import LogIn from './components/LogIn'
import ListDates from './components/ListDates'
import ConfirmDate from './components/ConfirmDate'
import EditDate from './components/EditDate'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<WebHome />} />
                <Route exact path="/requestDate" element={<RequestDate />} />
                <Route exact path="/app" element={<LogIn />} />
                
                <Route path="/app/home" element={<ListDates />} />
                <Route path="/app/listDates" element={<ListDates />} />
                <Route path="/app/requestDates" element={<RequestDate />} />
                <Route path="/app/confirmDate" element={<ConfirmDate />} />
                <Route path="/app/editDate" element={<EditDate />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
