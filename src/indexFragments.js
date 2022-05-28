import React from 'react';
import ReactDOM from 'react-dom';
import './myStyle.scss'

class ReactFragments extends React.Component{
  render(){
    return(
      <table>
        <tr>
          <ReactReactFragments1 />
        </tr>
      </table>
    )
  }
  
}

class ReactReactFragments1 extends React.Component{
  render(){
    return(
      <>
        <td>Test</td>
        <td>Fragment</td>
      </>
    )
  }
  
}

ReactDOM.render(<ReactFragments />, document.getElementById('root'))