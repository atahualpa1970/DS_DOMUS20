import React from 'react'
import Navigation from '../Navigation'
import FormProp from '../props/FormProp'

export default function NewProp() {

    return (
        <div>
            <Navigation />
            <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
                <h3>Nueva Propiedad</h3>
                <hr className="my-4" />
                <FormProp />
            </div>
        </div>
    )

}
