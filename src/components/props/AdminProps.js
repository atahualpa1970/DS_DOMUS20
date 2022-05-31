import React from 'react'
import Navigation from '../Navigation'
import FormProp from '../props/FormProp'

export default function AdminProp() {

    return (
        <div>
            <Navigation />
            <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
                <h3 className="col-md-3">Editar Propiedad</h3>
                <form className="row col-md-9 my-0 g-0">
                    <div className="col-md-3">
                        <select name="contract" className="form-select">
                            <option value="rental">Alquiler</option>
                            <option value="sale">Venta</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <select name="propType" className="form-select" >
                            <option value="dpto">Departamento</option>
                            <option value="casa">Casa</option>
                            <option value="chalet">Chalet</option>
                            <option value="local">Local Comercial</option>
                            <option value="casa-local">Casa con Local</option>
                            <option value="cabaña">Cabaña</option>
                            <option value="cochera">Cochera</option>
                            <option value="terreno">Terreno</option>
                            <option value="campo">Campo</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <select name="city" className="form-select">
                            <option value="Resistencia">Resistencia</option>
                            <option value="Barranqueras">Barranqueras</option>
                            <option value="Fontana">Fontana</option>
                            <option value="Corrientes">Corrientes</option>
                            <option value="Formosa">Formosa</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-secondary">Buscar</button>
                    </div>
                </form>
                <hr className="my-4" />
                <FormProp />
            </div>
        </div>
    )

}