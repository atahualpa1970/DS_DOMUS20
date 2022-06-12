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
                </div >
            </nav>
        )
}
