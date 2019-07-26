import React, {useState} from 'react';
import {Row, Col, Form, Button, Card} from 'react-bootstrap';
import {connect} from 'react-redux';
import {setVinoListAction} from "../../store/vinos/actions";


const Formulario = props => {

    const dataDefault = {
        id: '',
        nombre: '',
        vina: '',
        cepa: '',
        cosecha: '',
        tipo: '',
        show: true
    };

    const [vinosForm, setText] = useState(dataDefault);
    const [validated, setValidated] = useState(false);

    const onChangeText = ({target}) => {
        const key = target.name;
        const value = target.value;
        setText({
            ...vinosForm, [key]: value
        });
    };

    const onClickIngresaVino = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }else{
            props.setVinoComponent(vinosForm);
        }
        setValidated(true);
    };

    return (
        <div>
            <div>
            <Card style={{ width: '70rem'  }}>
            <Card.Header as="h5">Formulario Ingreso de Vinos</Card.Header>
                <Row>
                    <Col md={{span: 6, offset: 3}}> 
                        <Form noValidate validated={validated} onSubmit={onClickIngresaVino}>
                            <Form.Group as={Row}>
                                <Form.Label column sm={4}>Nombre Vino</Form.Label>
                                <Col sm={6}> 
                                    <Form.Control type="text"
                                    className="mb-3"
                                                  value={vinosForm.nombre}
                                                  onChange={onChangeText}
                                                  size="sm"
                                                  name="nombre"
                                                  placeholder="Ingresar Nombre Vino" required />
                                                  <Form.Control.Feedback type="invalid">
                                                              Debe ingresar el nombre del vino.
                                                  </Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={4}>Nombre Viña</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text"
                                                  value={vinosForm.vina}
                                                  onChange={onChangeText}
                                                  size="sm"
                                                  name="vina"
                                                  placeholder="Ingresar Nombre Viña"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={4}>Cepa</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text"
                                                  value={vinosForm.cepa}
                                                  onChange={onChangeText}
                                                  size="sm"
                                                  name="cepa"
                                                  placeholder="Ingresar Tipo Cepa"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={4}>Año Cosecha</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text"
                                                  value={vinosForm.cosecha}
                                                  onChange={onChangeText}
                                                  size="sm"
                                                  type={'number'}
                                                  min={'1'}
                                                  max={'2019'}
                                                  maxLength={4}
                                                  name="cosecha"
                                                  placeholder="Ingresar Año Cosecha" required />
                                    <Form.Control.Feedback type="invalid">
                                                Debe ingresar un año valido.
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={4}>Tipo</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text"
                                                  value={vinosForm.tipo}
                                                  onChange={onChangeText}
                                                  size="sm"
                                                  name="tipo"
                                                  placeholder="Ingresar Tipo de Vino"/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Col sm={{span: 10, offset: 4}}>
                                    <Button type="submit" className='btn btn-primary'>Agregar
                                        Vino</Button>
                                </Col>
                            </Form.Group>  
                        </Form>
                    </Col>
                </Row>
                </Card>
            </div>
                            <br></br>
                            
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    setVinoComponent: payload => dispatch(setVinoListAction(payload))
});

export default connect(null, mapDispatchToProps)(Formulario);