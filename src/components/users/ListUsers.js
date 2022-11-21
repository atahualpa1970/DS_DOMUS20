import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation'
import { Form } from 'react-bootstrap'

const users = require("../../data/users.json")

export default function ListUsers() {

  useEffect(() => {
    users.map((element) => (element.typeString = ""))
  }, [])

  const noUser = {
    idUser: "",
    apellido: "",
    nombre: "",
    dni: "",
    secretary: undefined,
    cashier: undefined,
    chiefAdmin: undefined,
    chiefSeller: undefined,
    sysAdmin: undefined,
    seller: undefined,
    marketing: undefined,
    manager: undefined,
    nroCelular: "",
    cellPhone2: "",
    password: "",
    email: ""
  }

  const clearUser = {
    idUser: "",
    apellido: "",
    nombre: "",
    dni: "",
    secretary: false,
    cashier: false,
    chiefAdmin: false,
    chiefSeller: false,
    sysAdmin: false,
    seller: false,
    marketing: false,
    manager: false,
    nroCelular: "",
    cellPhone2: "",
    password: "",
    email: ""
  }

  const [selectedUser, setSelectedUser] = useState(noUser);
  const [selectedTypes, setSelectedTypes] = useState();

  const userType = {
    secretary: "Secretario/a",
    cashier: "Cajero/a",
    chiefAdmin: "Jefe Administración",
    chiefSeller: "Jefe Comercialización",
    sysAdmin: "Administrador de Sistemas",
    seller: "Agente de Ventas",
    marketing: "Marketing",
    manager: "Gerente General"
  }

  const selectTypes = (e) => {
    setSelectedTypes(e.target.value)
  }

  const selectUser = (e) => {
    if (e.target.value >= 0) setSelectedUser(users[e.target.value])
  }

  const unselectUser = () => {
    setSelectedUser(clearUser)
  }

  const editUser = (e) => {
    setSelectedUser(users[parseInt(e.target.name)])
  }

  const deleteUser = (e) => {
    setSelectedUser(users[parseInt(e.target.name)])
  }

  return (
    <div>
      <Navigation />
      <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
        <h3 className="col-md-3">Gestión de Usuarios</h3>
        <div className="col-md-2">
          <select name="selectUserType" className="form-select" onChange={selectTypes}>
            <option value="">Todos los roles...</option>
            <option value="sysAdmin">{userType.sysAdmin}</option>
            <option value="manager">{userType.manager}</option>
            <option value="seller">{userType.seller}</option>
            <option value="secretary">{userType.secretary}</option>
            <option value="cashier">{userType.cashier}</option>
            <option value="chiefAdmin">{userType.chiefAdmin}</option>
            <option value="chiefSeller">{userType.chiefSeller}</option>
            <option value="marketing">{userType.marketing}</option>
          </select>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <Form.Control type="text" name="textSearch" placeholder="Realizar búsqueda..." defaultValue="" />
        </div>
        <div className="col-md-2">
          <select name="selectFieldSearch" className="form-select col-md-3">
            <option value="dni">DNI</option>
            <option value="nombre">Nombre</option>
            <option value="apellido">apellido</option>
            <option value="nroCelular">Celular</option>
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
                <h5 style={{ display: "inline-block" }}>Usuarios registrados</h5>
                <img src="../icons/plus-circle.svg" style={{ float: "right" }} alt=""
                  onClick={unselectUser} width="32" height="32" />
              </div>
              <div className="card-body">
                <ul className="list-group col-12">
                  {
                    users.map((element, index) => (
                      (element[selectedTypes] || !selectedTypes)
                        ?
                        <li className="list-group-item list-group-item-action" key={index} value={index}
                          style={{ display: "inline-block" }} onClick={selectUser}>
                          {
                            Object.keys(userType).forEach(type =>
                              (element[type]) ? element.typeString = "(" + userType[type] + ")" : null

                            )
                          }
                          {element.apellido + ", " + element.nombre + element.typeString}
                          <img src="../icons/trash.svg" onClick={deleteUser} name={index}
                            style={{ float: "right", marginLeft: "10px" }} width="25" height="25" alt="" />
                          <img src="../icons/pencil.svg" onClick={editUser} name={index}
                            style={{ float: "right" }} width="20" height="20" alt="" />
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
                <h5>{(selectedUser.idUser) ?
                  "Editar Usuario" : "Registrar Nuevo Usuario"}
                </h5>
              </div>
              <div className="card-body">
                <form className="row g-1 col-md-12 justify-content-center">
                  <div className="row col-md-10">
                    <Form.Label className="col-md-2 my-2 alignR">DNI:</Form.Label>
                    <div className="col-md-9">
                      <Form.Control type="text" name="dni" defaultValue={selectedUser.dni} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Apellido:</Form.Label>
                    <div className="col-md-9">
                      <Form.Control type="text" name="apellido" defaultValue={selectedUser.apellido} />
                    </div>
                    <Form.Label className="col-md-2 my-3 alignR">Nombre:</Form.Label>
                    <div className="col-md-9">
                      <Form.Control type="text" name="nombre" defaultValue={selectedUser.nombre} />
                    </div>

                    <Form.Label className="col-md-2 my-2 alignR">SysAdmin:</Form.Label>
                    <div className="col-md-1  my-2">
                      <Form.Check name="sysAdmin" defaultChecked={selectedUser.sysAdmin} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Gerente:</Form.Label>
                    <div className="col-md-1  my-2">
                      <Form.Check name="manager" defaultChecked={selectedUser.manager} />
                    </div>
                    <Form.Label className="col-md-4 my-2 alignR">Jefe Administrativo:</Form.Label>
                    <div className="col-md-1  my-2">
                      <Form.Check name="chiefAdmin" defaultChecked={selectedUser.chiefAdmin} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Agente:</Form.Label>
                    <div className="col-md-1  my-2">
                      <Form.Check name="seller" defaultChecked={selectedUser.seller} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Secretario:</Form.Label>
                    <div className="col-md-1  my-2">
                      <Form.Check name="secretary" defaultChecked={selectedUser.secretary} />
                    </div>
                    <Form.Label className="col-md-4 my-2 alignR">Jefe Comercialización:</Form.Label>
                    <div className="col-md-1  my-2">
                      <Form.Check name="chiefSeller" defaultChecked={selectedUser.chiefSeller} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Cajero:</Form.Label>
                    <div className="col-md-1  my-2">
                      <Form.Check name="cashier" defaultChecked={selectedUser.cashier} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Marketing:</Form.Label>
                    <div className="col-md-6  my-2">
                      <Form.Check name="marketing" defaultChecked={selectedUser.marketing} />
                    </div>

                    <Form.Label className="col-md-2 my-2 alignR">Celular:</Form.Label>
                    <div className="col-md-9">
                      <Form.Control type="text" name="nroCelular" defaultValue={selectedUser.nroCelular} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Celular alt:</Form.Label>
                    <div className="col-md-9">
                      <Form.Control type="text" name="cellPhone2" defaultValue={selectedUser.cellPhone2} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">e-mail:</Form.Label>
                    <div className="col-md-9">
                      <Form.Control type="text" name="email" defaultValue={selectedUser.email} />
                    </div>
                    <Form.Label className="col-md-2 my-2 alignR">Contraseña:</Form.Label>
                    <div className="col-md-9">
                      <Form.Control type="password" name="password" defaultValue={selectedUser.password} />
                    </div>
                    <div className="col-md-12 mt-3 alignC">
                      <button type="submit" className="btn btn-danger mx-3">Cancelar</button>
                      <button type="submit" className="btn btn-primary mx-3">Confirmar</button>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <img src="../icons/person-circle.svg" width="130px" height="130px" alt="" />
                    <button type="button" className="btn btn-primary mx-3">Subir foto</button>
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