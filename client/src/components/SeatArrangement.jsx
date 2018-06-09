import React from 'react';

let SeatArrangement = (props) => {
  return (
    <div className ='seat-arrangement'> 
      Table Capacity: {props.tableState.tableCapacity}

      <div className ='seat-configuration'>
        {props.tableState.tables.map(table => 
          <div className='table' key={table.tableId}>
            {table.tableId}
            <input type='number'/>
          </div>
        )}
        <button onClick={props.confirmArrangement()}>LOCK-IN</button>
      </div> 
    
    </div>
  )
};

export default SeatArrangement;