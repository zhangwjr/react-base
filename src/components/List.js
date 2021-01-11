import React from 'react'
import data from '../data/data'
const pageLen = 3 //每页3条数据

export default function List(props) {
  // 这里接收父级传递的props, props中包含activePage
  let {activePage} = props;// activePage 代表当前实现第几页
  let start = (activePage - 1)*pageLen;// 当前页从第几条开始, 注意页码从1开始计数, 但是JS从0开始计算, 所以减1
  let end = activePage*pageLen;// 当前页到第几条结束
  let nowData = data.filter((item,index) => index => start && index < end)
  return (
    <ul>
      {
        nowData.map(item => {
          return (<li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.describe}</p>
          </li>)
        })
      } 
    </ul>
  )
}
