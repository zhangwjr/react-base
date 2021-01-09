import React, { useState,useEffect,useRef} from "react";

function Course() {
  const [ course, setCourse ] = useState('Web高级')
  const [ num, setNum] = useState(1)
  let prevCourse = useRef(course)
  let prevNum = useRef(num)
  useEffect(() => {
    console.log('组件挂载阶段');
    console.log(prevCourse,prevNum);
    return () => {
      console.log('组件卸载之前'); 
    }
  },[])
  useEffect(() => {
    console.log('num',num,);
    console.log('prevNum.current',prevNum.current,);
    if (course !== prevCourse.current || num !== prevNum.current) {
      // 如果当前值和上一次值不一样, 则说明组件有更新
      console.log('组件更新');
    }
    // 注意：ref不会自动更新，需要手动更新下
    prevCourse.current = course
    prevNum.current = num
  }, [course,num])
  return <div>
    <div>
      选择课程:
      <select value={course} onChange={({target}) => {setCourse(target.value)}}>
        <option value="Web全栈">Web全栈</option>
        <option value="Web高级">Web高级</option>
      </select>
    </div>
    <div>
      购买数量:
      <input type="number" value={num} min={1}  onChange={({target}) => {setNum(target.value)}}/>
    </div>
  </div>
}

function App3() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show ? <Course /> : ""}
      <button onClick={() => setShow(!show)}>{show ? '隐藏课程' : '显示课程'}</button>
    </div>
  );
}
export default App3;
