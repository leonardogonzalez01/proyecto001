import React, { useState } from 'react';
import { connect } from 'react-redux';
import {  Col, Form, Card } from 'react-bootstrap';
import { filtroVinosAction } from "../../store/vinos/actions";

const Filtro = (props) => {

    const vinosFilter = useState('');


    const onChangeFilter = ({ target }) => {
        const key = target.name;
        const value = target.value;
        props.setFiltroComponent(value);
    };


    return (
        <div>
            <Card style={{ width: '70rem'  }}>
            <Card.Header as="h5">Filtrar Vinos</Card.Header>
                    <Form>
                        <Form.Row>
                            <Col  md={{span: 6, offset: 3}}>
                                <Form.Control type="text"
                                    value={vinosFilter.nombre}
                                    onChange={onChangeFilter}
                                    size="10"
                                    name="texto"
                                    maxLength={50}
                                    placeholder="Ingrese aqui el dato a buscar" />
                            </Col>
                            
                        </Form.Row>
                    </Form>
            </Card>
            <br></br>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setFiltroComponent: payload => dispatch(filtroVinosAction(payload))
    }
};

export default connect(null, mapDispatchToProps)(Filtro);