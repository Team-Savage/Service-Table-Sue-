import React from 'react';
import ReactDOM from 'react-dom';

class TableService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tables : null,
      seats  : []
    } 
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  handleSeats(tables) {
    for(let seat of tables) {
      // map out tables
        // spawn div to ask how many seats per table
        // push seating object (holding all data end client needs) 
      seats.push({})
    }
  }

  render() {
    return (this.state.tables)? 
      (
        <div className = 'table-spawn'>
          <SeatArrangement spawn = {this.handleSeats.bind(this)}/>
        </div>
      )
    :
      (
        <div className = 'table-service'>
          How many tables?
          <input type = 'text' name = 'tables' onChange = {this.handleChange.bind(this)}/>
        </div>
      )
  }
};

ReactDOM.render(<TableService/>, document.getElementById('app'));
