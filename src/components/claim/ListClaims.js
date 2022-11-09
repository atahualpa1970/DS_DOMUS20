import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation'
import { Form } from 'react-bootstrap'

const claims = require("../../data/claims.json")
const props = require("../../data/properties.json")
const clients = require("../../data/clients.json")
const propCli = require("../../data/relPropCli.json")

export default function ListClaims() {

  claims.map((element) => {
    element.address = props.find(val => val.idProp == element.idProp).address
    element.lastName = clients.find(val => val.idClient == element.idClient).lastName
    element.firstName = clients.find(val => val.idClient == element.idClient).firstName
  })

  const clearClaim = {
    idClaim: "",
    idClient: "",
    lastName: "",
    firstName: "",
    cellPhone: "",
    email: "",
    idProp: "",
    address: "",
    descript: ""
  }

  const [selectedClaim, setSelectedClaim] = useState(clearClaim);
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
    setSelectedClaim(clearClaim)
    document.getElementById("claimForm").reset();
    document.getElementById("idProp").focus()
  }

  const editUser = (e) => {
    setSelectedClaim(claims[parseInt(e.target.name)])
  }

  const searchProp = (e) => {
    const prop = props.find(val => val.idProp == e.target.value)
    if (prop) document.getElementById("address").value = prop.address
    else { console.log("PROP: ", prop); unselectUser() }
  }

  const searchClient = (e) => {
    const client = clients.find(val => val.idClient == e.target.value)
    if (client) {
      document.getElementById("lastName").value = client.lastName
      document.getElementById("firstName").value = client.firstName
      const relPropCli = propCli.find(val => val.idClient == client.idClient)
      const prop = props.find(val => val.idProp == relPropCli.idProp)
      document.getElementById("idProp").value = prop.idProp
      document.getElementById("address").value = prop.address
    }
    else unselectUser()
  }

  const handleSubmit = (e) => {
    let max = 0
    claims.map((element) => ((element.idClaim > max) ? max = element.idClaim : null))
    const inputForm = e.target.form.elements
    console.log("EVENT: ", inputForm)
    const newClaim = {
      idClaim: max + 1,
      idClient: inputForm.idClient.value,
      lastName: inputForm.lastName.value,
      firstName: inputForm.firstName.value,
      cellPhone: inputForm.cellPhone.value,
      email: inputForm.email.value,
      idProp: inputForm.idProp.value,
      address: inputForm.address.value,
      descript: inputForm.descript.value
    }
    console.log("NEWCLAIM: ", newClaim)
    claims.push(newClaim)
    console.log("RECLAMOS: ", claims)
    unselectUser()
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
                <form id="claimForm" className="row g-1 col-md-12 justify-content-center">
                  <div className="row col-md-12">
                    <Form.Label className="col-md-2 my-2 alignR">Cod.Cliente:</Form.Label>
                    <div className="col-md-2">
                      <Form.Control type="text" name="idClient" id="idClient" defaultValue={selectedClaim.idProp} onBlur={searchClient} />
                    </div>
                    <div className="col-md-4">
                      <Form.Control type="text" name="lastName" id="lastName" defaultValue={selectedClaim.lastName} disabled />
                    </div>
                    <div className="col-md-4">
                      <Form.Control type="text" name="firstName" id="firstName" defaultValue={selectedClaim.firstName} disabled />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Celular:</Form.Label>
                    <div className="col-md-10">
                      <Form.Control type="text" name="cellPhone" defaultValue={selectedClaim.cellPhone} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">e-mail:</Form.Label>
                    <div className="col-md-10">
                      <Form.Control type="text" name="email" defaultValue={selectedClaim.email} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Propiedad:</Form.Label>
                    <div className="col-md-2">
                      <Form.Control type="text" name="idProp" id="idProp" defaultValue={selectedClaim.idProp} disabled />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Dirección:</Form.Label>
                    <div className="col-md-6">
                      <Form.Control type="text" name="address" id="address" defaultValue={selectedClaim.address} disabled />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Descripción:</Form.Label>
                    <div className="col-md-10">
                      <Form.Control type="descript" name="descript" defaultValue={selectedClaim.descript} />
                    </div>
                    <div className="col-md-12 mt-3 alignC">
                      <button type="button" className="btn btn-danger mx-3" onClick={unselectUser}>Cancelar</button>
                      <button type="button" className="btn btn-primary mx-3" onClick={handleSubmit}>Confirmar</button>
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