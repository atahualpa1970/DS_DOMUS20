import React, { Component } from 'react'
import Navigation from './Navigation'
import { Form } from 'react-bootstrap';

export default class ListDates2 extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            dates: require("../data/date.json"),
            props: require("../data/prop.json"),
            client: {
                "lastName": "",
                "firstname": "",
                "cellPhone": "",
                "email": "",
                "codeProp": "",
                "addressProp": "",
                "comments": ""
            },
            prop: { 
                "idProp": 0,
                "code": "",
                "rental": true,
                "sale": true,
                "address": "",
                "type": "",
                "room": 0,
                "bathroom": 0,
                "garage": "",
                "image": []
            }
        }
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
        this.setState({ client: this.state.dates[e.target.value] })
        this.state.props.map((element) => (
            (this.state.dates[e.target.value].codeProp === element.code) ? this.setState({ prop: element }) : null
        ))
    }


    render() {
        return (
            <div>
                <Navigation />
                <div className="row fluid mx-1 my-1">
                    <div className="col-xl-4 col-12" id="box1">
                        <h1>Confirmar Cita</h1>
                        <form className="row my-2 g-3">
                            <label className="form-label">Solicitud recibida</label>
                            <div className="col-md-6">
                                <Form.Control type="text" name="fullName"
                                    value={this.state.client.firstname + " " + this.state.client.lastName} disabled />
                            </div>
                            <div className="col-md-6">
                                <Form.Control type="date" name="date" defaultValue="" />
                            </div>
                            <div className="col-md-6">
                                <Form.Control type="text" name="cell" value={this.state.client.cellPhone} disabled />
                            </div>
                            <div className="col-md-6">
                                <Form.Control type="time" name="time" defaultValue="" />
                            </div>
                            <div className="col-md-6">
                                <Form.Control type="text" name="email" value={this.state.client.email} disabled />
                            </div>
                            <div className="col-md-6">
                                <select name="seller" className="form-control">
                                    <option defaultValue="Agente...">Agente...</option>
                                    <option>Vendedor 1</option>
                                    <option>Vendedor 2</option>
                                    <option>Vendedor 3</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <div className="input-group">
                                    <div className="input-group-text">Observaciones</div>
                                    <Form.Control type="text" name="comments" value={this.state.client.comments} disabled />
                                </div>
                            </div>
                            <hr />
                            <div className="col-12">
                                <label className="form-label">Propiedad a visitar</label>
                                <div className="input-group">
                                    <div className="input-group-text">Tipo: </div>
                                    <Form.Control type="text" name="type" value={this.state.prop.type} disabled />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-text">Direccion: </div>
                                    <Form.Control type="text" name="address" value={this.state.prop.address} disabled />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-text">Hab: </div>
                                    <Form.Control type="text" name="room" value={this.state.prop.room} disabled />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-text">Baños: </div>
                                    <Form.Control type="text" name="bathroom" value={this.state.prop.bathroom} disabled />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-text">Garage: </div>
                                    <Form.Control type="text" name="garage" value={this.state.prop.garage} disabled />
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary">Confirmar</button>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <button type="submit" className="btn btn-danger">Cancelar</button>
                            </div>
                            <hr />
                        </form>

                        <div className="my-2 g-3">
                            <h1>Solicitudes de citas</h1>
                            <ul className="list-group col-12">
                                {
                                    this.state.dates.map((element, index) => (
                                        <li className="list-group-item list-group-item-action" key={index} value={index}
                                            onClick={this.selectClient}>
                                            {element.lastName + ", " + element.firstname + " (" + element.cellPhone + ")"}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-8 col-12" id="box1">
                        <img className="col-xl-12" src="../images/Calendario.png" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
