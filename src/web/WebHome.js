import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WebHome extends Component {
    render() {
        return (
            <div>
                <h1>DOMUS 2.0</h1>
                <br /><br />
                <h2>Propiedades ofrecidas en alquiler</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Propiedad</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Características</th>
                            <th scope="col">Cita</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Departamento 1</td>
                            <td>Calle 27 N°456</td>
                            <td>Dos dormitorios - 1 Baño - Cochera</td>
                            <td>
                                <Link to="/requestDate">
                                    <span className="badge rounded-pill bg-primary">solicitar</span>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Departamento 2</td>
                            <td>Calle 13 N°897</td>
                            <td>Dos dormitorios - 1 Baño - Sin Cochera</td>
                            <td>
                                <Link to="/requestDate">
                                    <span className="badge rounded-pill bg-primary">solicitar</span>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Departamento 3</td>
                            <td>Calle 123 s/n</td>
                            <td>Tres dormitorios - 2 Baños - Cochera</td>
                            <td>
                                <Link to="/requestDate">
                                    <span className="badge rounded-pill bg-primary">solicitar</span>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}