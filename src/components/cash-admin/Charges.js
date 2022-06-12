import React, { useState } from 'react'
import Navigation from '../Navigation'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function Charges() {

    const navigate = useNavigate();
    const [selectedClientType, setSelectedClientType] = useState();

    const selectClientType = (e) => {
        setSelectedClientType(e.target.value)
    }
    
    const submitConfirm = () => {
        navigate("/app/chargesConfirm")
    }

    return (
        <div>
            <Navigation />
            <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
                <h3 className="col-md-3">Cobros</h3>
                <form className="row col-md-9 my-0 g-0">
                    <div className="col-md-2">
                        <select name="clientType" className="form-select col-md-3" onChange={selectClientType}>
                            <option value="">Tipo de cliente...</option>
                            <option value="particular">Particular</option>
                            <option value="corporativo">Corporativo</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <Form.Control type="text" name="lastName" placeholder="Apellido" defaultValue="" />
                    </div>
                    <div className="col-md-2">
                        <Form.Control type="text" name="firstName" placeholder="Nombre" defaultValue="" />
                    </div>
                    <div className="col-md-2">
                        <Form.Control type="text" name="companyName" placeholder="Razón Social" defaultValue="" />
                    </div>
                    <div className="col-md-2">
                        <Form.Control type="text" name="cuit" placeholder="CUIT" defaultValue="" />
                    </div>


                    <div className="col-md-1">
                        <button type="submit" className="btn btn-secondary">Buscar</button>
                    </div>
                </form>

                <hr className="my-4" />

                <div>
                    <form className="row my-2 g-3">
                        <div className="row col-md-6 mx-auto">
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
                            <hr className="my-4" />
                            <Form.Label className="col-md-3 my-2 alignR">Fecha Pago:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="date" name="paymentDate" defaultValue="" />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Interés por mora:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="interest" defaultValue="" />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Total a pagar:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="totalDue" defaultValue="" />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Forma de pago:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="paymentType" defaultValue="" />
                            </div>
                            <div className="col-md-12 alignC my-2">
                                <button type="submit" className="btn btn-danger mx-3">Cancelar</button>
                                <button type="button" className="btn btn-primary mx-3" onClick={submitConfirm}>Confirmar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}