import React from 'react';
import ReactDOM from 'react-dom';

class ReactState extends React.Component{
  constructor(){
    super();
    this.state={initialValue : "Welcome"};
  }
  change = () =>{
    this.setState({initialValue : "Thanks for watching"});

  }
  componentWillMount(){
    alert('Used component will mount')
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({initialValue : "Used compenent did mount"});
    }, 7000);
  }
  componentWillUpdate(){
    alert('this component will update')
  }
  componentDidUpdate(){
    document.getElementById('myDiv').innerHTML='this component did update '+this.state.initialValue
  }
  shouldComponentUpdate(){
    return false;
  }
  render(){
    return(
      <div>
        <h1>{this.state.initialValue}</h1>
        <br />
        <button type='button' onClick={this.change}> Exit</button>
      </div>
    ) 
  }
}
ReactDOM.render(<ReactState />, document.getElementById('root'))