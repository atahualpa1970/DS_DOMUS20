import React from 'react'
import NavWeb from '../components/NavWeb'
import Footer from '../components/Footer'

const realEstates = require("../data/prop.json")

export default function WebHome() {

    const requestDate = (e) => {
        window.location.href = "/requestDate/" + e.target.value
    }

    return (
        <div id="grad" style={{ height: "1080px" }}>
            <div className="container"><NavWeb /></div>
            <br /><br />
            <div className="container">
                <form className="form-inline row justify-content-center">
                    <div className="col-md-2">
                        <select name="operation" className="form-select">
                            <option value="rental">Alquiler</option>
                            <option value="sale">Venta</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <select name="property" className="form-select">
                            <option value="Departamento">Departamento</option>
                            <option value="Casa">Casa</option>
                            <option value="Terreno">Terreno</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <select name="city" className="form-select">
                            <option value="Resistencia">Resistencia</option>
                            <option value="Barranqueras">Barranqueras</option>
                            <option value="Fontana">Fontana</option>
                            <option value="Corrientes">Corrientes</option>
                            <option value="Formosa">Formosa</option>
                        </select>
                    </div>
                    <div className="col-md-1">
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </div>
                </form>
            </div>
            <br /><br /><br />
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className="row justify-content-center">Propiedades destacadas</h2>
                    {realEstates.map(element => (element.highlight)
                        ? <div className="col-md-3 p-2 " key={element.idProp}>
                            <div className="card">
                                <div className="card-header">
                                    <div id={"carousel" + element.idProp} className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            {element.image.map((image, index) =>
                                                <div className={(index === 0) ? "carousel-item active" : "carousel-item"} key={index}>
                                                    <img src={"../images/" + image}
                                                        style={{ alignSelf: "center", width: "300px", height: "200px" }}
                                                        alt={image} />
                                                </div>
                                            )}
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target={"#carousel" + element.idProp} data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Anterior</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target={"#carousel" + element.idProp} data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Siguiente</span>
                                        </button>
                                    </div>

                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{element.code + " - " + element.address}</h5>
                                    <div className="card">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Dormitorios: {element.room}</li>
                                            <li className="list-group-item">Baños: {element.bathroom}</li>
                                            <li className="list-group-item">{element.garage}</li>
                                        </ul>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-sm"
                                        value={element.idProp} onClick={requestDate}>Ver</button>
                                </div>
                            </div>
                        </div>
                        : null
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}