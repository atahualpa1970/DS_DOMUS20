import React from 'react'
import { Form } from 'react-bootstrap'

export default function FormProp() {

    return (
        <form className="row my-2 g-3">
            <div className="row col-md-8">
                <Form.Label className="col-md-2 my-2 alignR">Tipo Propiedad:</Form.Label>
                <div className="col-md-3">
                    <select name="propType" className="form-select" >
                        <option value="dpto">Departamento</option>
                        <option value="casa">Casa</option>
                        <option value="chalet">Chalet</option>
                        <option value="local">Local Comercial</option>
                        <option value="casa-local">Casa con Local</option>
                        <option value="cabaña">Cabaña</option>
                        <option value="cochera">Cochera</option>
                        <option value="terreno">Terreno</option>
                        <option value="campo">Campo</option>
                    </select>
                </div>

                <Form.Label className="col-md-1 my-2 alignR">Dirección:</Form.Label>
                <div className="col-md-5">
                    <Form.Control type="text" name="address" defaultValue="" />
                </div>
                <Form.Label className="col-md-2 my-2 alignR">Barrio:</Form.Label>
                <div className="col-md-3">
                    <Form.Control type="text" name="district" defaultValue="" />
                </div>
                <Form.Label className="col-md-1 my-2 alignR">Ciudad:</Form.Label>
                <div className="col-md-2">
                    <Form.Control type="text" name="city" defaultValue="" />
                </div>
                <Form.Label className="col-md-1 my-2 alignR">Pais:</Form.Label>
                <div className="col-md-2">
                    <Form.Control type="text" name="county" defaultValue="" />
                </div>
                <Form.Label className="col-md-2 my-2 alignR">Habitaciones:</Form.Label>
                <div className="col-md-1">
                    <Form.Control type="text" name="rooms" defaultValue="" />
                </div>
                <Form.Label className="col-md-1 my-2 alignR">Baños:</Form.Label>
                <div className="col-md-1">
                    <Form.Control type="text" name="bathrooms" defaultValue="" />
                </div>
                <Form.Label className="col-md-1 my-2 alignR">Suite:</Form.Label>
                <div className="col-md-1">
                    <Form.Control type="text" name="suite" defaultValue="" />
                </div>
                <Form.Label className="col-md-2 my-2 alignR">Antigüedad:</Form.Label>
                <div className="col-md-2">
                    <Form.Control type="text" name="antique" defaultValue="" />
                </div>
                <Form.Label className="col-md-2 my-2 alignR">Espacios:</Form.Label>
                <div className="col-md-9">
                    <Form.Control type="text" name="spaces" defaultValue="" />
                </div>
                <Form.Label className="col-md-2 my-2 alignR">Servicios:</Form.Label>
                <div className="col-md-9">
                    <Form.Control type="text" name="services" defaultValue="" />
                </div>
                <Form.Label className="col-md-2 my-2 alignR">Cod.Propietario:</Form.Label>
                <div className="col-md-2">
                    <Form.Control type="text" name="codOwner" defaultValue="" />
                </div>
                <Form.Label className="col-md-2 my-2 alignR">Contrato:</Form.Label>
                <div className="col-md-2">
                    <select name="contract" className="form-select">
                        <option defaultValue="">Seleccione...</option>
                        <option value="venta">Venta</option>
                        <option value="alquiler">Alquiler</option>
                    </select>
                </div>
                <Form.Label className="col-md-1 my-2 alignR">Precio:</Form.Label>
                <div className="col-md-2">
                    <Form.Control type="text" name="price" defaultValue="" />
                </div>
                <Form.Label className="col-md-2 my-2 alignR">Descripción Breve:</Form.Label>
                <div className="col-md-9">
                    <Form.Control type="text" name="brief" defaultValue="" />
                </div>
                <Form.Label className="col-md-2 my-2 alignR">Descripción Detallada:</Form.Label>
                <div className="col-md-9">
                    <Form.Control as="textarea" rows={3} name="detailed" defaultValue="" />
                </div>
            </div>
            <div className="col-md-4">
                <div class="card">
                    <div class="card-header">
                        Fotos
                        <img src="../icons/plus-circle.svg" style={{ float: "right" }} width="32" height="32" />
                    </div>
                    <div class="card-body">
                        No se agregaron fotos.
                    </div>
                </div>
            </div>
            <div className="col-md-12 alignC">
                <button type="submit" className="btn btn-danger mx-3">Cancelar</button>
                <button type="submit" className="btn btn-primary mx-3">Confirmar</button>
            </div>
        </form>
    )

}
