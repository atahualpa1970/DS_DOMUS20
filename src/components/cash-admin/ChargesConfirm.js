import React, { useState } from 'react'
import Navigation from '../Navigation'
import { Form } from 'react-bootstrap'


export default function ChargesConfirm() {

    const [selectedClientType, setSelectedClientType] = useState();

    const selectClientType = (e) => {
        setSelectedClientType(e.target.value)
    }

    return (
        <div>
            <Navigation />
            <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
                <h3 className="col-md-3">Cobros</h3>

                <hr className="my-4" />

                <div>
                    <form className="row my-2 g-3">
                        <div className="row col-md-6">
                            <Form.Label className="col-md-3 my-2 alignR">Inquilino:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="owner" defaultValue="" disabled />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Propietario:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="tenant" defaultValue="" disabled />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Precio Alquiler:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="rentAmount" defaultValue="" disabled />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">N° Transacción:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="transaction" defaultValue="" disabled />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Fecha Pago:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="date" name="paymentDate" defaultValue="" disabled />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Interés por mora:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="interest" defaultValue="" disabled />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Total a pagar:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="totalDue" defaultValue="" disabled />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Forma de pago:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="paymentType" defaultValue="" disabled />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    Cobro confirmado
                                </div>
                                <div className="card-body row">
                                    <div className="col-md-6">
                                        Imprimir Comprobante
                                        <img className="mx-3" src="../icons/printer.svg" width="32" height="32" alt="" />
                                    </div>
                                    <div className="col-md-6">
                                        Descargar Comprobante
                                        <img className="mx-3" src="../icons/download.svg" width="32" height="32" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}