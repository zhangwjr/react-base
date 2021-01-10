import React from 'react'
import { useSelector, useDispatch } from "react-redux" 

export default function State() {
  const data = useSelector(state => state)
  let unDone = data.filter(item => (!item.done))
  let done = data.filter(item => item.done)
  let dispatch = useDispatch()
  return (
    <div id="todo-state">
      <span className="todo-count">
        <span className="number">{unDone.length}</span>
        <span className="word">项目待完成</span>
      </span>
      {
        done.length > 0 ?
        <span className="todo-clear">
          <a href="#" onClick={() => {
            dispatch({
              type:"TODO_REMOVE_DONE",
            })
          }}>
            Clear <span>{done.length}</span>已完成事项
          </a>
        </span> : ""
      }
    </div>
  )
}
