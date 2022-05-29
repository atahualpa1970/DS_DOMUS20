import React, { useState } from 'react'
import Navigation from './Navigation'
import NewClientPart from './NewClientPart'
import NewClientCorp from './NewClientCorp'

export default function NewClient() {

    const [selectedClientType, setSelectedClientType] = useState("particular");

    const selectClientType = (e) => {
        setSelectedClientType(e.target.value)
    }

    return (
        <div>
            <Navigation />
            <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
                <h3>Nuevo Cliente</h3>
                <div className="col-md-3">
                    <select name="clientType" className="form-select col-md-3" onChange={selectClientType}>
                        <option value="particular">Cliente Particular</option>
                        <option value="corporativo">Cliente Corporativo</option>
                    </select>
                </div>

                {(selectedClientType === "particular") ? <NewClientPart /> : <NewClientCorp />}
                
            </div>
        </div>
    )

}
