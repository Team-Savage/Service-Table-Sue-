import React from 'react';
import SeatArrangement from './SeatArrangement.jsx';

class ConfigureSeats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lock          : false
    }
  }

  componentDidMount() {
    console.log(this.props);
  }

  lock() {
    console.log('!lock')
    this.setState({
      lock: !this.state.lock
    })
  }

  render() {
    let tables = this.props.state.tables;

    return (
      <div className = 'table-configuration'> 
        Table Capacity: {this.props.state.tableCapacity}
  
        <div className = 'table-map'>
          {tables.map(table => 
            <div className='table' key={table.tableId}>
              {table.tableId}
              <input type='number' name='seatCapacity'/>
            </div> 
          )}
        </div> 
        {/* make conditional button dependent on lock-type */}
        <button onClick={this.lock.bind(this)}> LOCK-IN ARRANGEMENT </button>
        
        <div className = 'table-locked'>
          <SeatArrangement/>
        </div>
      </div>
    )//end return       
  }
};

export default ConfigureSeats;
//<button onClick={this.confirmArrangement.bind(this)}>LOCK-IN</button> */ */}
// add change fun