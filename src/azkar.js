import { useState } from "react";
import styles from "./azkar.module.css";
import { azkarData } from "./Data";
import Zekr from "./zekr";

export default function Azkar() {
  const [azka, setAzka] = useState("أذكار الصباح");

  return (
    <div className={styles.main}>
      <div className={styles.head}>
        {azkarData.map((azkar) => {
          //   console.log(azkar.data);
          return (
            <h3
              onClick={() => setAzka(azkar.data[0].category)}
              className={azka === azkar.data[0].category && styles.active}
              key={azkar.data[0].category}
            >
              {azkar.data[0].category}
            </h3>
          );
        })}
      </div>
      <div className={styles.content}>
        {azkarData.map((azkar) => {
          //   console.log(azkar.data);
          return (
            <div className={styles.card} key={azkar.data[0].category}>
              {azka === azkar.data[0].category &&
                azkar.data.map((d) => {
                  return <Zekr z={d} />;
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
