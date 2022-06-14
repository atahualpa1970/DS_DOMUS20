import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoggedContext } from '../context/DataContext';

export default function Navigation() {

    const userRoles = {
        norole: "Sin Rol",
        sysAdmin: "Sys Admin.",
        manager: "Gerente",
        seller: "Agente",
        secretary: "Secretario/a",
        cashier: "Cajero/a",
        chiefAdmin: "Jefe Administr.",
        chiefSeller:"Jefe Comercial.",
        marketing: "Marketing"
    }

    const { loggedUser, setLoggedUser } = useContext(LoggedContext)

    const activeItem = require("../data/activeItems.json")

    const changeRolTo = (newRol) => {
        const newUserRol = {
            id: loggedUser.id,
            role: newRol,
            rolName: userRoles[newRol]
        }
        setLoggedUser(newUserRol)

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
            <Link className="navbar-brand" to="/app/home">
                <img src="../domus20-1.png" alt="" width="100" height="50" />
            </Link>
            <h2 className="navTitle">Inmobiliaria Domus</h2>
            { console.log("LOGUSER: ", loggedUser )}
            <button className="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item dropdown mx-2">
                        <Link className={"btn btn-outline-light dropdown-toggle"+activeItem[loggedUser.role].prop} data-bs-toggle="dropdown" to="/" role="button"
                            aria-expanded="false">Propiedades</Link>
                        <ul className="dropdown-menu">
                            <li><Link className={"dropdown-item"+activeItem[loggedUser.role].newProp} to="/app/newProp">Agregar</Link></li>
                            <li><Link className={"dropdown-item"+activeItem[loggedUser.role].adminProps} to="/app/adminProps">Editar</Link></li>
                            <li><Link className={"dropdown-item"+activeItem[loggedUser.role].listProps} to="/app/listProps">Listado</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item disabled" to="/app/listDates">Reportes</Link></li>
                        </ul>
                    </li>
                    <li className={"nav-item dropdown mx-2"+activeItem[loggedUser.role].caja}>
                        <Link className={"btn btn-outline-light dropdown-toggle"+activeItem[loggedUser.role].caja} data-bs-toggle="dropdown" to="/" role="button"
                            aria-expanded="false">Caja</Link>
                        <ul className="dropdown-menu">
                            <li><Link className={"dropdown-item"+activeItem[loggedUser.role].charges} to="/app/charges">Cobros</Link></li>
                            <li><Link className={"dropdown-item"+activeItem[loggedUser.role].inputsOutputs} to="/app/inputsOutputs">Entradas/Salidas</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className={"dropdown-item"+activeItem[loggedUser.role].cashClosing} to="/app/cashClosing">Cierre de caja</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown mx-2">
                        <Link className={"btn btn-outline-light dropdown-toggle"+activeItem[loggedUser.role].agenda} data-bs-toggle="dropdown" to="/" role="button"
                            aria-expanded="false">Agenda</Link>
                        <ul className="dropdown-menu">
                            <li><Link className={"dropdown-item"+activeItem[loggedUser.role].listDates} to="/app/listDates">Solicitudes</Link></li>
                            <li><Link className={"dropdown-item"+activeItem[loggedUser.role].newDate} to="/app/newDate">Nueva Cita</Link></li>
                            <li><Link className={"dropdown-item"+activeItem[loggedUser.role].calendarDates} to="/app/calendarDates">Calendario</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown mx-2">
                        <Link className={"btn btn-outline-light dropdown-toggle"+activeItem[loggedUser.role].admin} data-bs-toggle="dropdown" to="/" role="button"
                            aria-expanded="false">Administracion</Link>
                        <ul className="dropdown-menu">
                            <li><Link className={"dropdown-item"+activeItem[loggedUser.role].transactions} to="/app/transactions">Transacciones</Link></li>
                            <li><Link className={"dropdown-item"+activeItem[loggedUser.role].reports} to="/app/reports">Reportes</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className={"dropdown-item"+activeItem[loggedUser.role].newClient} to="/app/newClient">Nuevo Cliente</Link></li>
                            <li><Link className={"dropdown-item"+activeItem[loggedUser.role].adminClients} to="/app/adminClients">Admin Clientes</Link></li>
                            <li><Link className={"dropdown-item"+activeItem[loggedUser.role].listClients} to="/app/listClients">Lista Clientes</Link></li>
                            <li><Link className={"dropdown-item"+activeItem[loggedUser.role].debtorClients} to="/app/debtorClients">Lista Deudores</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className={"btn btn-outline-light"+activeItem[loggedUser.role].listUsers} to="/app/listUsers">Usuarios</Link>
                    </li>
                    <li className="nav-item dropdown mx-8">
                        <Link className="btn btn-primary btn-sm dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button"
                            aria-expanded="false">Nombre de Usuario<br />{loggedUser.rolName}</Link>
                        <ul className="dropdown-menu">        
                            <li><Link className="dropdown-item" onClick={() => changeRolTo("sysAdmin")} to="/app/calendarDates">{userRoles.sysAdmin}</Link></li>
                            <li><Link className="dropdown-item" onClick={() => changeRolTo("manager")} to="/app/calendarDates">{userRoles.manager}</Link></li>
                            <li><Link className="dropdown-item" onClick={() => changeRolTo("seller")} to="/app/calendarDates">{userRoles.seller}</Link></li>
                            <li><Link className="dropdown-item" onClick={() => changeRolTo("secretary")} to="/app/listDates">{userRoles.secretary}</Link></li>
                            <li><Link className="dropdown-item" onClick={() => changeRolTo("cashier")} to="/app/charges">{userRoles.cashier}</Link></li>
                            <li><Link className="dropdown-item" onClick={() => changeRolTo("chiefAdmin")} to="/app/calendarDates">{userRoles.chiefAdmin}</Link></li>
                            <li><Link className="dropdown-item" onClick={() => changeRolTo("chiefSeller")} to="/app/calendarDates">{userRoles.chiefSeller}</Link></li>
                            <li><Link className="dropdown-item" onClick={() => changeRolTo("marketing")} to="/app/calendarDates">{userRoles.marketing}</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="/app/home">Salir</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
