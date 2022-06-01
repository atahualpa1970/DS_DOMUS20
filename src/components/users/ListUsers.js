import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation'
import { Form } from 'react-bootstrap'

const users = require("../../data/users.json")

export default function ListUsers() {

    useEffect(() => {
        users.map((element) => (element.typeString = ""))
    }, [])

    const [selectedUser, setSelectedUser] = useState({});
    const [selectedUserType, setSelectedUserType] = useState();
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
        setSelectedUser(users[e.target.value])
    }


    return (
        <div>
            <Navigation />
            <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
                <h3 className="col-md-3">Usuarios</h3>
                <div className="col-md-2">
                    <select name="selectUserType" className="form-select col-md-3" onChange={selectTypes}>
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

                <hr className="my-4" />

                <div>
                    <form className="row my-2 g-3 col-md-12 justify-content-center">
                        <div className="col-md-4">
                            <div class="card">
                                <div class="card-header">
                                    Listado
                                </div>
                                <div class="card-body">
                                    <ul className="list-group col-12">
                                        {
                                            users.map((element, index) => (
                                                (element[selectedTypes] || !selectedTypes)
                                                    ? <li className="list-group-item list-group-item-action" key={index} value={index}
                                                        onClick={selectUser}>
                                                        {
                                                            Object.keys(userType).forEach(type =>
                                                                (element[type]) ? element.typeString = "(" + userType[type] + ")" : null

                                                            )
                                                        }
                                                        {element.name + " " + element.typeString}
                                                    </li>
                                                    : null
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row col-md-6">
                            <Form.Label className="col-md-3 my-2 alignR">Usuario:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="lastName" value={selectedUser.name} />
                            </div>
                            <Form.Label className="col-md-12 my-2 alignC">Roles</Form.Label>
                            <Form.Label className="col-md-3 my-2 alignR">SysAdmin:</Form.Label>
                            <div className="col-md-1  my-2">
                                <Form.Check name="sysAdmin" value={selectedUser.sysAdmin} />
                            </div>
                            <Form.Label className="col-md-2 my-2 alignR">Gerente:</Form.Label>
                            <div className="col-md-1  my-2">
                                <Form.Check name="manager" value={selectedUser.manager} />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Jefe Administrativo:</Form.Label>
                            <div className="col-md-1  my-2">
                                <Form.Check name="chiefAdmin" value={selectedUser.chiefAdmin} />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Agente:</Form.Label>
                            <div className="col-md-1  my-2">
                                <Form.Check name="seller" value={selectedUser.seller} />
                            </div>
                            <Form.Label className="col-md-2 my-2 alignR">Secretario:</Form.Label>
                            <div className="col-md-1  my-2">
                                <Form.Check name="secretary" value={selectedUser.secretary} />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Jefe Comercialización:</Form.Label>
                            <div className="col-md-1  my-2">
                                <Form.Check name="chiefSeller" value={selectedUser.chiefSeller} />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Cajero:</Form.Label>
                            <div className="col-md-1  my-2">
                                <Form.Check name="cashier" value={selectedUser.cashier} />
                            </div>
                            <Form.Label className="col-md-2 my-2 alignR">Marketing:</Form.Label>
                            <div className="col-md-6  my-2">
                                <Form.Check name="marketing" value={selectedUser.marketing} />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Fecha Ingreso:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="date" name="birthdate" defaultValue="" />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">Celular:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="cellPhone" value={selectedUser.cellPhone} />
                            </div>
                            <Form.Label className="col-md-3 my-2 alignR">e-mail:</Form.Label>
                            <div className="col-md-8">
                                <Form.Control type="text" name="email" value={selectedUser.email} />
                            </div>
                            <div className="col-md-12 my-2 alignC">
                            <button type="submit" className="btn btn-danger mx-3">Cancelar</button>
                            <button type="submit" className="btn btn-primary mx-3">Confirmar</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )

}