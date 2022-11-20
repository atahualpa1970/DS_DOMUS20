import React, { useState } from 'react'
import Navigation from '../Navigation'
import { Form } from 'react-bootstrap'

export default function Reports() {

    const [selectedReportType, setSelectedReportType] = useState("../reports/Reporte_alquileres.png");

    const selectReportType = (e) => {
        const reports = {
            alquileres: "../reports/Reporte_alquileres.png",
            ventas: "../reports/Reporte_ventas.png",
            clientes: "../reports/Reporte_nuevos_clientes.png",
            propiedades: "../reports/Reporte_nuevos_inmuebles.png"
        }
        setSelectedReportType(reports[e.target.value])
    }

    return (
        <div>
            <Navigation />
            <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
                <h3 className="col-md-3">Reportes</h3>
                <form className="row col-md-9 my-0 g-0">
                    <div className="col-md-2">
                        <select name="tipoDeCliente" className="form-select col-md-3" onChange={selectReportType}>
                            <option value="">Tipo de reporte...</option>
                            <option value="alquileres" selected>Alquileres</option>
                            <option value="ventas">Ventas</option>
                            <option value="clientes">Clientes</option>
                            <option value="propiedades">Propiedades</option>
                        </select>
                    </div>
                    <Form.Label className="col-md-1 my-2 alignR">Desde:</Form.Label>
                    <div className="col-md-2">
                        <Form.Control type="date" name="date" defaultValue="" />
                    </div>
                    <Form.Label className="col-md-1 my-2 alignR">Hasta:</Form.Label>
                    <div className="col-md-2">
                        <Form.Control type="date" name="date" defaultValue="" />
                    </div>
                    <div className="col-md-1">
                        <button type="submit" className="btn btn-secondary">Buscar</button>
                    </div>
                </form>

                <hr className="my-4" />

                <div className="row my-2 g-3">
                    <form className="row my-2 g-3 justify-content-center">
                        <div className="col-md-5 d-flex justify-content-end">
                            <button className="btn btn-primary">Descargar</button>
                        </div>
                        <div className="col-md-8">
                            <img src={selectedReportType} alt="" width="85%" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}