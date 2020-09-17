import React, { useState, useEffect, useRef } from "react";

export default function (
  initW = window.innerWidth,
  initH = window.innerHeight
) {
  const initialWidth = useRef(initW);
  const initialHeight = useRef(initH);

  const [newWidth, setNewWidth] = useState(window.innerWidth);
  const widthMultiplier = newWidth / initialWidth.current;

  const [newHeight, setNewHeight] = useState(window.innerHeight);
  const heightMultiplier = newHeight / initialHeight.current;

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    function resizeHandler() {
      setNewWidth(window.innerWidth);
      setNewHeight(window.innerHeight);
    }
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });
  return [widthMultiplier, heightMultiplier];
}
