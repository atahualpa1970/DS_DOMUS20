import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const props = require("../data/prop.json")

export default class WebHome extends Component {
    render() {
        return (
            <div className="container row">
                <h1>DOMUS 2.0</h1>
                <br /><br />
                <h2>Propiedades en alquiler</h2>
                {
                    props.map(element =>
                        (element.rental) ?
                            <div className="col-md-4 p-2 " key={element.idProp}>
                                <div className="card" style={{ width: "350px" }}>
                                    <div className="card-header">
                                        <img src={"../images/" + element.image[0]} className="card-img-top"
                                            style={{ alignSelf: "center", width: "300px", height: "200px" }}
                                            alt={"images/" + element.image[0]} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{element.code + " - " + element.address}</h5>
                                        <div className="card">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Dormitorios: {element.room}</li>
                                                <li className="list-group-item">Baños: {element.bathroom}</li>
                                                <li className="list-group-item">{element.garage}</li>
                                            </ul>
                                        </div>
                                        <Link to="/requestDate">Ver</Link>
                                    </div>
                                </div>
                            </div>
                            : null
                    )
                }

                <h2>Propiedades en Venta</h2>
                {
                    props.map(element =>
                        (element.sale) ?
                            <div className="col-md-4 p-2 " key={element.idProp}>
                                <div className="card" style={{ width: "350px" }}>
                                    <div className="card-header">
                                        <img src={"../images/" + element.image[0]} className="card-img-top"
                                            style={{ alignSelf: "center", width: "300px", height: "200px" }}
                                            alt={"images/" + element.image[0]} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{element.code + " - " + element.address}</h5>
                                        <div className="card">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Dormitorios: {element.room}</li>
                                                <li className="list-group-item">Baños: {element.bathroom}</li>
                                                <li className="list-group-item">{element.garage}</li>
                                            </ul>
                                        </div>
                                        <Link to="/requestDate">Ver</Link>
                                    </div>
                                </div>
                            </div>
                            : null
                    )
                }
            </div>
        )
    }
}