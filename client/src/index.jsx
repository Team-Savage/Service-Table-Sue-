import React from 'react';
import ReactDOM from 'react-dom';
import SeatArrangement from './components/SeatArrangement';

class TableService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableCapacity : null,
      lock          : false,
      tables        : []
    } 
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  handleClick() {
    this.setState({
      lock: true
    });
  }

  handleSeats(tableCapacity) {
    for(let table of tableCapacity) { 
      let num = 1
      let seat = {
        'customerId': num
      }
      tables.push(seat)
    };
  }

  render() {
    return (this.state.lock)? 
      (
        <div className = 'table-spawn'>
          <SeatArrangement seats = {this.handleSeats.bind(this)} tableState = {this.state}/>
        </div>
      )
        :
      (
        <div className = 'table-service'>
          How many tables?
          <input type = 'text' name = 'tableCapacity' onChange = {this.handleChange.bind(this)}/>
          <button onClick = {this.handleClick.bind(this)}>SUMBIT</button>
        </div>
      )
  }
};

ReactDOM.render(<TableService/>, document.getElementById('app'));
