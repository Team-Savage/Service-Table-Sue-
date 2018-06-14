import React from 'react';

class SeatArrangement extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   work : 'im working'
    // }
  }

  componentDidMount() {
    console.log('hai')
    console.log(this.props);
  }

  render() {
    return (
      <div>{this.props.tableState}</div>
      // <div className ='seat-arrangement'> 
      //   Table Capacity: {this.props.tableState}
  
      //   <div className ='seat-configuration'>
      //     {props.tableState.tables.map(table => 
      //       <div className='table' key={table.tableId}>
      //         {table.tableId}
      //         <input type='text' name='seatCapacity' onChange={props.handleChange()}/>
      //       </div>
      //     )}
      //     <button onClick={props.confirmArrangement()}>LOCK-IN</button>
      //   </div> 
      // </div>
    )
  }
};

export default SeatArrangement;