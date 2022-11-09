import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation'
import { Form } from 'react-bootstrap'

const claims = require("../../data/claims.json")
const props = require("../../data/properties.json")

export default function ListClaims() {

  useEffect(() => {
    claims.map((element) => (
      element.address = props.find(val => val.idProp == element.idProp).address)
    )
  }, [])

  const noUser = {
    idClaim: "",
    lastName: "",
    firstName: "",
    address: "",
    cellPhone: "",
    descript: "",
    email: ""
  }

  const clearUser = {
    idClaim: "",
    lastName: "",
    firstName: "",
    address: "",
    cellPhone: "",
    descript: "",
    email: ""
  }

  const [selectedClaim, setSelectedClaim] = useState(noUser);
  const [selectedTypes, setSelectedTypes] = useState();


  const claimType = {
    repair: "Reparación",
    admin: "Administrativo",
    missing: "Faltante"
  }

  const selectTypes = (e) => {
    setSelectedTypes(e.target.value)
  }

  const selectUser = (e) => {
    if (e.target.value >= 0) setSelectedClaim(claims[e.target.value])
  }

  const unselectUser = () => {
    setSelectedClaim(clearUser)
  }

  const editUser = (e) => {
    setSelectedClaim(claims[parseInt(e.target.name)])
  }

  return (
    <div>
      <Navigation />
      <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
        <h3 className="col-md-3">Gestión de Reclamos</h3>
        <div className="col-md-2">
          <select name="selectClaimType" className="form-select" onChange={selectTypes}>
            <option value="">Todos los tipos...</option>
            <option value="repair">{claimType.repair}</option>
            <option value="admin">{claimType.admin}</option>
            <option value="missing">{claimType.missing}</option>
          </select>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <Form.Control type="text" name="textSearch" placeholder="Realizar búsqueda..." defaultValue="" />
        </div>
        <div className="col-md-2">
          <select name="selectFieldSearch" className="form-select col-md-3">
            <option value="address">Direccion</option>
            <option value="firstName">Nombre</option>
            <option value="lastName">Apellido</option>
            <option value="cellPhone">Celular</option>
            <option value="email">e-mail</option>
          </select>
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-secondary">Buscar</button>
        </div>

        <hr className="my-4" />

        <div className="row col-md-12">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header">
                <h5 style={{ display: "inline-block" }}>Reclamos registrados</h5>
                <img src="../icons/plus-circle.svg" style={{ float: "right" }}
                  onClick={unselectUser} width="32" height="32" />
              </div>
              <div className="card-body">
                <ul className="list-group col-12">
                  {
                    claims.map((element, index) => (
                      (element[selectedTypes] || !selectedTypes)
                        ?
                        <li className="list-group-item list-group-item-action" key={index} value={index}
                          style={{ display: "inline-block" }} onClick={selectUser}>
                          {element.lastName + ", " + element.firstName}<br />
                          {props.find(val => val.idProp == element.idProp).address}
                          <p>{"(" + claimType[element.idType] + ") " + element.descript}
                            <img src="../icons/pencil.svg" onClick={editUser} name={index}
                              style={{ float: "right" }} width="20" height="20" /></p>
                        </li>

                        : null
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="card">
              <div className="card-header">
                <h5>{(selectedClaim.idClaim) ?
                  "Editar Reclamo" : "Registrar Nuevo Reclamo"}
                </h5>
              </div>
              <div className="card-body">
                <form className="row g-1 col-md-12 justify-content-center">
                  <div className="row col-md-10">
                    <Form.Label className="col-md-2 my-2 alignR">Dirección:</Form.Label>
                    <div className="col-md-9">
                      <Form.Control type="text" name="address" defaultValue={selectedClaim.address} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Apellido:</Form.Label>
                    <div className="col-md-9">
                      <Form.Control type="text" name="lastName" defaultValue={selectedClaim.lastName} />
                    </div>
                    <Form.Label className="col-md-2 my-3 alignR">Nombre:</Form.Label>
                    <div className="col-md-9">
                      <Form.Control type="text" name="firstName" defaultValue={selectedClaim.firstName} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Celular:</Form.Label>
                    <div className="col-md-9">
                      <Form.Control type="text" name="cellPhone" defaultValue={selectedClaim.cellPhone} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">e-mail:</Form.Label>
                    <div className="col-md-9">
                      <Form.Control type="text" name="email" defaultValue={selectedClaim.email} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Descripción:</Form.Label>
                    <div className="col-md-9">
                      <Form.Control type="descript" name="descript" defaultValue={selectedClaim.descript} />
                    </div>
                    <div className="col-md-12 mt-3 alignC">
                      <button type="submit" className="btn btn-danger mx-3">Cancelar</button>
                      <button type="submit" className="btn btn-primary mx-3">Confirmar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >
      </div >
    </div >
  )
}