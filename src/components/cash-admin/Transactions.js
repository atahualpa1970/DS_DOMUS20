import React, { useState } from 'react'
import Navigation from '../Navigation'
import { Form } from 'react-bootstrap'


export default function Transactions() {

    const [selectedClientType, setSelectedClientType] = useState();

    const selectClientType = (e) => {
        setSelectedClientType(e.target.value)
    }

    return (
        <div>
            <Navigation />
            <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
                <h3 className="col-md-3">Transacciones</h3>
                <form className="row col-md-9 my-0 g-0">
                    <div className="col-md-2">
                        <select name="clientType" className="form-select col-md-3" onChange={selectClientType}>
                            <option value="">Tipo de transaccion...</option>
                            <option value="alquiler" selected>Cobro de alquiler</option>
                            <option value="comision">Cobro de comision</option>
                            <option value="entrada">Ingresos</option>
                            <option value="salida">Egresos</option>
                        </select>
                    </div>
                    <Form.Label className="col-md-1 my-2 alignR">Desde:</Form.Label>
                    <div className="col-md-2">
                        <Form.Control type="date" name="date" defaultValue="" />
                    </div>
                    <Form.Label className="col-md-1 my-2 alignR">Hasta:</Form.Label>
                    <div className="col-md-2">
                        <Form.Control type="date" name="date" defaultValue="" />
                    </div>
                    <div className="col-md-1">
                        <button type="submit" className="btn btn-secondary">Buscar</button>
                    </div>
                </form>

                <hr className="my-4" />

                <div className="row my-2 g-3">
                    <form className="row my-2 g-3">
                        <div className="col-md-6">
                            <div className="card col-md-10">
                                <div className="card-header">
                                    Transacciones realizadas
                                </div>
                                <div className="card-body">
                                    No existen transacciones para mostrar.
                                </div>
                            </div>
                        </div>
                        <div className="row col-md-6 my-2" id="box1">
                            <h3>Detalle</h3>
                            <Form.Label className="col-md-2 my-2 alignR">Nro.Transaccion:</Form.Label>
                            <div className="col-md-9">
                                <Form.Control type="text" name="concept" value="" disabled />
                            </div>
                            <Form.Label className="col-md-2 my-2 alignR">Inquilino:</Form.Label>
                            <div className="col-md-9">
                                <Form.Control type="text" name="concept" value="" disabled />
                            </div>
                            <Form.Label className="col-md-2 my-2 alignR">Propietario:</Form.Label>
                            <div className="col-md-9">
                                <Form.Control type="text" name="amount" value="" disabled />
                            </div>

                            <hr className="my-4" />

                            <Form.Label className="col-md-2 my-2 alignR">Fecha Pago:</Form.Label>
                            <div className="col-md-3">
                                <Form.Control type="text" name="amount" value="" disabled />
                            </div>
                            <Form.Label className="col-md-2 my-2 alignR">Importe Alquiler:</Form.Label>
                            <div className="col-md-4">
                                <Form.Control type="text" name="amount" value="" disabled />
                            </div>
                            <Form.Label className="col-md-2 my-2 alignR">Interés por Mora:</Form.Label>
                            <div className="col-md-3">
                                <Form.Control type="text" name="amount" value="0 %" disabled />
                            </div>
                            <Form.Label className="col-md-2 my-2 alignR">Importe Mora:</Form.Label>
                            <div className="col-md-4">
                                <Form.Control type="text" name="amount" value="" disabled />
                            </div>
                            <Form.Label className="col-md-7 my-2 alignR">Importe Total:</Form.Label>
                            <div className="col-md-4">
                                <Form.Control type="text" name="amount" value="" disabled />
                            </div>
                        </div>
                    </form>
                </div>
                <hr className="my-4" />
                <div className="row my-2">
                    <Form.Label className="col-md-2 my-2 alignR">Total de Transacciones:</Form.Label>
                    <div className="col-md-1">
                        <Form.Control type="text" name="amount" value="" disabled />
                    </div>
                    <Form.Label className="col-md-1 my-2 alignR">Total Ingresos:</Form.Label>
                    <div className="col-md-1">
                        <Form.Control type="text" name="amount" value="" disabled />
                    </div>
                    <Form.Label className="col-md-1 my-2 alignR">Total Egresos:</Form.Label>
                    <div className="col-md-1">
                        <Form.Control type="text" name="amount" value="" disabled />
                    </div>
                    <Form.Label className="col-md-1 my-2 alignR">Importe General:</Form.Label>
                    <div className="col-md-1">
                        <Form.Control type="text" name="amount" value="" disabled />
                    </div>
                    <div className="col-md-2">
                        <button>Generar Reporte</button>
                    </div>
                </div>
            </div>
        </div>
    )

}