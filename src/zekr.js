import { useState } from "react";
import styles from "./azkar.module.css";
export default function Zekr({ z }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    if (count !== +z.count) {
      setCount((c) => (c += 1));
    }
  }

  return (
    <div
      key={z.content}
      onClick={() => handleClick()}
      className={count === +z.count && styles.full}
    >
      {z.content}{" "}
      <span>
        {count}/{z.count}
      </span>
    </div>
  );
}
