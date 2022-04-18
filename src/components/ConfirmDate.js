import React, { Component } from 'react'
import Navigation from './Navigation'

export default class ConfirmDate extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="container my-3" id="box1">
                    <h2>Confirmar Cita</h2>
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
                        <div className="col-12">
                            <label for="schedule" className="form-label">Horarios disponibles del interesado</label>
                            <input type="text" className="form-control" id="schedules" value="Lunes a viernes de 18 a 21hs. Sábados por la tarde" disabled />
                        </div>
                        <hr />
                        <div className="col-md-6">
                            <label for="seller" className="form-label">State</label>
                            <select id="seller" className="form-select">
                                <option selected>Seleccione vendedor...</option>
                                <option>Vendedor 1</option>
                                <option>Vendedor 2</option>
                                <option>Vendedor 3</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label for="confirmedDate" className="form-label">Fecha</label>
                            <input type="text" className="form-control" id="confirmedDate" />
                        </div>
                        <div className="col-md-2">
                            <label for="confirmedTime" className="form-label">Hora</label>
                            <input type="text" className="form-control" id="confirmedTime" />
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Confirmar Cita</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
