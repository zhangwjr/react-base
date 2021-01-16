import { fibonacciWithTime } from './utils';

let count = 0;

const $root = document.getElementById('root');

function render(times) {
  const run = (deadline) => {
    while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && count < times) {
      console.log('deadline:',count,deadline.timeRemaining());
      // 计算 25 的斐波那契数列大概耗时 1ms，所以这里选择 25
      fibonacciWithTime(25);
      count++;
      $root.innerText = '当前计算个数：' + count;
    }
    if (count < times) {
      requestIdleCallback(run);
    }
  };
  requestIdleCallback(run)
}
render(1000);