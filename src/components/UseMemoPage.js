import React, { useState, useMemo } from 'react';

export default function useMemoPage(props) {
  const [count, setCount] = useState(0);
  // 当前计算之和count有关
  const expensive = useMemo(() => {
    console.log('computed'); //zwj-log
    let sum = 0;
    for (let i = 0; i <= count; i++) {
      sum += i;
    }
    return sum;
    // 只有count改变的时候，当前函数才会重新执行
  }, [count]);

  const [value, setValue] = useState('');
  return (
    <div>
      <h3>UseMemoPage</h3>
      <p>count: {count}</p>
      <p>expensive: {expensive}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
