import React from 'react';
import ReactDom from "react-dom"
import logo from './logo.svg';
import './App.css';
import TodoData from "./todosData"
import DataList from "./DataList"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      comp: TodoData
    }
    this.handleEvnt = this.handleEvnt.bind(this)
  }

  handleEvnt(id) {
    this.setState(function (prevState) {
      const upd = prevState.comp.map(function (todo) {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo

      })

      return {
        comp: upd
      }

    })
  }

  render() {

    const list = this.state.comp.map(item =>

      <DataList key={item.id} id={item.id} text={item.text} completed={item.completed}
        handleEvnt={this.handleEvnt} />

    )


    return (
      <div className="App" >
        <header className="App-header">
          <h1>Sample Application</h1>
          {list}

        </header>
      </div>
    );
  }
}

export default App;
