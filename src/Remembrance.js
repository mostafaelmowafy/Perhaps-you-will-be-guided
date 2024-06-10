import { useState } from "react";
import styles from "./Remembrance.module.css";
import { azkars } from "./azkar";
export default function Remembrance() {
  const [azka, setAzka] = useState("أذكار الصباح");
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        {azkars.map((azkar) => {
          //   console.log(azkar.data);
          return (
            <h3
              onClick={() => setAzka(azkar.data[0].category)}
              className={azka === azkar.data[0].category && styles.active}
            >
              {azkar.data[0].category}
            </h3>
          );
        })}
      </div>
      <div className={styles.content}>
        {azkars.map((azkar) => {
          //   console.log(azkar.data);
          return (
            <>
              <div className={styles.card}>
                {azka === azkar.data[0].category &&
                  azkar.data.map((d) => {
                    return (
                      <p>
                        {d.content} <span>{d.count}</span>
                      </p>
                    );
                  })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
