import React, { useState, useEffect } from 'react';
export default function HookCountPage(props) {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  // useEffect 和声明周期DidMount DidUpdate类似，组件挂载完会执行、更新也会执行
  useEffect(() => {
    console.log('count effect'); //zwj-log
    // 在要在count改变的时候执行
    document.title = `${count}次`;
  }, [count]);
  useEffect(() => {
    console.log('date effect'); //zwj-log
    // 只需要在didMount的时候执行
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    // 清楚定时器 类似于willUnMount
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h3>HookCount</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
