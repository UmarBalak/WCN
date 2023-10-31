import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { task, onDelete } = this.props;

    return (
      <li>
        {task}
        <button onClick={onDelete}>Remove</button>
      </li>
    );
  }
}

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleAddTask = () => {
    if (this.state.newTask) {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.newTask],
        newTask: '',
      }));
    }
  };

  handleRemoveTask = (index) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add a new task"
          value={this.state.newTask}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTask}>Add</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <TodoItem key={index} task={task} onDelete={() => this.handleRemoveTask(index)} />
          ))}
        </ul>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
