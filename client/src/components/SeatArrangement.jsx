import React from 'react';

let SeatArrangement = (props) => {
  return (
    <div className ='seat-arrangement'> 
      Table Capacity: {props.tableState.tableCapacity}

      <div className ='seat-configuration'>
        {props.tableState.tables.map(table => 
          <div className='table' key={table.tableId}>
            {table.tableId}
            <input type='text'/>
          </div>
        )}
      </div> 
      
    </div>
  )
};

export default SeatArrangement;