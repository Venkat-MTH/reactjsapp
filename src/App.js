import React from 'react';
import ReactDom from "react-dom"
import logo from './logo.svg';
import './App.css';
import TodoData from "./todosData"
import DataList from "./DataList"
import randomcolor from "randomcolor"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      comp: TodoData,
      count: 0,
      color: "",
      firstname: "",
      lastname: "",
      about: "",
      active: false,
      gender: "",
      color: ""
    }
    this.handleEvnt = this.handleEvnt.bind(this)
    this.incr = this.incr.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  incr() {
    this.setState((prev) => {
      return {
        count: prev.count + 1

      }

    }
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count != this.state.count) {

      this.setState({ color: randomcolor() })
    }

  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ?
      this.setState({
        [name]: checked
      }) :
      this.setState({ [name]: value })

  }

  handleSubmit(event) {
    alert(this.state.txt);
    event.preventDefault()
  }

  render() {

    const list = this.state.comp.map(item =>

      <DataList key={item.id} id={item.id} text={item.text} completed={item.completed}
        handleEvnt={this.handleEvnt} />

    )


    return (
      <div>
      <Header />
      <MemeGenerator />
      </div>
      /*<div className="App" >
        <div className="App-header">
          <h1>Sample Application</h1>
          {list}
          <br />
          <h4 style={{ color: this.state.color }}>{this.state.count}</h4>
          <button type="button" onClick={this.incr}>Increment</button>


          <form onSubmit={this.handleSubmit}>
            First Name:<input type="text"
              name="firstname"
              placeholder="First Name"
              value={this.state.firstname}
              onChange={this.handleChange}>
            </input>
            <br />
            Last Name:<input type="text"
              name="lastname"
              placeholder="Last Name"
              value={this.state.lastname}
              onChange={this.handleChange}>
            </input>
            <br />

            About:<textarea type="text"
              name="about"
              placeholder="Please describe about your self "
              value={this.state.about}
              onChange={this.handleChange}>
            </textarea>
            <br />
            Active: <input
              type="checkbox"
              name="active"
              checked={this.state.active}
              onChange={this.handleChange} />
            <br />
Gender:
       Male:     <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange} />

           Female: <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange} />
            <br />
            <select onChange={this.handleChange} name="color" value={this.state.color}>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="voilet">Voilet</option>
            </select>
            <br />
            <input type="submit" value="submit"></input>
            <h3>Enter Information:</h3>
            <p>First Name: {this.state.firstname}</p>
            <p>Last Name: {this.state.lastname}</p>
            <p>About: {this.state.about}</p>
  avtice  {this.state.active === true ? "Active" : "Inactive"}
            <p>Gender: {this.state.gender}</p>
            <p>Color: {this.state.color}</p>
          </form>
        </div>
      </div>*/
    );
  }
}

export default App;
