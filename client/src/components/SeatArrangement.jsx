import React from 'react';

let SeatArrangement = (props) => {
  console.log(props.tableState.tables)
  return (
    <div className = 'seat-arrangement'> 
      {props.tableState.tableCapacity} 
    </div>
  )
};

export default SeatArrangement;