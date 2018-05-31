import React from 'react';
import ReactDOM from 'react-dom';

class TableService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tables : null
    } 
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  spawnTables(num) {

  }

  render() {
    return (this.state.tables)? 
      (
        <div className = 'table-spawn'>
          <Table-Spawn spawn = {this.spawnTables.bind(this)}/>
        </div>
      )
    :
      (
        <div className = 'table-service'>
          How many tables?
          <input type = 'text' name = 'tables' onChange = {this.handleChange.bind(this)}/>
        </div>
      )
  }
};

ReactDOM.render(<TableService/>, document.getElementById('app'));
