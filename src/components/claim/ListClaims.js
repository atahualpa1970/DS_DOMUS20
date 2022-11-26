import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation'
import { Form } from 'react-bootstrap'
import SearchClientResult from './searchClientResult'
import Alert from 'react-bootstrap/Alert'

//const claims = require("../../data/reclamos.json")


export default function ListClaims() {

  // const props = require("../../data/propiedades.json")
  // const clients = require("../../data/clientes.json")
  // const clienteProp = require("../../data/cliente_propiedad.json")
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
  const [filterPriority, setFilterPriority] = useState("");
  const [clientProps, setClientProps] = useState([]);
  const [selectedProp, setSelectedProp] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [searchClientResult, setSearchClientResult] = useState([]);
  const [selectedSearchClient, setSelectedSearchClient] = useState(null);
  const [claims, setClaims] = useState([]);
  const [client, setClient] = useState([]);

  const URL_getAllClaims = 'https://dds-2022-tpi-backend-domus-git-gdbudzovsky-dev.apps.sandbox.x8i5.p1.openshiftapps.com/reclamos/'
  const URL_getClientId = 'https://dds-2022-tpi-backend-domus-git-gdbudzovsky-dev.apps.sandbox.x8i5.p1.openshiftapps.com/clientes/'
  const URL_searchClient = 'https://dds-2022-tpi-backend-domus-git-gdbudzovsky-dev.apps.sandbox.x8i5.p1.openshiftapps.com/reclamos/'
  const URL_createClaim = 'https://dds-2022-tpi-backend-domus-git-gdbudzovsky-dev.apps.sandbox.x8i5.p1.openshiftapps.com/reclamos/'
  const URL_updateClaim = 'https://dds-2022-tpi-backend-domus-git-gdbudzovsky-dev.apps.sandbox.x8i5.p1.openshiftapps.com/reclamos/'


  const getClaims = () => {
    fetch(URL_getAllClaims, {
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        setClaims(data)
        console.log("DATA: ", data)
      })
      .catch(error => console.log("ERROR: ", error))
  };

  const getClientProps = (id) => {
    fetch(URL_getClientId + id, {
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        setClient(data)
        console.log("DATA: ", data)
      })
  };

  const addClaim = (newClaim) => {
    fetch(URL_createClaim, {
      method: "POST",
      body: JSON.stringify(newClaim),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(setTimeout(saveOk(), 2000))
      .then(getClaims)
      .catch(err => console.log(err))
  }

  const updateClaim = (newClaim) => {
    fetch(URL_updateClaim + newClaim.id, {
      method: "PUT",
      body: JSON.stringify(newClaim),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(setTimeout(saveOk(), 2000))
      .then(getClaims)
      .catch(err => console.log(err))
  }

  const searchClientName = () => {
    let lastNameSearch = document.getElementById("lastNameSearch").value
    let firstNameSearch = document.getElementById("firstNameSearch").value
    if (lastNameSearch || firstNameSearch) {
      let data = []
      if (lastNameSearch) data.push({ apellido: lastNameSearch })
      if (firstNameSearch) data.push({ nombre: firstNameSearch })
      fetch(URL_searchClient + JSON.stringify(data))
        .then(response => response.json())
        .then(data => {
          setSearchClientResult(data)
        })
    }
  };

  useEffect(() => {
    getClaims()
  }, [])

  useEffect(() => {
    renderClientId()
  }, [client])

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
    setFilterPriority(e.target.value)
  }

  const unselectUser = () => {
    setSelectedClaim(clearClaim)
    setClientProps([])
    setSelectedProp("")
    setSelectedSearchClient("")
    setSearchClientResult([])
    setSelectedPriority("")
    document.getElementById("searchClientNameForm").reset();
    document.getElementById("claimForm").reset();
    document.getElementById("clienteQueReclama").focus()
  }

  const editClaim = (e) => {
    e.target.value = parseInt(e.target.name)
    setSelectedClaim(claims[e.target.id])
    setSelectedPriority(claims[e.target.id].prioridad)
    searchClientId(e)
  }

  const searchIdProp = (e) => {
    document.getElementById("propiedad").value = e.target.value
  }

  const handlePriority = (e) => {
    setSelectedPriority(e.target.value)
  }

  const searchClientId = (e) => {
    let codCli = null
    if (e.target && e.target.value !== "") codCli = e.target.value
    if (!e.target) codCli = e
    if (codCli !== null) getClientProps(codCli)
  }

  const renderClientId = () => {
    if (client.length > 0) {
      if (client[0].tipoDeCliente === "Particular") {
        document.getElementById("apellido").value = client[0].apellido
        document.getElementById("nombre").value = client[0].nombre
        document.getElementById("nroCelular").value = client[0].nroCelular
      }
      if (client[0].tipoDeCliente === "Corporativo") {
        document.getElementById("apellido").value = client[0].nombreEmpresa
        document.getElementById("nombre").value = client[0].cuit
        document.getElementById("nroCelular").value = client[0].nroDeTelefono
      }
      document.getElementById("clienteQueReclama").value = client[0].id
      document.getElementById("email").value = client[0].email

      if (client[0].propiedades.length > 0) {
        setClientProps(client[0].propiedades)
        setSelectedProp(client[0].propiedades[0].id)
        document.getElementById("propiedad").value = client[0].propiedades[0].id
      } else {
        setClientProps([])
        setSelectedProp("")
        setSelectedClaim(clearClaim)
      }
    } else unselectUser()
  }

  const handleSubmit = (e) => {
    const inputForm = e.target.form.elements
    const newClaim = {
      propiedad: { id: parseInt(inputForm.propiedad.value) },
      clienteQueReclama: { id: parseInt(inputForm.clienteQueReclama.value) },
      secretariaCreadora: { id: 1 },
      prioridad: inputForm.prioridad.value,
      descripcion: inputForm.descripcion.value,
      fechaDeApertura: inputForm.fechaDeApertura.value,
      nombreDeContacto: inputForm.nombreDeContacto.value,
      telefonoDeContacto: inputForm.telefonoDeContacto.value
    }
    let idClaim = undefined
    if (selectedClaim.id) idClaim = selectedClaim.id
    if (!idClaim) {
      let max = 0
      claims.map((element) => ((element.id > max) ? max = element.id : null))
      newClaim.id = max + 1
      addClaim(newClaim)
    } else {
      newClaim.id = idClaim
      updateClaim(newClaim)
    }
    console.log("NEWCLAIM: ", newClaim)
    unselectUser()
  }

  function saveOk() {
    return (
      <div>
        <Alert key='primary' variant='primary'>
          Registro guardado
        </Alert>
      </div>
    );
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
                  onClick={unselectUser} width="32" height="32" alt="" />
              </div>
              <div className="card-body">
                <ul className="list-group col-12">
                  {
                    claims.map((element, index) => (
                      (element.prioridad === filterPriority || !filterPriority)
                        ?
                        <li className="list-group-item list-group-item-action" key={index}
                          defaultValue={element.clienteQueReclama.id}
                          style={{ display: "inline-block" }} >
                          {(element.clienteQueReclama.tipoDeCliente === "Particular")
                            ? element.clienteQueReclama.apellido + ", " + element.clienteQueReclama.nombre
                            : element.clienteQueReclama.nombreEmpresa + " (" + element.nombreDeContacto + ")"}
                          <br />{element.propiedad.direccion}
                          <p>
                            <span key={claimPriority[element.prioridad].title} className="badge rounded-pill my-1"
                              style={{ "backgroundColor": claimPriority[element.prioridad].color, "color": "black" }}
                              data-bs-toggle="tooltip" data-bs-html="true"
                              title={claimPriority[element.prioridad].title}>
                              {claimPriority[element.prioridad].title}
                            </span>
                            {" " + element.descripcion}
                            <img src="../icons/pencil.svg" onClick={editClaim}
                              id={index} idclaim={element.id}
                              name={element.clienteQueReclama.id}
                              style={{ float: "right" }} width="20" height="20" alt="" /></p>
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
                <h5>{(selectedClaim.id) ?
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
                        {clientProps.map((element, index) =>
                          <option key={index} value={element.idPropiedad} >{element.direccion}</option>
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
                        defaultValue={selectedClaim.fechaDeApertura || fechaDeApertura} />
                    </div>
                    <Form.Label className="col-md-4 my-2 alignR">Prioridad:</Form.Label>
                    <div className="col-md-3">
                      <select className="form-select" name="prioridad" id="prioridad"
                        onChange={handlePriority} value={selectedPriority} >
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