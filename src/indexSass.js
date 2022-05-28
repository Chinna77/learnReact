import React from 'react';
import ReactDOM from 'react-dom';
import './myStyle.scss'

class ReactStyle extends React.Component{
  render(){
    return(
      <div>
        <h1 >Hello Chinna</h1>
        <h2 >Welcome</h2>
        <h3 >To my react site</h3>
      </div>
    )
  }
}
ReactDOM.render(<ReactStyle />, document.getElementById('root'))