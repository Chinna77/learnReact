import React, { useEffect, useState,  } from 'react';
import ReactDOM from 'react-dom';

function ReactHooks(){

  const [count, changeCount] = useState(10);
  useEffect(()=>{
    alert('DidMount');
  })
  return(
    <div>
      <p>Your count is {count} </p>
      <button type='submit' onClick={()=>changeCount(count+5)}>Click</button>
    </div>
  )

}
ReactDOM.render(<ReactHooks/>, document.getElementById('root'))

