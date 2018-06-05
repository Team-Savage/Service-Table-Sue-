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
  
  handleTables() {
    let capacity = parseInt(this.state.tableCapacity);
    console.log(typeof(capacity))// number
    let updateTables = [];

    for(let i = 1; i <= capacity; i++) { 
      let seat = {
        'customerId': i
      }
      updateTables.push(seat);
    };
    
    this.setState({
      lock   : true,
      tables : updateTables
    });
  }

  render() {
    return (this.state.lock)? 
      (
        <div className='table-spawn'>
          <SeatArrangement tableState={this.state}/>
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
