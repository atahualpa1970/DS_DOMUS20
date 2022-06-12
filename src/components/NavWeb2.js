import React from 'react'
import { Link } from 'react-router-dom'

export default function NavWeb() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="../domus20-1.png" alt="" width="100" height="50" />
                        
                    </Link>
                    <h3>Inmobiliaria Domus</h3>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li><Link className="btn btn-outline-dark" to="/">Home</Link></li>
                            <li><Link className="btn btn-outline-dark" to="/">Comprar</Link></li>
                            <li><Link className="btn btn-outline-dark" to="/">Alquilar</Link></li>
                            <li><Link className="btn btn-outline-dark" to="/">Contacto</Link></li>
                            <li><Link className="btn btn-outline-dark" to="/">Log In</Link></li>
                        </ul>
                    </div>
                </div >
            </nav>
        )
}
