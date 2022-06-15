import React, { useState } from 'react'
import Navigation from '../Navigation'
import Calendar from '../Calendar'

export default function CalendarDates(props) {

    const dateSort = (items) => {
        items.sort(function (a, b) {
            if (a.timeEvent > b.timeEvent) { return 1 }
            if (a.timeEvent < b.timeEvent) { return -1 }
            return 0;
        });
        return items
    }

    const users = require("../../data/users.json")
    const realEstates = require("../../data/properties.json")
    var dates = require("../../data/confirmDates.json")
    dates = dateSort(dates)

    const dateStringUS = (date) => {
        const yyyy = date.getFullYear()
        const mm = (date.getMonth() + 1).toString().padStart(2, 0)
        const dd = date.getDate().toString().padStart(2, 0)
        return yyyy + "-" + mm + "-" + dd
    }

    const [currentDay, setCurrentDay] = useState(dateStringUS(new Date()));

    const changeDateFormatUStoES = (dateUS) => {
        return dateUS.substring(8, 10) + "-" + dateUS.substring(5, 7) + "-" + dateUS.substring(0, 4)
    }


    return (
        <div>
            <Navigation />
            <div className="row fluid col-xl-12 mx-1 my-1" id="box1">
                <div className="col-xl-9">
                    <Calendar currentDay={currentDay} setCurrentDay={setCurrentDay} />
                </div>
                <div className="col-xl-3">
                    <h3>Citas del  {changeDateFormatUStoES(currentDay)}</h3>
                    <br />
                    {
                        dates.map((element, index) => (
                            (element.dateEvent === currentDay) ?
                                <div className="accordion" id="acordionDates">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id={"H" + index}>
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target={"#C" + index}
                                                aria-expanded="false" aria-controls={"C" + index}>
                                                {"(" + element.timeEvent + ") " + element.lastName + ", " + element.firstName}
                                            </button>
                                        </h2>
                                        <div id={"C" + index} className="accordion-collapse collapse"
                                            aria-labelledby={"H" + index} data-bs-parent="#acordionDates">
                                            <div className="accordion-body">
                                                {" * Celular: " + element.cellPhone}<br />
                                                {" * CodProp: " + element.codeProp}<br />
                                                {" * Agente: " + users.find( (x) => x.idUser == element.idAgent).firstName }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null
                        ))
                    }
                </div>
            </div>
        </div>
    )

}
