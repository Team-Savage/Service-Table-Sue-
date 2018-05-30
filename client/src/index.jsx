import React from 'react';
import ReactDOM from 'react-dom';

class TableService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    } 
  }
  // functions

  render() {
    return (
      <div className = 'table-service'>
        I am the table service --- testing
      </div>
    )
  }
};

ReactDOM.render(<TableService/>, document.getElementById('app'));
