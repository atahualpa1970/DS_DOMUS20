import React, { Component } from 'react'
import Navigation from './Navigation'

export default class EditDate extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="container my-3" id="box1">
                    <h2>Modificar Cita</h2>
                    <form className="row my-2 g-3">
                        <div className="col-md-4">
                            <label for="firstName" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="firstName" value="Pepe" disabled />
                        </div>
                        <div className="col-md-4">
                            <label for="lastName" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="lastName" value="Grillo" disabled />
                        </div>
                        <div className="col-md-4">
                            <label for="cellPhone" className="form-label">Celular</label>
                            <input type="text" className="form-control" id="cellPhone" value="+54-362-123456" disabled />
                        </div>
                        <hr />
                        <div className="col-12">
                            <label for="address" className="form-label">Propiedad a visitar</label>
                            <div className="input-group">
                                <div className="input-group-text">Cod:AA-324</div>
                                <input type="text" className="form-control" id="address" value="Siempreviva 742" disabled />
                            </div>
                        </div>
                        <hr />
                        <div className="col-md-4">
                            <label for="seller" className="form-label">Agente</label>
                            <select id="seller" className="form-select">
                                <option>Seleccione vendedor...</option>
                                <option selected>Vendedor 1</option>
                                <option>Vendedor 2</option>
                                <option>Vendedor 3</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label for="confirmedDate" className="form-label">Fecha</label>
                            <input type="text" className="form-control" id="confirmedDate" value="04/05/2022" />
                        </div>
                        <div className="col-md-2">
                            <label for="confirmedTime" className="form-label">Hora</label>
                            <input type="text" className="form-control" id="confirmedTime" value="19:00" />
                        </div>
                        <div className="col-md-2">
                            <label for="seller" className="form-label">Estado</label>
                            <select id="seller" className="form-select">
                                <option>Estado...</option>
                                <option selected>En proceso</option>
                                <option>Finalizada</option>
                                <option>Cancelada</option>
                            </select>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Actualizar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
