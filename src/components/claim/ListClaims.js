import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation'
import { Form } from 'react-bootstrap'

const claims = require("../../data/reclamos.json")
const props = require("../../data/propiedades.json")
const clients = require("../../data/clientes.json")
const propCli = require("../../data/cliente_propiedad.json")

export default function ListClaims() {

  claims.map((element) => {
    element.direccion = props.find(val => val.id == element.propiedad).direccion
    element.apellido = clients.find(val => val.idCliente == element.clienteQueReclama).apellido
    element.nombre = clients.find(val => val.idCliente == element.clienteQueReclama).nombre
    element.nroCelular = clients.find(val => val.idCliente == element.clienteQueReclama).nroCelular
    element.email = clients.find(val => val.idCliente == element.clienteQueReclama).email
  })

  const clearClaim = {
    propiedad: null,
    clienteQueReclama: null,
    propiedad: null,
    prioridad: "",
    descripcion: "",
    fecha: "",
    nombreDeContacto: "",
    telefonoDeContacto: "" 
  }

  const [selectedClaim, setSelectedClaim] = useState(clearClaim);
  const [selectedTypes, setSelectedTypes] = useState();

  const claimPriority = {
    baja: { title: "Baja", color: "yellow" },
    media: { title: "Media", color: "orange" },
    alta: { title: "Alta", color: "red" }
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
    document.getElementById("propiedad").focus()
  }

  const editUser = (e) => {
    setSelectedClaim(claims[parseInt(e.target.name)])
  }

  const searchProp = (e) => {
    const prop = props.find(val => val.id == e.target.value)
    if (prop) document.getElementById("direccion").value = prop.direccion
    else { console.log("PROP: ", prop); unselectUser() }
  }

  const searchClientId = (e) => {
    const client = clients.find(val => val.idCliente == e.target.value)
    if (client) {
      document.getElementById("clienteQueReclama").value = client.clienteQueReclama
      document.getElementById("apellido").value = client.apellido
      document.getElementById("nombre").value = client.nombre
      document.getElementById("nroCelular").value = client.nroCelular
      document.getElementById("email").value = client.email
      const relPropCli = propCli.find(val => val.idCliente == client.idCliente)
      const prop = props.find(val => val.id == relPropCli.id)
      document.getElementById("propiedad").value = prop.id
      document.getElementById("direccion").value = prop.direccion
    }
    else unselectUser()
  }

  const searchClientName = (e) => {
    const prop = props.find(val => val.id == e.target.value)
    if (prop) document.getElementById("direccion").value = prop.direccion
    else { console.log("PROP: ", prop); unselectUser() }
  }

  const handleSubmit = (e) => {
    let max = 0
    claims.map((element) => ((element.propiedad > max) ? max = element.propiedad : null))
    const inputForm = e.target.form.elements
    console.log("EVENT: ", inputForm)
    const newClaim = {
      propiedad: max + 1,
      clienteQueReclama: inputForm.clienteQueReclama.value,
      propiedad: inputForm.propiedad.value,
      prioridad: inputForm.prioridad.value,
      descripcion: inputForm.descripcion.value,
      fechaDeApertura: inputForm.fechaDeApertura.value,
      nombreDeContacto: inputForm.nombreDeContacto.value,
      telefonoDeContacto: inputForm.telefonoDeContacto.value
    }
    console.log("NEWCLAIM: ", newClaim)
    claims.push(newClaim)
    console.log("RECLAMOS: ", claims)
    unselectUser()
  }

  const today = new Date()
  const fechaDeApertura = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate()

  return (
    <div>
      <Navigation />
      <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
        <h3 className="col-md-3">Gestión de Reclamos</h3>
        <div className="col-md-2">
          <select name="selectPriority" className="form-select" onChange={selectTypes}>
            <option value="">Prioridad... (todas)</option>
            <option value="baja">{claimPriority.baja.title}</option>
            <option value="media">{claimPriority.media.title}</option>
            <option value="alta">{claimPriority.alta.title}</option>
          </select>
        </div>
        <div className="col-md-1"></div>
        <form className="row fluid col-md-6" onSubmit={searchClientName}>
          <div className="col-md-4">
            <Form.Control type="text" name="lastNameSearch" placeholder="Apellido..." defaultValue="" />
          </div>
          <div className="col-md-4">
            <Form.Control type="text" name="firstNameSearch" placeholder="Nombre..." defaultValue="" />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-secondary">Buscar</button>
          </div>
        </form>
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
                          {element.apellido + ", " + element.nombre}<br />
                          {props.find(val => val.id == element.propiedad).direccion}
                          <p>
                            <span key={claimPriority[element.prioridad].title} className="badge rounded-pill my-1"
                              style={{ "backgroundColor": claimPriority[element.prioridad].color, "color": "black" }}
                              data-bs-toggle="tooltip" data-bs-html="true"
                              title={claimPriority[element.prioridad].title}>
                              {claimPriority[element.prioridad].title}
                            </span>
                            {" " + element.descripcion}
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
                <h5>{(selectedClaim.propiedad) ?
                  "Editar Reclamo" : "Registrar Nuevo Reclamo"}
                </h5>
              </div>
              <div className="card-body">
                <form id="claimForm" className="row g-1 col-md-12 justify-content-center">
                  <div className="row col-md-12">
                    <Form.Label className="col-md-2 my-2 alignR">Cod.Cliente:</Form.Label>
                    <div className="col-md-2">
                      <Form.Control type="text" name="clienteQueReclama" id="clienteQueReclama" 
                        defaultValue={selectedClaim.clienteQueReclama} onBlur={searchClientId} />
                    </div>
                    <div className="col-md-4">
                      <Form.Control type="text" name="apellido" id="apellido" 
                        defaultValue={selectedClaim.apellido} disabled />
                    </div>
                    <div className="col-md-4">
                      <Form.Control type="text" name="nombre" id="nombre" 
                        defaultValue={selectedClaim.nombre} disabled />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Celular:</Form.Label>
                    <div className="col-md-2">
                      <Form.Control type="text" name="nroCelular" id="nroCelular" 
                        defaultValue={selectedClaim.nroCelular} disabled />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">e-mail:</Form.Label>
                    <div className="col-md-6">
                      <Form.Control type="text" name="email" id="email" 
                        defaultValue={selectedClaim.email} disabled />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Propiedad:</Form.Label>
                    <div className="col-md-2">
                      <Form.Control type="text" name="propiedad" id="propiedad" 
                        defaultValue={selectedClaim.propiedad} disabled />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Dirección:</Form.Label>
                    <div className="col-md-6">
                      <Form.Control type="text" name="direccion" id="direccion" 
                        defaultValue={selectedClaim.direccion} disabled />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Descripción:</Form.Label>
                    <div className="col-md-10">
                      <textarea className="form-control" type="text" rows="3" name="descripcion" id="descripcion" 
                        defaultValue={selectedClaim.descripcion} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Fecha:</Form.Label>
                    <div className="col-md-2">
                      <Form.Control type="date" name="fechaDeApertura" id="fechaDeApertura" 
                        defaultValue={selectedClaim.fechaDeApertura || fechaDeApertura} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Celular Contacto:</Form.Label>
                    <div className="col-md-2">
                      <Form.Control type="text" name="telefonoDeContacto" id="telefonoDeContacto"
                        defaultValue={selectedClaim.telefonoDeContacto} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Prioridad:</Form.Label>
                    <div className="col-md-2">
                      <select className="form-select" name="prioridad" id="prioridad"
                        defaultValue={selectedClaim.prioridad} >
                        <option value="baja">{claimPriority.baja.title}</option>
                        <option value="media">{claimPriority.media.title}</option>
                        <option value="alta">{claimPriority.alta.title}</option>
                      </select>
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