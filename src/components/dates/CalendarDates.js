import React, { useState, useContext } from 'react'
import Navigation from '../Navigation'
import Calendar from '../Calendar'
import { Form } from 'react-bootstrap'
import { LoggedContext } from '../../context/DataContext';


export default function CalendarDates() {

    const { loggedUser } = useContext(LoggedContext)

    const dateSort = (items) => {
        items.sort(function (a, b) {
            if (a.timeEvent > b.timeEvent) { return 1 }
            if (a.timeEvent < b.timeEvent) { return -1 }
            return 0;
        });
        return items
    }

    const activeAction = require("../../data/actionPermissions.json")
    const users = require("../../data/users.json")
    const realEstates = require("../../data/properties.json")
    console.log("REALSTATES: ", realEstates)
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
                    <div className="accordion" id="acordionDates">
                        {
                            dates.map((element, index) => (
                                (element.dateEvent === currentDay) ?

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id={"H" + index}>
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target={"#C" + index}
                                                aria-expanded="false" aria-controls={"C" + index}>
                                                    {"(" + element.timeEvent + ") "} 
                                                    <span className="badge mx-2" style={{ 
                                                        "backgroundColor": users.find((x) => x.idUser == element.idAgent).color, 
                                                        "color": "black" }}>
                                                        {users.find((x) => x.idUser == element.idAgent).firstName}
                                                    </span>
                                                    {element.lastName + ", " + element.firstName}
                                            </button>
                                        </h2>
                                        <div id={"C" + index} className="accordion-collapse collapse"
                                            aria-labelledby={"H" + index} data-bs-parent="#acordionDates">
                                            <div className="accordion-body">
                                                <form className="row my-2 g-1">
                                                    <div className="input-group">
                                                        <div className="input-group-text col-md-3">Agente: </div>
                                                        <Form.Control type="text" name="address"
                                                            value={users.find((x) => x.idUser == element.idAgent).firstName} />
                                                        <Form.Control type="time" name="time" value={element.timeEvent} />
                                                    </div>
                                                    <div className="input-group col-md-12">
                                                        <div className="input-group-text col-md-3">Cliente:</div>
                                                        <Form.Control type="text" name="fullName"
                                                            value={element.firstName + " " + element.lastName} />
                                                    </div>
                                                    <div className="input-group col-md-12">
                                                        <div className="input-group-text col-md-3">Celular:</div>
                                                        <Form.Control type="text" name="cell" value={element.cellPhone} />
                                                    </div>
                                                    <div className="input-group col-md-12">
                                                        <div className="input-group-text col-md-3">email:</div>
                                                        <Form.Control type="text" name="email" value={element.email} />
                                                    </div>
                                                    <div className={"col-md-5"+activeAction[loggedUser.role].changeStatusDate}>
                                                        <select name="seller" className="form-select">
                                                            <option defaultValue="">Confirmado</option>
                                                            <option value="cancel">Cancelado</option>
                                                            <option value="finish">Terminado</option>
                                                        </select>
                                                    </div>
                                                    <div className={"col-7 d-flex justify-content-center col-md-5"+activeAction[loggedUser.role].changeStatusDate}>
                                                        <button type="submit" className="btn btn-secondary">Cambiar estado</button>
                                                    </div>
                                                    <hr className="my-3" />
                                                    <div className="col-12">
                                                        <div className="input-group">
                                                            <div className="input-group-text">{element.codeProp}</div>
                                                            <Form.Control type="text" name="address" value="Dirección de la propiedad a visitar" />
                                                        </div>
                                                    </div>
                                                    <div className={"col-6 d-flex justify-content-center"+activeAction[loggedUser.role].changeDate}>
                                                        <button type="submit" className="btn btn-danger">Cancelar</button>
                                                    </div>
                                                    <div className={"col-6 d-flex justify-content-center"+activeAction[loggedUser.role].changeDate}>
                                                        <button type="submit" className="btn btn-primary">Confirmar</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    : null
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )

}
