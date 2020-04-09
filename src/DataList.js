import React from 'react';
import logo from './logo.svg';
import './App.css';

class DataList extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                 {this.props.text}
                <input type="checkbox" 
                checked = {this.props.completed} 
                onChange={() => this.props.handleEvnt(this.props.id)}
                 />
               
            </div>
        )
    }
}

export default DataList;
