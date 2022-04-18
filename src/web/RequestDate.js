import React, { Component } from 'react'

export default class RequestDate extends Component {
    render() {
        return (
            <div>
                <div className="container my-3" id="box1">
                    <h2>Solicitar Cita</h2>
                    <form className="row my-2 g-3">
                        <div className="col-md-4">
                            <label for="firstName" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="firstName" />
                        </div>
                        <div className="col-md-4">
                            <label for="lastName" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="lastName" />
                        </div>
                        <div className="col-md-4">
                            <label for="cellPhone" className="form-label">Celular</label>
                            <input type="text" className="form-control" id="cellPhone" placeholder="+54-123-456789" />
                        </div>
                        <hr />
                        <div className="col-12">
                            <label for="address" className="form-label">Propiedad a visitar</label>
                            <div className="input-group">
                                <div className="input-group-text">Cod:AA-324</div>
                                <input type="text" className="form-control" id="address" placeholder="Siempreviva 742" disabled />
                            </div>
                        </div>
                        <div className="col-12">
                            <label for="schedule" className="form-label">Indique sus horarios disponibles</label>
                            <input type="text" className="form-control" id="schedules" />
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
