import React, { Component } from 'react'

export default class CreateDates extends Component {
    render() {
        return (
            <div class="container my-3" id="box1">
                <h2>Confirmar Cita</h2>
                <form class="row my-2 g-3">
                    <div class="col-md-4">
                        <label for="firstName" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="firstName" value="Pepe" disabled />
                    </div>
                    <div class="col-md-4">
                        <label for="lastName" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="lastName" value="Grillo" disabled />
                    </div>
                    <div class="col-md-4">
                        <label for="cellPhone" class="form-label">Celular</label>
                        <input type="text" class="form-control" id="cellPhone" value="+54-362-123456" disabled />
                    </div>
                    <hr />
                    <div class="col-12">
                        <label for="address" class="form-label">Propiedad a visitar</label>
                        <div class="input-group">
                            <div class="input-group-text">Cod:AA-324</div>
                            <input type="text" class="form-control" id="address" value="Siempreviva 742" disabled />
                        </div>
                    </div>
                    <div class="col-12">
                        <label for="schedule" class="form-label">Horarios disponibles del interesado</label>
                        <input type="text" class="form-control" id="schedules" value="Lunes a viernes de 18 a 21hs. Sábados por la tarde" disabled />
                    </div>
                    <hr />
                    <div class="col-md-6">
                        <label for="seller" class="form-label">State</label>
                        <select id="seller" class="form-select">
                            <option selected>Seleccione vendedor...</option>
                            <option>Vendedor 1</option>
                            <option>Vendedor 2</option>
                            <option>Vendedor 3</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="confirmedDate" class="form-label">Fecha</label>
                        <input type="text" class="form-control" id="confirmedDate" />
                    </div>
                    <div class="col-md-2">
                        <label for="confirmedTime" class="form-label">Hora</label>
                        <input type="text" class="form-control" id="confirmedTime" />
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary">Confirmar Cita</button>
                    </div>
                </form>
            </div>
        )
    }
}
