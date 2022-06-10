import React, { useState } from 'react'
import Navigation from '../Navigation'
import Calendar from '../Calendar'

export default function CalendarDates() {

    const dates = require("../../data/confirmDates.json")

    const [currentDay, setCurrentDay] = useState(new Date().toISOString().substring(0,10));

    const changeDateFormatUStoES = (dateUS) => {
        return dateUS.substring(8,10) +"-"+ dateUS.substring(5,7) +"-"+ dateUS.substring(0,4)
    }

    return (
        <div>
            <Navigation />
            <div className="row fluid col-xl-12 mx-1 my-1" id="box1">
                <div className="col-xl-9">
                    <Calendar currentDay={currentDay} setCurrentDay={setCurrentDay}/>
                </div>
                <div className="col-xl-3">
                    <h3>Citas del  {changeDateFormatUStoES(currentDay)}</h3>
                    <br />
                    <ul className="list-group col-12">
                            {
                                dates.map((element, index) => (
                                    (element.dateEvent === currentDay) ?
                                    <li className="list-group-item list-group-item-action" key={index} value={index}>
                                        {element.lastName + ", " + element.firstName + " (" + element.cellPhone + ")"}
                                    </li>
                                    : null
                                ))
                            }
                        </ul>
                </div>
            </div>
        </div>
    )

}
