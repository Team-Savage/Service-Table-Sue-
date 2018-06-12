import React from 'react';

class SeatArrangement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seatCapacity: []
    }
  }

  componentDidMount() {
    console.log(this.props.tableState.lock);
  }

  render() {
    return (
      <div className ='seat-arrangement'> 
        Table Capacity: {props.tableState.tableCapacity}

        <div className ='seat-configuration'>
          {props.tableState.tables.map(table => 
            <div className='table' key={table.tableId}>
              {table.tableId}
              <input type='text' name='seatCapacity' onChange={props.handleChange()}/>
            </div>
          )}
          <button onClick={props.confirmArrangement()}>LOCK-IN</button>
        </div> 

      </div>
    )
  }
};

export default SeatArrangement;