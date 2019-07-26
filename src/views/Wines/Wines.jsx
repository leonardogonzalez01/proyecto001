import React from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, Button, ButtonGroup, Modal, Row, Col, Form, Card} from 'react-bootstrap';
import { deleteVinosAction, updateVinosAction } from '../../store/vinos/actions';

const Wines = props => {
    const dataDefault = {
        id: '',
        nombre: '',
        vina: '',
        cepa: '',
        cosecha: '',
        tipo: '',
        show: true
    };
    const { vinos } = props;
    const [validated, setValidated] = React.useState(false);
    const [vinosForm, setVinosForm] = React.useState(dataDefault);
    const [show, setShow] = React.useState(false);

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = (id) => {
        vinos.map(item =>{
            if(item.id === id){
                setVinosForm(item);
            }
        });
        setShow(true);
    };

    const onChangeTextModal = ({ target }) => {
        const key = target.name;
        const value = target.value;
        setVinosForm({
            ...vinosForm, [key]: value
        });
    };
   const onClickActualizaVino = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.stopPropagation();
        }else{
            props.updateVinosComponen(vinosForm);
            setShow(false);
        }
        setValidated(true);
    };
 
    const onClickEliminar = (target) => {
        props.deleteVinosComponen(target);
    };
    return (
        <div>
            <Card style={{ width: '70rem'  }}>
            <Card.Header as="h5">Formulario Listado de Vinos</Card.Header>
            <table class="table table-hover ">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Viña</th>
                        <th>Cepa</th>
                        <th>Cosecha</th>
                        <th>Tipo</th>
                        <th>Controles</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {
                        vinos.map((vino, index) =>
                            <tr key={vino.id} className={(vino.show) ? '' : 'd-none'}>
                                <td>{vino.nombre}</td>
                                <td>{vino.vina}</td>
                                <td>{vino.cepa}</td>
                                <td>{vino.cosecha}</td>
                                <td>{vino.tipo}</td>
                                <td>
                                    <div>
                                        <ButtonToolbar aria-label="Toolbar with button groups">
                                            <ButtonGroup className="mr-2" aria-label="First group">
                                                <Button onClick={() => handleShow(vino.id)}>Editar</Button>
                                            </ButtonGroup>
                                            <ButtonGroup className="mr-2" aria-label="First group">
                                                <Button onClick={() => onClickEliminar(vino.id)}>Eliminar</Button>
                                            </ButtonGroup>
                                        </ButtonToolbar>

                                    </div>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
            </Card>
            <Modal
            {...props}
                show={show}
                onHide={handleClose}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
    
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    Formulario de Actualizacion para Vinos
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <br></br>
                            <Form noValidate validated={validated} onSubmit={onClickActualizaVino}>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}>Nombre Vino</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="text"
                                            value={vinosForm.nombre}
                                            onChange={onChangeTextModal}
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
                                    <Col sm={8}>
                                        <Form.Control type="text"
                                            value={vinosForm.vina}
                                            onChange={onChangeTextModal}
                                            size="sm"
                                            name="vina"
                                            placeholder="Ingresar Nombre Viña" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}>Cepa</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="text"
                                            value={vinosForm.cepa}
                                            onChange={onChangeTextModal}
                                            size="sm"
                                            name="cepa"
                                            placeholder="Ingresar Tipo Cepa" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}>Año Cosecha</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="text"
                                            value={vinosForm.cosecha}
                                            onChange={onChangeTextModal}
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
                                    <Col sm={8}>
                                        <Form.Control type="text"
                                            value={vinosForm.tipo}
                                            onChange={onChangeTextModal}
                                            size="sm"
                                            name="tipo"
                                            placeholder="Ingresar Tipo de Vino" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                </Form.Group>                            <Form.Group as={Row}>
                                    <Col sm={{ span: 10, offset: 4 }}>
                                        <Button type="submit" className='btn btn-primary'>Actualizar
                                        Vino</Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>

    );
};

const mapStateToProps = state => ({
    ...state.vinos
});

const mapDispatchToProps = dispatch => ({
    deleteVinosComponen: id => dispatch(deleteVinosAction(id)),
    updateVinosComponen: id => dispatch(updateVinosAction(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(Wines);