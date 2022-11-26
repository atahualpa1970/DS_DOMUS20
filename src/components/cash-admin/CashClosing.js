import React from 'react'
import Navigation from '../Navigation'
import { Form } from 'react-bootstrap'


export default function CashClosing() {
  /*
      const [selectedClientType, setSelectedClientType] = useState();
  
      const selectClientType = (e) => {
          setSelectedClientType(e.target.value)
      }
  */
  return (
    <div>
      <Navigation />
      <div className="row fluid col-md-12 mx-0 my-0 py-3" id="box1">
        <h3 className="col-md-3">Cierre de Caja</h3>
        <div className="col-md-3">
          <select name="tipoDeCliente" className="form-select col-md-3">
            <option value="">Tipo de movimiento...</option>
            <option value="input">Entrada</option>
            <option value="output">Salida</option>
            <option value="payment">Cobros</option>
          </select>
        </div>

        <hr className="my-4" />

        <div>
          <form className="row my-2 g-3">
            <div className="col-md-6">
              <div class="card">
                <div class="card-header">
                  <table width="100%">
                    <tr>
                      <td>Fecha</td>
                      <td>Concepto</td>
                      <td>Movimiento</td>
                      <td>Monto</td>
                    </tr>
                  </table>
                </div>
                <div class="card-body">
                  <table width="100%">
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="row col-md-6">
              <Form.Label className="col-md-3 my-2 alignR">Total ingresos:</Form.Label>
              <div className="col-md-8">
                <Form.Control type="text" name="inputs" defaultValue="" />
              </div>
              <Form.Label className="col-md-3 my-2 alignR">Total egresos:</Form.Label>
              <div className="col-md-8">
                <Form.Control type="text" name="outputs" defaultValue="" />
              </div>
              <Form.Label className="col-md-3 my-2 alignR">Total general:</Form.Label>
              <div className="col-md-8">
                <Form.Control type="text" name="total" defaultValue="" />
              </div>
              <div className="col-md-12 alignC">
                <button type="submit" className="btn btn-danger mx-3">Cancelar</button>
                <button type="submit" className="btn btn-primary mx-3">Confirmar</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )

}