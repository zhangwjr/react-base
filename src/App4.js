import React, { useState,useEffect } from "react";

function useScrollY() {
  let [scrollY, setScrollY] = useState(0);
  function scroll() {
    console.log(window.scrollY);
    setScrollY(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return scrollY
}

export default function App4() {
  let scrollY = useScrollY()
  return (
    <div
      style={{
        border: "1px solid #000",
        height: "1500px",
      }}
    >
      <p
        style={{
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        当前滚动条的位置是:{scrollY}
      </p>
    </div>
  );
}
