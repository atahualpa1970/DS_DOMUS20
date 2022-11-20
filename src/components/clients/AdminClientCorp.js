import React from 'react'
import { Form } from 'react-bootstrap'

export default function AdminClientCorp() {

    return (
        <div>
            <hr className="my-4" />
            <form className="row my-2 g-3">
                <div className="row col-md-6">
                    <Form.Label className="col-md-3 my-2 alignR">Razón Social:</Form.Label>
                    <div className="col-md-8">
                        <Form.Control type="text" name="companyName" defaultValue="" />
                    </div>
                    <Form.Label className="col-md-3 my-2 alignR">Propietarios:</Form.Label>
                    <div className="col-md-8">
                        <Form.Control type="text" name="owners" defaultValue="" />
                    </div>
                    <Form.Label className="col-md-3 my-2 alignR">CUIT:</Form.Label>
                    <div className="col-md-8">
                        <Form.Control type="text" name="cuit" defaultValue="" />
                    </div>
                    <Form.Label className="col-md-3 my-2 alignR">Teléfono:</Form.Label>
                    <div className="col-md-8">
                        <Form.Control type="text" name="nroDeTelefono" defaultValue="" />
                    </div>
                    <Form.Label className="col-md-3 my-2 alignR">e-mail:</Form.Label>
                    <div className="col-md-8">
                        <Form.Control type="text" name="email" defaultValue="" />
                    </div>
                    <Form.Label className="col-md-3 my-2 alignR">Direccion Oficina:</Form.Label>
                    <div className="col-md-8">
                        <Form.Control type="text" name="direccionEmpresa" defaultValue="" />
                    </div>
                    <Form.Label className="col-md-3 my-2 alignR">Agente:</Form.Label>
                    <div className="col-md-8">
                            <select name="seller" className="form-select">
                                <option defaultValue="">Agente...</option>
                                <option value="Vendedor 1">Vendedor 1</option>
                                <option value="Vendedor 2">Vendedor 2</option>
                                <option value="Vendedor 3">Vendedor 3</option>
                            </select>
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
