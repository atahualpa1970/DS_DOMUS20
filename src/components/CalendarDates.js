import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'
import Navigation from './Navigation'

export default class CalendarDates extends Component {

    state = {
        dates: [],
        props: [],
        client: {},
        prop: {}
    }

    componentDidMount() {
        const dates = require("../data/date.json")
        this.setState({ dates: dates, client: dates[0] })
        const props = require("../data/prop.json")
        this.setState({ props: props })
        props.map((element) => (
            (dates[0].codeProp === element.code) ? this.setState({ prop: element }) : null
        ))
    }

    selectClient = (e) => {
        console.log(e.target.value)
        this.setState({ client: this.state.dates[e.target.value] })
        this.state.props.map((element) => (
            (this.state.dates[e.target.value].codeProp === element.code) ? this.setState({ prop: element }) : null
        ))
    }


    render() {

        const dayName = ["Hora", "Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
        const dayNumber = [0, 24, 25, 26, 27, 28, 29, 30]
        const monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        const shortMonthName = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Agoo", "Sep", "Oct", "Nov", "Dic"]
        const hours = ["7 AM", "8 AM", "9 AM", "10AM", "11AM", "12PM", "13PM", "14PM", "15PM", "16PM", "17PM", "18PM", "19PM", "20PM", "21PM"]


        return (
            <div>
                <Navigation />
                <div className="row fluid col-xl-12 mx-1 my-1">
                    <div className="col-xl-3"><h1>Agenda de citas</h1></div>
                    <div className="col-xl-9">
                        <p>
                            <button className="btn btn-outline-secondary">Hoy</button>&nbsp;&nbsp;
                            <button className="btn btn-outline-secondary">&lt;</button>
                            &nbsp; Abril 2022 &nbsp;
                            <button className="btn btn-outline-secondary">&gt;</button>
                        </p>
                    </div>

                    <div className="row fluid col-xl-8 mx-1 my-1">
                        <table class="table table-striped" width="100%">
                            <thead>
                                <tr>
                                    {
                                        dayName.map((day, index) => (
                                            (day === "Hora")
                                                ? <td align="center"><p><br />#</p></td>
                                                : <td width="14%" align="center">{day}<br /><h4>{dayNumber[index]}</h4></td>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody className="border">
                                {
                                    hours.map(hour => (
                                        <tr>
                                            {
                                                dayName.map((day, index) => (
                                                    <td>
                                                        {
                                                            (day === "Hora")
                                                                ? <p style={{ fontSize: "70%" }}>{hour}</p>
                                                                : <div className="card w-100" style={{ height: "50px" }} key={hour}>
                                                                    <p></p>
                                                                  </div>
                                                        }
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
