import React, { useState } from 'react'
import Navigation from '../Navigation'
import { Form } from 'react-bootstrap'


export default function InputsOuputs() {

    const [selectedClientType, setSelectedClientType] = useState();

    const selectClientType = (e) => {
        setSelectedClientType(e.target.value)
    }

    return (
        <div>
            <Navigation />
            <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
                <h3 className="col-md-3">Movimientos de Caja</h3>

                <hr className="my-4" />

                <div className="row my-2 g-3">
                    <form className="row my-2 g-3">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    Entradas
                                </div>
                                <div className="card-body">
                                    No existen entradas para mostrar.
                                </div>
                            </div>
                            <br /><br />
                            <div className="card">
                                <div className="card-header">
                                    Salidas
                                </div>
                                <div className="card-body">
                                    No existen salidas para mostrar.
                                </div>
                            </div>
                        </div>
                        <div className="row col-md-6">
                            <Form.Label className="col-md-3 my-2 alignR">Movimiento:</Form.Label>
                            <div className="col-md-8">
                                <select name="movement" className="form-select col-md-3">
                                    <option value="">Seleccionar...</option>
                                    <option value="input">Entrada de dinero</option>
                                    <option value="output">Salida de dinero</option>
                                </select>
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Concepto:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="concept" defaultValue="" />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Monto:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="amount" defaultValue="" />
                            </div>
                            <div className="col-md-11 alignC">
                                <button type="submit" className="btn btn-danger mx-3">Cancelar</button>
                                <button type="submit" className="btn btn-primary mx-3">Confirmar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}