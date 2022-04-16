import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'


import Navigation from './components/Navigation'
import ListDates from './components/ListDates'
import FormDates from './components/FormDates'
import CreateDates from './components/CreateDates'

function App() {
    return (
        <BrowserRouter>
            <Navigation />


            <Routes>
                <Route path="/" element={<ListDates />} />
                <Route path="listDates" element={<ListDates />} />
                <Route path="formDates" element={<FormDates />} />
                <Route path="createDates" element={<CreateDates />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
