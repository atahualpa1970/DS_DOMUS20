import React from 'react'
import NavWeb from '../components/NavWeb'
import Footer from '../components/Footer'

const realEstates = require("../data/propiedades.json")

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
              <option value="alquiler">Alquiler</option>
              <option value="venta">Venta</option>
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
          {realEstates.map(element => (element.destacada)
            ? <div className="col-md-4 p-2 " key={element.idPropiedad}>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">{element.codeProp + " - " + element.direccion}</h5>
                </div>
                <div className="card-body row flex">
                  <div id={"carousel" + element.idPropiedad} className="carousel slide col-md-6" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      {element.fotos.map((foto , index) =>
                        <div className={(index === 0) ? "carousel-item active" : "carousel-item"} key={index}>
                          <img src={"../images/" + foto}
                            style={{ alignSelf: "center", width: "300px", height: "200px" }}
                            alt={foto} />
                        </div>
                      )}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={"#carousel" + element.idPropiedad} data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={"#carousel" + element.idPropiedad} data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Siguiente</span>
                    </button>
                  </div>
                  <div className="card col-md-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Dormitorios: {element.habitaciones}</li>
                      <li className="list-group-item">Baños: {element.baños}</li>
                      <li className="list-group-item">{element.garage}</li>
                    </ul>
                    <button type="button" className="btn btn-primary btn-sm my-3"
                      value={element.idPropiedad} onClick={requestDate}>Ver</button>
                  </div>

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