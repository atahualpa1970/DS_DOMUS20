import React, { useState } from 'react'
import Navigation from '../Navigation'
import AdminClientPart from './AdminClientPart'
import AdminClientCorp from './AdminClientCorp'
import { Form } from 'react-bootstrap'


export default function AdminClients() {

    const [selectedClientType, setSelectedClientType] = useState("particular");

    const selectClientType = (e) => {
        setSelectedClientType(e.target.value)
    }

    const renderSwitch = (param) => {
        switch (selectedClientType) {
            case "particular": return <AdminClientPart />;
            case "corporativo": return <AdminClientCorp />;
        }
    }

    return (
        <div>
            <Navigation />
            <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
                <h3>Administrar Clientes</h3>
                <form className="form-inline row col-md-12 justify-content-center">
                    <div className="col-md-3">
                        <select name="clientType" className="form-select col-md-3" onChange={selectClientType}>
                            <option value="particular">Cliente Particular</option>
                            <option value="corporativo">Cliente Corporativo</option>
                        </select>
                    </div>

                    {(selectedClientType === "particular") ?
                        <div className="row col-md-9 justify-content-center">
                            <div className="col-md-2">
                                <Form.Control type="text" name="clientId" placeholder="Cod" defaultValue="" />
                            </div>
                            <div className="col-md-3">
                                <Form.Control type="text" name="lastName" placeholder="Apellido" defaultValue="" />
                            </div>
                            <div className="col-md-3">
                                <Form.Control type="text" name="firstName" placeholder="Nombre" defaultValue="" />
                            </div>
                            <div className="col-md-2">
                                <button type="submit" className="btn btn-secondary">Buscar</button>
                            </div>
                        </div>
                        :
                        <div className="row col-md-9 justify-content-center">
                            <div className="col-md-2">
                                <Form.Control type="text" name="clientId" placeholder="Cod" defaultValue="" />
                            </div>
                            <div className="col-md-3">
                                <Form.Control type="text" name="companyName" placeholder="Razón Social" defaultValue="" />
                            </div>
                            <div className="col-md-3">
                                <Form.Control type="text" name="cuit" placeholder="CUIT" defaultValue="" />
                            </div>
                            <div className="col-md-2">
                                <button type="submit" className="btn btn-secondary">Buscar</button>
                            </div>
                        </div>
                    }
                </form>

                { renderSwitch(selectedClientType) }

            </div>
        </div>
    )

}