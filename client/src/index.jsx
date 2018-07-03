import React from 'react';
import ReactDOM from 'react-dom';
import ConfigureSeats from './components/ConfigureSeats.jsx';
import './style.css';

class TableService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableCapacity : null,
      lock1         : false,
      lock2         : false,
      tables        : [],
    } 
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }
  
  handleTables() {
    console.log('handling tables')
    let capacity = parseInt(this.state.tableCapacity);
    let updateTables = [];

    for(let i = 1; i <= capacity; i++) { 
      let id = {
        tableId : i,
        seats   : 1
      }
      updateTables.push(id);
    };
    
    this.setState({
      lock1  : true,
      tables : updateTables
    });
  }

  lock() {
    console.log('lock2 toggled')
    this.setState({
      lock2: !this.state.lock2
    })
  }

  render() {
    return (this.state.lock1)? 
      (
        <div className='table-spawn'>
          <ConfigureSeats state={this.state} lock2={this.lock.bind(this)}/>
        </div>
      )
        :
      (
        <div className='table-service'>
          How many tables?
          <input type='text' name='tableCapacity' onChange={this.handleChange.bind(this)}/>
          <button onClick={this.handleTables.bind(this)}>SUMBIT</button>
        </div>
      )
  }
};

ReactDOM.render(<TableService/>, document.getElementById('app'));
