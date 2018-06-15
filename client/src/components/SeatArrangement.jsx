import React from 'react';

class SeatArrangement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      work : 'im working'
    }
  }

  componentDidMount() {
    console.log('hai')
    console.log(this.props);
  }

  render() {
    let tables = this.props.state.tables;
    console.log('tables', tables)

    return (
      <div className ='seat-arrangement'> 
        Table Capacity: {this.props.state.tableCapacity}
  
        <div className ='seat-configuration'>
          {tables.map(table => 
            <div className='table' key={table.tableId}>
              {table.tableId}
              <input type='text' name='seatCapacity'/>
            </div> 
          )}
        </div> 
      </div>
    )//end return       
  }
};

export default SeatArrangement;
//<button onClick={this.confirmArrangement.bind(this)}>LOCK-IN</button> */ */}
// add change fun