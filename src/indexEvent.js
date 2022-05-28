import React from 'react';
import ReactDOM from 'react-dom';

class EventHand extends React.Component{
  constructor(){
    super();
    this.state={
      msg: 'Welcome chinna'
    }
  }
  changeEvent = (a) =>{
    this.setState({
      msg: a
    })
  }
  render(){
    return(<div>
      <h2>{this.state.msg}</h2>
      <button onClick={this.changeEvent.bind('Change messge using event')}>Click</button>
    </div>)
  }
}
ReactDOM.render(<EventHand />, document.getElementById('root'))