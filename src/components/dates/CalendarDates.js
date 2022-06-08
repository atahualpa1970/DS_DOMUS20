import React from 'react'
import Navigation from '../Navigation'
import Calendar from '../Calendar'

export default function CalendarDates() {

    const dates = require("../../data/confirmDates.json")

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
                    <ul className="list-group col-12">
                            {
                                dates.map((element, index) => (
                                    <li className="list-group-item list-group-item-action" key={index} value={index}>
                                        {element.lastName + ", " + element.firstName + " (" + element.cellPhone + ")"}
                                    </li>
                                ))
                            }
                        </ul>
                </div>
            </div>
        </div>
    )

}
