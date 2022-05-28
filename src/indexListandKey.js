import React from 'react';
import ReactDOM from 'react-dom';

function ListCom(props){
  const lis = props.mylist.map((listv) =>{
  return(
    <li key={listv.id} >
      <div>{listv.str}</div>
    </li>
  )
})
return (<ul>{lis}</ul>)
}
const list1 = [
  {id: 1, str :"Hi"},
  {id: 2, str :"Neera"},
  {id: 3, str :"Welcome"},
]
ReactDOM.render(<ListCom mylist={list1}/>, document.getElementById('root'))

