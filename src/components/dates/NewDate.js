import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation'
import Calendar from '../Calendar'
import { Form } from 'react-bootstrap';

export default function NewDate() {

    const dates = require("../../data/confirmDates.json")
    const realEstates = require("../../data/properties.json")

    const [selectedClient, setSelectedClient] = useState(dates[0]);
    const [selectedProp, setSelectedProp] = useState(realEstates[0]);
    const [currentDay, setCurrentDay] = useState(new Date().toISOString().substring(0,10));

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
                    <h1>Nueva Cita</h1>
                    <form className="row my-0 g-0">
                        <div className="col-md-2">
                            <Form.Control type="text" name="clientId" placeholder="Cod" defaultValue="" />
                        </div>
                        <div className="col-md-4">
                            <Form.Control type="text" name="lastName" placeholder="Apellido" defaultValue="" />
                        </div>
                        <div className="col-md-4">
                            <Form.Control type="text" name="firstName" placeholder="Nombre" defaultValue="" />
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-secondary">Buscar</button>
                        </div>
                    </form>
                    <form className="row my-2 g-3">
                        <div className="col-md-7">
                            <Form.Control type="text" name="fullName" defaultValue="" placeholder="Apellido y Nombre" />
                        </div>
                        <div className="col-md-5">
                            <Form.Control type="date" name="date" defaultValue="" />
                        </div>
                        <div className="col-md-7">
                            <Form.Control type="text" name="cell" defaultValue="" placeholder="Celular" />
                        </div>
                        <div className="col-md-5">
                            <Form.Control type="time" name="time" defaultValue="" />
                        </div>
                        <div className="col-md-7">
                            <Form.Control type="text" name="email" defaultValue="" placeholder="e-mail" />
                        </div>
                        <div className="col-md-5">
                            <select name="seller" className="form-select">
                                <option defaultValue="">Agente...</option>
                                <option value="Vendedor 1">Vendedor 1</option>
                                <option value="Vendedor 2">Vendedor 2</option>
                                <option value="Vendedor 3">Vendedor 3</option>
                            </select>
                        </div>
                        <hr />
                        <div className="col-12">
                            <label className="form-label">Buscar Propiedades</label>
                            <form className="row my-0 g-0">
                                <div className="col-md-3">
                                    <select name="operation" className="form-select">
                                        <option value="rental">Alquiler</option>
                                        <option value="sale">Venta</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <select name="property" className="form-select">
                                        <option value="Departamento">Departamento</option>
                                        <option value="Casa">Casa</option>
                                        <option value="Terreno">Terreno</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select name="city" className="form-select">
                                        <option value="Resistencia">Resistencia</option>
                                        <option value="Barranqueras">Barranqueras</option>
                                        <option value="Fontana">Fontana</option>
                                        <option value="Corrientes">Corrientes</option>
                                        <option value="Formosa">Formosa</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <button type="submit" className="btn btn-secondary">Buscar</button>
                                </div>
                            </form>
                            <div className="my-2 g-3">
                                {
                                    realEstates.map((element, index) => (
                                        <div className="row col-md-12 my-0 g-0">
                                            <div class="col-md-1">
                                                <input class="form-check-input" type="radio" 
                                                    value={element.code} name="selectedProp" />
                                            </div>
                                            <div class="col-md-11">
                                                <button class="btn btn-light col-md-12" type="button"
                                                    data-bs-toggle="collapse" data-bs-target={"#" + element.code}
                                                    aria-expanded="false" aria-controls={element.code}>
                                                    {element.code + ": " + element.address}
                                                </button>
                                                <div class="collapse col-md-12" id={element.code}>
                                                    <div class="card card-body">
                                                        {"Hab: " + element.room + " Baños: " + element.bathroom
                                                            + " Garage: " + element.garage
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <button type="submit" className="btn btn-danger">Cancelar</button>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Confirmar</button>
                        </div>
                        <hr />
                    </form>
                </div>

                <div className="col-xl-9 col-12" id="box1">
                    <Calendar currentDay={currentDay} setCurrentDay={setCurrentDay}/>
                </div>
            </div>
        </div>
    )
}
