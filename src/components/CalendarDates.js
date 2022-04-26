import React, { Component } from 'react'
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
        this.setState({ props: props})
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
        return (
            <div>
                <Navigation />
                <h1>Agenda de citas</h1>
                <img className="col-xl-12" src="../images/Calendario.png" alt="" />
            </div>
        )
    }
}
