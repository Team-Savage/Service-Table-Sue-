import React from 'react';
import SeatArrangement from './SeatArrangement.jsx';

let ConfigureSeats = (props) => {
  let tables = props.state.tables;

  return (!props.state.lock2)? (
    <div className = 'table-configuration'> 
      Table Capacity: {props.state.tableCapacity}

      <div className = 'table-map'>
        {tables.map(table => 
          <div className='table' key={table.tableId}>
            {table.tableId}
            <input type='number' name='seatCapacity'/>
          </div> 
        )}
      </div> 
      <button onClick={props.lock2}> LOCK ARRANGEMENT </button>
      
      <div className = 'table-locked'>
        <SeatArrangement/>
      </div>
    </div>
    )//end return       
      : 
    (
      <div>
        unlocked
        <button onClick={props.lock2}> UNLOCK ARRANGEMENT </button>
      </div> 
    ) 
};

export default ConfigureSeats;
//<button onClick={this.confirmArrangement.bind(this)}>LOCK-IN</button> */ */}
// add change fun