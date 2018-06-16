import React from 'react';

class SeatArrangement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lock: false
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
    console.log('tables', tables)

    return (
      <div className ='seat-arrangement'> 
        Table Capacity: {this.props.state.tableCapacity}
  
        <div className ='seat-configuration'>
          {tables.map(table => 
            <div className='table' key={table.tableId}>
              {table.tableId}
              <input type='number' name='seatCapacity'/>
            </div> 
          )}
        </div> 
        {/* make conditional button dependent on lock-type */}
        <button onClick={this.lock.bind(this)}> LOCK-IN ARRANGEMENT </button>
        
      </div>
    )//end return       
  }
};

export default SeatArrangement;
//<button onClick={this.confirmArrangement.bind(this)}>LOCK-IN</button> */ */}
// add change fun