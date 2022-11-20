import React, { useState } from 'react'
import Navigation from '../Navigation'
import { Form } from 'react-bootstrap'


export default function ListClients() {

    const [selectedClientType, setSelectedClientType] = useState();

    const selectClientType = (e) => {
        setSelectedClientType(e.target.value)
    }

    return (
        <div>
            <Navigation />
            <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
                <h3 className="col-md-3">Clientes</h3>
                <form className="row col-md-9 my-0 g-0">
                    <div className="col-md-2">
                        <select name="tipoDeCliente" className="form-select col-md-3" onChange={selectClientType}>
                            <option value="">Tipo de cliente...</option>
                            <option value="particular">Particular</option>
                            <option value="corporativo">Corporativo</option>
                        </select>
                    </div>
                    {(selectedClientType === "particular") ?
                        <div className="col-md-2">
                            <Form.Control type="text" name="lastName" placeholder="Apellido" defaultValue="" />
                        </div>
                        : null}
                    {(selectedClientType === "particular") ?
                        <div className="col-md-2">
                            <Form.Control type="text" name="firstName" placeholder="Nombre" defaultValue="" />
                        </div>
                        : null}
                    {(selectedClientType === "corporativo") ?
                        <div className="col-md-2">
                            <Form.Control type="text" name="companyName" placeholder="Razón Social" defaultValue="" />
                        </div>
                        : null}
                    {(selectedClientType === "particular" || selectedClientType === "corporativo") ?
                        <div className="col-md-2">
                            <Form.Control type="text" name="cuit" placeholder="CUIT" defaultValue="" />
                        </div>
                        : null}
                    <div className="col-md-1">
                        <button type="submit" className="btn btn-secondary">Buscar</button>
                    </div>
                </form>

                <hr className="my-4" />

                <div>
                    <form className="row my-2 g-3">
                        <div className="col-md-6">
                            <div class="card">
                                <div class="card-header">
                                    Listado
                                </div>
                                <div class="card-body">
                                    No existen clientes para mostrar.
                                </div>
                            </div>
                        </div>
                        <div className="row col-md-6">
                            <Form.Label className="col-md-3 my-2 alignR">Apellido:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="lastName" defaultValue="" />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Nombre:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="firstName" defaultValue="" />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">DNI:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="dni" defaultValue="" />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">CUIT/CUIL:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="cuit" defaultValue="" />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Fecha Nacimiento:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="date" name="birthdate" defaultValue="" />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Celular:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="cellPhone" defaultValue="" />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">e-mail:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="email" defaultValue="" />
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className="col-md-12 alignC">
                            <button type="submit" className="btn btn-danger mx-3">Cancelar</button>
                            <button type="submit" className="btn btn-primary mx-3">Confirmar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}