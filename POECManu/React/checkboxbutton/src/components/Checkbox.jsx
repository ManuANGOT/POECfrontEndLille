import { useState } from "react";

export default function Checkbox(props) {
  const [checkbox, setCheckbox] = useState(<button>ON</button>);

  const Click = () => setCheckbox(!checkbox);

  if (Click) {
    return (
      <>
        <p>{checkbox}</p>
        <input type="checkbox" />
      </>
    );
  } else if (Click) {
    return (
      <>
        <p>{checkbox}</p>
        <button>ON</button>
      </>
    );
  }
}
