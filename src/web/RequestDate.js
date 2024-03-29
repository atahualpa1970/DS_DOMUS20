import React from 'react'
import NavWeb from '../components/NavWeb'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';


export default function RequestDate() {

    const params = useParams()
    const realEstates = require("../data/propiedades.json")
    var selectedProp = {}
    realEstates.map((prop) => (
        (prop.id.toString() === params.idPropiedad) ? selectedProp = prop : null
    ))

    return (
        <div id="grad" style={{ height: "1080px" }}>
            <div className="row fluid col-xl-12 mx-1 my-1">
                <div className="container"><NavWeb /></div>
                <br /><br />
                <div className="card col-md-4">
                    <div className="card-header">
                        <div id={"carousel" + selectedProp.id} className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {selectedProp.fotos.map((foto, index) =>
                                    <div className={(index === 0) ? "carousel-item active" : "carousel-item"} key={index}>
                                        <img src={"../images/" + foto}
                                            style={{ alignSelf: "center", width: "400px", height: "250px" }}
                                            alt={foto} />
                                    </div>
                                )}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={"#carousel" + selectedProp.id} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={"#carousel" + selectedProp.id} data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Siguiente</span>
                            </button>
                        </div>

                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title">{selectedProp.codigoProp + " - " + selectedProp.direccion}</h5>
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Dormitorios: {selectedProp.habitaciones}</li>
                                <li className="list-group-item">Baños: {selectedProp.baños}</li>
                                <li className="list-group-item">{selectedProp.garage}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container col-md-6 my-3" id="box1">
                    <h2>Solicitar Cita</h2>
                    <form className="row my-2 g-3">
                        <div className="col-md-4">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="apellido" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Celular</label>
                            <input type="text" className="form-control" id="nroCelular" placeholder="+54-123-456789" />
                        </div>
                        <hr />
                        <div className="col-12">
                            <label className="form-label">Propiedad a visitar</label>
                            <div className="input-group">
                                <div className="input-group-text">Cod:AA-324</div>
                                <input type="text" className="form-control" id="direccion" placeholder="Siempreviva 742" disabled />
                            </div>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Indique sus horarios disponibles</label>
                            <input type="text" className="form-control" id="schedules" />
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
