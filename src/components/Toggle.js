import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const switchValue = () => setIsOn(prev => !prev);
  const color = isOn ? 'red' : 'white';

  return <button onClick={switchValue} style={{background: color}}>{isOn ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
