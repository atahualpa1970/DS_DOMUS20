import React, { useContext, useEffect } from 'react'
import { LoggedContext } from '../context/DataContext'
import { useNavigate } from "react-router-dom";


export default function WebHome() {

  const { loggedUser, setLoggedUser } = useContext(LoggedContext)
  const navigate = useNavigate();

  useEffect(() => {

    console.log("LOGIN USER: ", loggedUser)
    if (loggedUser) navigateTo()

  }, [loggedUser])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("e: ", e)
    setLoggedUser({
      id: 1,
      role: "sysAdmin",
      rolName: "Sys Admin."
    })
  }

  const navigateTo = () => {
    console.log("NAVIGATE: ", loggedUser.role)
    switch (loggedUser.role) {

      case 'secretary':
        navigate("/app/listDates", { replace: true })
        break;

      case 'cashier':
        navigate("/app/charges", { replace: true })
        break;

      case 'sysAdmin':
      case 'manager':
      case 'seller':
      case 'chiefAdmin':
      case 'chiefSeller':
      case 'marketing':
        navigate("/app/calendarDates", { replace: true })
        break;
      default: 
    }
  }

  return (
    <div id="grad" style={{ height: "1080px" }}>
      <div className="container my-3 col-md-3" id="box1">
        <img src="../domus20-1.png" alt="" width="360" height="180" />
        <br /><br /><br /><br />
        <h1 className="d-flex justify-content-center">Inmobiliaria Domus</h1>

        <h4 className="d-flex justify-content-center">Acceso al sistema</h4>
        <form className="row my-2 g-3 d-flex justify-content-center"
          onSubmit={handleSubmit} >
          <div className="col-md-12">
            <label className="form-label">Usuario:</label>
            <input type="text" className="form-control" id="nombre" />
          </div>
          <div className="col-md-12">
            <label className="form-label">Contraseña:</label>
            <input type="password" className="form-control" id="apellido" />
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}