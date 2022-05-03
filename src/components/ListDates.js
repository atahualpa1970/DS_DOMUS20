import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import Calendar from './Calendar'
import { Form } from 'react-bootstrap';

export default function ListDates() {

    const dates = require("../data/date.json")
    const realEstates = require("../data/prop.json")

    const [selectedClient, setSelectedClient] = useState(dates[0]);
    const [selectedProp, setSelectedProp] = useState(realEstates[0]);

    useEffect(() => {
        realEstates.map((element) => (
            (dates[0].codeProp === element.code) ? setSelectedProp(element) : null
        ))
    }, [])


    const selectClient = (e) => {
        setSelectedClient(dates[e.target.value])
        realEstates.map((element) => (
            (dates[e.target.value].codeProp === element.code) ? setSelectedProp(element) : null
        ))
    }


    return (
        <div>
            <Navigation />
            <div className="row fluid mx-1 my-1">
                <div className="col-xl-3 col-12" id="box1">
                    <h1>Confirmar Cita</h1>
                    <form className="row my-2 g-3">
                        <div className="col-md-7">
                            <Form.Control type="text" name="fullName"
                                value={selectedClient.firstName + " " + selectedClient.lastName} disabled />
                        </div>
                        <div className="col-md-5">
                            <Form.Control type="date" name="date" defaultValue="" />
                        </div>
                        <div className="col-md-7">
                            <Form.Control type="text" name="cell" value={selectedClient.cellPhone} disabled />
                        </div>
                        <div className="col-md-5">
                            <Form.Control type="time" name="time" defaultValue="" />
                        </div>
                        <div className="col-md-7">
                            <Form.Control type="text" name="email" value={selectedClient.email} disabled />
                        </div>
                        <div className="col-md-5">
                            <select name="seller" className="form-select">
                                <option defaultValue="">Agente...</option>
                                <option value="Vendedor 1">Vendedor 1</option>
                                <option value="Vendedor 2">Vendedor 2</option>
                                <option value="Vendedor 3">Vendedor 3</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <div className="input-group">
                                <div className="input-group-text">Observaciones</div>
                                <Form.Control type="text" name="comments" value={selectedClient.comments} disabled />
                            </div>
                        </div>
                        <hr />
                        <div className="col-12">
                            <label className="form-label">Propiedad a visitar</label>
                            <div className="input-group">
                                <div className="input-group-text">Tipo: </div>
                                <Form.Control type="text" name="type" value={selectedProp.type} disabled />
                            </div>
                            <div className="input-group">
                                <div className="input-group-text">Direccion: </div>
                                <Form.Control type="text" name="address" value={selectedProp.address} disabled />
                            </div>
                            <div className="input-group">
                                <div className="input-group-text">Hab: </div>
                                <Form.Control type="text" name="room" value={selectedProp.room} disabled />
                            </div>
                            <div className="input-group">
                                <div className="input-group-text">Baños: </div>
                                <Form.Control type="text" name="bathroom" value={selectedProp.bathroom} disabled />
                            </div>
                            <div className="input-group">
                                <div className="input-group-text">Garage: </div>
                                <Form.Control type="text" name="garage" value={selectedProp.garage} disabled />
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Confirmar</button>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <button type="submit" className="btn btn-danger">Cancelar</button>
                        </div>
                        <hr />
                    </form>

                    <div className="my-2 g-3">
                        <h1>Solicitudes</h1>
                        <ul className="list-group col-12">
                            {
                                dates.map((element, index) => (
                                    <li className="list-group-item list-group-item-action" key={index} value={index}
                                        onClick={selectClient}>
                                        {element.lastName + ", " + element.firstName + " (" + element.cellPhone + ")"}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="col-xl-9 col-12" id="box1">
                    <Calendar />
                </div>
            </div>
        </div>
    )
}
