import React from 'react'
import { Form } from 'react-bootstrap'

export default function AdminClientPart() {

    return (
        <div>
            <hr className="my-4" />
            <form className="row my-2 g-3">
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
                <div className="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            Documentos
                            <img src="../icons/plus-circle.svg" style={{ float: "right" }} width="32" height="32" />
                        </div>
                        <div class="card-body">
                            No se agregaron documentos.
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="col-md-12 alignC">
                    <button type="submit" className="btn btn-danger mx-3">Cancelar</button>
                    <button type="submit" className="btn btn-primary mx-3">Confirmar</button>
                </div>
            </form>
        </div>
    )

}
