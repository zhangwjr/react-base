import React from 'react'
import Li from './Li'
import { useSelector } from "react-redux";

export default function Todos() {
  const data = useSelector(state => state)
  console.log('todo',data);
  return (
    <ul id="todo-list">
      {
        data.map(item => (<Li key={item.id} {...item}/>))
      }
    </ul>
  )
}
