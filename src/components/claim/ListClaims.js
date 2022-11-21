import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation'
import { Form } from 'react-bootstrap'
import SearchClientResult from './searchClientResult'

const claims = require("../../data/reclamos.json")
const props = require("../../data/propiedades.json")
const clients = require("../../data/clientes.json")
const clienteProp = require("../../data/cliente_propiedad.json")

export default function ListClaims() {

  claims.map((element) => {
    element.direccion = props.find(val => val.id == element.propiedad.id).direccion
    element.apellido = clients.find(val => val.id == element.clienteQueReclama.id).apellido
    element.nombre = clients.find(val => val.id == element.clienteQueReclama.id).nombre
    element.nroCelular = clients.find(val => val.id == element.clienteQueReclama.id).nroCelular
    element.email = clients.find(val => val.id == element.clienteQueReclama.id).email
  })

  const clearClaim = {
    propiedad: { id: null },
    clienteQueReclama: { id: null },
    secretariaCreadora: { id: null },
    direccion: "",
    prioridad: "",
    descripcion: "",
    fechaDeApertura: null,
    nombreDeContacto: "",
    telefonoDeContacto: ""
  }

  const [selectedClaim, setSelectedClaim] = useState(clearClaim);
  const [selectedPriority, setSelectedPriority] = useState();
  const [clientProps, setClientProps] = useState([]);
  const [selectedProp, setSelectedProp] = useState();
  const [searchClientResult, setSearchClientResult] = useState([]);
  const [selectedSearchClient, setSelectedSearchClient] = useState(null);

  useEffect(() => {
    if (selectedSearchClient) {
      searchClientId(selectedSearchClient)
      setSearchClientResult([])
      document.getElementById("searchClientNameForm").reset();
    }
  }, [selectedSearchClient])

  const claimPriority = {
    baja: { title: "Baja", color: "yellow" },
    media: { title: "Media", color: "orange" },
    alta: { title: "Alta", color: "red" }
  }

  const selectPriority = (e) => {
    setSelectedPriority(e.target.value)
  }

  const searchClientName = () => {
    const lastNameSearch = document.getElementById("lastNameSearch").value
    const firstNameSearch = document.getElementById("firstNameSearch").value
    const result = clients.filter(val => val.apellido === lastNameSearch) // TODO reemplazar por endpoint
    console.log("RESULT: ", result)
    setSearchClientResult(result)
  }


  const unselectUser = () => {
    setSelectedClaim(clearClaim)
    setClientProps([])
    setSelectedProp(null)
    setSelectedSearchClient(null)
    setSearchClientResult([])
    document.getElementById("searchClientNameForm").reset();
    document.getElementById("claimForm").reset();
    document.getElementById("clienteQueReclama").focus()
  }

  const editClaim = (e) => {
    e.target.value = parseInt(e.target.name)
    setSelectedClaim(claims[e.target.id])
    searchClientId(e)
  }

  const searchIdProp = (e) => {
    document.getElementById("propiedad").value = e.target.value
  }

  const searchClientId = (e) => {
    let codCli = e
    if (e.target) codCli = e.target.value
    const client = clients.find(val => val.id == codCli)
    if (client && client.tipoDeCliente === "Particular") {
      document.getElementById("clienteQueReclama").value = client.id
      document.getElementById("apellido").value = client.apellido
      document.getElementById("nombre").value = client.nombre
      document.getElementById("nroCelular").value = client.nroCelular
      document.getElementById("email").value = client.email
      const relPropCli = clienteProp.filter(val => val.idCliente === client.id)
      relPropCli.forEach(element =>
        element.direccion = props.find(val => val.id === element.idPropiedad).direccion)
      if (relPropCli.length > 0) {
        setClientProps(relPropCli)
        setSelectedProp(relPropCli[0].idPropiedad)
        document.getElementById("propiedad").value = relPropCli[0].idPropiedad
      } else {
        setClientProps([])
        setSelectedProp(null)
        setSelectedClaim(clearClaim)
      }
    }
    else unselectUser()
  }

  const handleSubmit = (e) => {
    let max = 0
    claims.map((element) => ((element.propiedad.id > max) ? max = element.propiedad.id : null))
    const inputForm = e.target.form.elements
    console.log("EVENT: ", inputForm)
    const newClaim = {
      propiedad: { id: max + 1 },
      clienteQueReclama: { id: inputForm.clienteQueReclama.value },
      secretariaCreadora: { id: inputForm.secretariaCreadora.value },
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
  const fechaDeApertura = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()

  return (
    <div>
      <Navigation />
      <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
        <h3 className="col-md-3">Gestión de Reclamos</h3>
        <div className="col-md-2">
          <select name="selectPriority" className="form-select" onChange={selectPriority}>
            <option value="">Prioridad... (todas)</option>
            <option value="baja">{claimPriority.baja.title}</option>
            <option value="media">{claimPriority.media.title}</option>
            <option value="alta">{claimPriority.alta.title}</option>
          </select>
        </div>
        <div className="col-md-1"></div>
        <form className="row fluid col-md-6" id="searchClientNameForm">
          <div className="col-md-4">
            <Form.Control type="text" id="lastNameSearch" placeholder="Apellido..." defaultValue="" />
          </div>
          <div className="col-md-4">
            <Form.Control type="text" id="firstNameSearch" placeholder="Nombre..." defaultValue="" />
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-secondary"
              onClick={searchClientName}>Buscar</button>
          </div>
          <div>
            <SearchClientResult
              clients={searchClientResult}
              setSelectedSearchClient={setSelectedSearchClient} />
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
                      (element.prioridad === selectedPriority || !selectedPriority)
                        ?
                        <li className="list-group-item list-group-item-action" key={index}
                          value={element.clienteQueReclama.id}
                          style={{ display: "inline-block" }} >
                          {element.apellido + ", " + element.nombre}<br />
                          {props.find(val => val.id == element.propiedad.id).direccion}
                          <p>
                            <span key={claimPriority[element.prioridad].title} className="badge rounded-pill my-1"
                              style={{ "backgroundColor": claimPriority[element.prioridad].color, "color": "black" }}
                              data-bs-toggle="tooltip" data-bs-html="true"
                              title={claimPriority[element.prioridad].title}>
                              {claimPriority[element.prioridad].title}
                            </span>
                            {" " + element.descripcion}
                            <img src="../icons/pencil.svg" onClick={editClaim}
                              id={index}
                              name={element.clienteQueReclama.id}
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
                <h5>{(selectedClaim.propiedad.id) ?
                  "Editar Reclamo" : "Registrar Nuevo Reclamo"}
                </h5>
              </div>
              <div className="card-body">
                <form id="claimForm" className="row g-1 col-md-12 justify-content-center">
                  <div className="row col-md-12">
                    <Form.Label className="col-md-2 my-2 alignR">Cod.Cliente:</Form.Label>
                    <div className="col-md-2">
                      <Form.Control type="text" name="clienteQueReclama" id="clienteQueReclama"
                        defaultValue={selectedClaim.clienteQueReclama.id} onBlur={searchClientId} />
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
                        defaultValue={selectedClaim.propiedad.id} disabled />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Dirección:</Form.Label>
                    <div className="col-md-6">
                      <select className="form-select" name="direccion" id="direccion"
                        onChange={searchIdProp} value={selectedProp}>
                        {clientProps.map((element) =>
                          <option value={element.idPropiedad} >{element.direccion}</option>
                        )}
                      </select>
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Descripción:</Form.Label>
                    <div className="col-md-10">
                      <textarea className="form-control" type="text" rows="3" name="descripcion" id="descripcion"
                        defaultValue={selectedClaim.descripcion} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Fecha:</Form.Label>
                    <div className="col-md-3">
                      <Form.Control type="date" name="fechaDeApertura" id="fechaDeApertura"
                        value={selectedClaim.fechaDeApertura || fechaDeApertura} />
                    </div>
                    <Form.Label className="col-md-4 my-2 alignR">Prioridad:</Form.Label>
                    <div className="col-md-3">
                      <select className="form-select" name="prioridad" id="prioridad"
                        value={selectedClaim.prioridad} >
                        <option value="baja">{claimPriority.baja.title}</option>
                        <option value="media">{claimPriority.media.title}</option>
                        <option value="alta">{claimPriority.alta.title}</option>
                      </select>
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Nombre Contacto:</Form.Label>
                    <div className="col-md-4">
                      <Form.Control type="text" name="nombreDeContacto" id="nombreDeContacto"
                        defaultValue={selectedClaim.nombreDeContacto} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Celular Contacto:</Form.Label>
                    <div className="col-md-4">
                      <Form.Control type="text" name="telefonoDeContacto" id="telefonoDeContacto"
                        defaultValue={selectedClaim.telefonoDeContacto} />
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