import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

export default function Pagation(props) {
  let {activePage,pageLength} = props
  console.log(activePage);
  return (
    <nav>
      {
        [...(".".repeat(pageLength))].map((item,index) => {
          index++;
          return <Fragment key={index}>
            <span></span>
            <Link to={"./list"+idex} style={{color:activePage == index ? "red" : "#000"}}>{index}</Link>
          </Fragment>
        })
      }
      <span> | </span>
    </nav>
  )
}
