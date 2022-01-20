import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const colorSelection = (color) => {
    switch (color) {
        case "primary":
            return 'blue';
        case "secondary":
            return 'yellow';
        default:
            return 'red';
    }
}

const Todo = (props) => {
    const { handleDelete, handleEdit, id } = props;
    const { name, category } = props.todo;
    return (
        <Row className="todos" variant="primary" style={{background: colorSelection(category)}} key={id}>
            <Col className="todo" xs={7} sm={7} md={7} >
                <span className="todo_name">{name}</span>
                <span className="todo_status">{category}</span>
            </Col>
            <Col className="todo_icon" xs={3} sm={3} md={3}>
                <span className="todo_name" onClick={() => handleEdit({id, name, category})}><AiOutlineEdit /> </span>
                <span className="todo_name" onClick={() => handleDelete(id)}><AiOutlineDelete /> </span>
            </Col>
        </Row>
    );
}
 
export default Todo;