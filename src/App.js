import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import { LoggedProvider } from './context/DataContext'

import WebHome from './web/WebHome'
import RequestDate from './web/RequestDate'

import LogIn from './components/LogIn'

import ListDates from './components/dates/ListDates'
import NewDate from './components/dates/NewDate'
import CalendarDates from './components/dates/CalendarDates'

import Transactions from './components/cash-admin/Transactions'
import Reports from './components/cash-admin/Reports'
import NewClient from './components/clients/NewClient'
import AdminClients from './components/clients/AdminClients'
import ListClients from './components/clients/ListClients'
import DebtorClients from './components/clients/DebtorClients'

import NewProp from './components/props/NewProp'
import AdminProps from './components/props/AdminProps'
import ListProps from './components/props/ListProps'

import Charges from './components/cash-admin/Charges'
import ChargesConfirm from './components/cash-admin/ChargesConfirm'
import InputsOuputs from './components/cash-admin/InputsOutput'
import CashClosing from './components/cash-admin/CashClosing'

import ListClaims from './components/claim/ListClaims'
import ListUsers from './components/users/ListUsers'

function App() {

    return (
        <LoggedProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<WebHome />} />
                    <Route path="requestDate/:idProp" element={<RequestDate />} />
                    <Route path="app/" element={<LogIn />} />

                    <Route path="app/listDates" element={<ListDates />} />
                    <Route path="app/newDate" element={<NewDate />} />
                    <Route path="app/calendarDates" element={<CalendarDates />} />

                    <Route path="app/transactions" element={<Transactions />} />
                    <Route path="app/reports" element={<Reports />} />
                    <Route path="app/newClient" element={<NewClient />} />
                    <Route path="app/adminClients" element={<AdminClients />} />
                    <Route path="app/listClients" element={<ListClients />} />
                    <Route path="app/debtorClients" element={<DebtorClients />} />

                    <Route path="app/newProp" element={<NewProp />} />
                    <Route path="app/adminProps" element={<AdminProps />} />
                    <Route path="app/listProps" element={<ListProps />} />

                    <Route path="app/charges" element={<Charges />} />
                    <Route path="app/chargesConfirm" element={<ChargesConfirm />} />
                    <Route path="app/inputsOutputs" element={<InputsOuputs />} />
                    <Route path="app/cashClosing" element={<CashClosing />} />

                    <Route path="app/listClaims" element={<ListClaims />} />

                    <Route path="app/listUsers" element={<ListUsers />} />

                    <Route path="*" element={<div>Not Found</div>} />

                </Routes>
            </BrowserRouter>
        </LoggedProvider>
    )
}

export default App
