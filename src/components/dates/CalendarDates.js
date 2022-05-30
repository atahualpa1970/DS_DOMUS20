import React from 'react'
import Navigation from '../Navigation'
import Calendar from '../Calendar'

export default function CalendarDates() {


    return (
        <div>
            <Navigation />
            <div className="row fluid col-xl-12 mx-1 my-1" id="box1">
                <div className="col-xl-9">
                    <Calendar />
                </div>
                <div className="col-xl-3">
                    <h3>Detalles</h3>
                    <br />
                    <h6>No existen citas confirmadas para la fecha seleccionada</h6>
                </div>
            </div>
        </div>
    )

}
