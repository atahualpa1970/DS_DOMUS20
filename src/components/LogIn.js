import React, { Component } from 'react'

export default class WebHome extends Component {
    render() {
        return (
            <div>
                <div className="container my-3 col-md-3" id="box1">
                    <h1 className="d-flex justify-content-center">DOMUS 2.0</h1>
                    <br /><br />
                    <h4 className="d-flex justify-content-center">Acceso al sistema</h4>
                    <form className="row my-2 g-3 d-flex justify-content-center" action="/app/home">
                        <div className="col-md-12">
                            <label className="form-label">User</label>
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
}