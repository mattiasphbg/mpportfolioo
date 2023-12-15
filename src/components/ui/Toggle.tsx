"use client";

import React, { useState } from "react";

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isToggled ? "ON" : "OFF"}</button>
      <p>The toggle is {isToggled ? "on" : "off"}</p>
    </div>
  );
}

export default Toggle;
