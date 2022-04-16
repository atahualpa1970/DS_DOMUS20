import React, { Component } from 'react'

export default class FormDates extends Component {
    render() {
        return (
            <div class="container my-3" id="box1">
                <h2>Solicitar Cita</h2>
                <form class="row my-2 g-3">
                    <div class="col-md-4">
                        <label for="firstName" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="firstName" />
                    </div>
                    <div class="col-md-4">
                        <label for="lastName" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="lastName" />
                    </div>
                    <div class="col-md-4">
                        <label for="cellPhone" class="form-label">Celular</label>
                        <input type="text" class="form-control" id="cellPhone" placeholder="+54-123-456789" />
                    </div>
                    <hr />
                    <div class="col-12">
                        <label for="address" class="form-label">Propiedad a visitar</label>
                        <div class="input-group">
                            <div class="input-group-text">Cod:AA-324</div>
                            <input type="text" class="form-control" id="address" placeholder="Siempreviva 742" disabled />
                        </div>
                    </div>
                    <div class="col-12">
                        <label for="schedule" class="form-label">Indique sus horarios disponibles</label>
                        <input type="text" class="form-control" id="schedules" />
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        )
    }
}
