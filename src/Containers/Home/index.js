import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import AddTodo from "../../Components/AddTodo";
import Todo from "../../Components/todo";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddTodo: false,
      todoList: JSON.parse(localStorage.getItem("todo-list")) || [],
      editData : {}
    };
  }

  handleCloseTodo = () => {
    this.setState({
      openAddTodo: !this.state.openAddTodo,
      editData : {}
    });
  };

  handleAddTodo = (todo) => {
    let newTodoList = [...this.state.todoList];
    newTodoList.push(todo);
    this.setState(
      {
        todoList: [...newTodoList],
      },
      () => {
        localStorage.setItem("todo-list", JSON.stringify(this.state.todoList));
        this.handleCloseTodo();
      }
    );
  };

  handleDelete = (id) => {
    let newTodoList = [...this.state.todoList];
    newTodoList.splice(id, 1);
    this.setState(
      {
        todoList: [...newTodoList],
      },
      () =>
        localStorage.setItem("todo-list", JSON.stringify(this.state.todoList))
    );
  };

  handleEditData = (id, newObj) => {
    let newTodoList = [...this.state.todoList];
    newTodoList.splice(id, 1);
    newTodoList.splice(id, 0, newObj);
    this.setState(
      {
        todoList: [...newTodoList],
      },
      () => {
        localStorage.setItem("todo-list", JSON.stringify(this.state.todoList));
        this.handleCloseTodo();
      }
    );
  };

  handleEdit = (data) => {
      this.setState({
        editData : {...data},
        openAddTodo : !this.state.openAddTodo
      })
  }

  render() {
    const { openAddTodo, todoList, editData } = this.state;
    return (
      <Container className="main_div">
        <h1 className="title">Todo List</h1>
        <div className="add_button">
          <Button onClick={this.handleCloseTodo}>Add Todo</Button>
        </div>
        <Container className="list_div">
          {todoList.map((todo, index) => (
            <Todo
              todo={todo}
              id={index}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          ))}
        </Container>
        <AddTodo
          show={openAddTodo}
          handleClose={this.handleCloseTodo}
          addTodo={this.handleAddTodo}
          editData={editData}
          handleEditData={this.handleEditData}
        />
      </Container>
    );
  }
}

export default Home;
