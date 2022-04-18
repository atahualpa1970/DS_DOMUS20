import React, { Component } from 'react'
import Navigation from './Navigation'

export default class ListDates extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="container">
                    <h1>Solicitudes de citas</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Celular</th>
                                <th scope="col">Propiedad</th>
                                <th scope="col">Horarios posibles</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>3624-112233</td>
                                <td>Calle 5 N°123</td>
                                <td>Lunes a Viernes de 17 a 20</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>3624-445566</td>
                                <td>Mitre 99</td>
                                <td>Lunes a Viernes de 11 a 14</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>Mullen</td>
                                <td>3624-778899</td>
                                <td>Siempreviva 742</td>
                                <td>Sabados de mañana</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
