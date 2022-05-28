import React from 'react';
import ReactDOM from 'react-dom';
import './myStyle.scss'

class ReactForm extends React.Component{
  constructor(){
    super();
    this.state = {
      name : "",
      age : null,
      errmsg : ""
  };
  }
  changeValue = (event) =>{
    
    let n = event.target.name;
    let v = event.target.value;
    let err = "";

    if(n === "urname"){
      if(v === !"" && !String(v)){
        err = <strong> Enter valid username </strong>
      }
    }
    if(n === "urage"){
      if(v=== null && !Number(v)){
        err = <strong> Enter valid Age </strong>
      }
    }
    this.setState({[n]:v});
    this.setState({errmsg: err});
    
  }
  submitForm = (event) =>{
    event.preventDefault();
    alert("Your Name : "+this.state.name + " Your Age : "+ this.state.age)
  }
  render(){
    return(
      <form onSubmit={this.submitForm}>
        <h1>Hello {this.state.name}</h1>
        <h1>Your age {this.state.age}</h1>
        Enter your name: <input type="text" name="urname" onChange={this.changeValue} /> 
        {this.state.errmsg}
        <br/>
        Enter your age: <input type='text' name="urage" onChange={this.changeValue} />
        {this.state.errmsg}
        <br/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
ReactDOM.render(<ReactForm />, document.getElementById('root'))