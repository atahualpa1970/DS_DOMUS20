import React from 'react'

export default function WebHome() {

    return (
        <div id="grad" style={{ height: "1080px" }}>
            <div className="container my-3 col-md-3" id="box1">
                <img src="../domus20-1.png" alt="" width="360" height="180" />
                <br /><br /><br /><br />
                <h1 className="d-flex justify-content-center">Inmobiliaria Domus</h1>
                
                <h4 className="d-flex justify-content-center">Acceso al sistema</h4>
                <form className="row my-2 g-3 d-flex justify-content-center" action="/app/home">
                    <div className="col-md-12">
                        <label className="form-label">Usuario</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="lastName" />
                    </div>
                    <div className="col-md-12 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}