import { useState } from "react";

function Test() {
  const fn = () => {
    console.log("elo");
    return [];
  };

  const [state, setState] = useState(fn());

  return (
    <div>
      <button onClick={() => setState([...state, "item"])}>zmień stan</button>
    </div>
  );
}

export default Test;
