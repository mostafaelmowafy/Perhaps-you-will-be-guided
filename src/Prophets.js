import styles from "./prophets.module.css";
import { prophetsData } from "./Data";
import { useState } from "react";

function Prophets() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("من ذكروا في القران");
  function showHandler(bool, page) {
    setShow(bool);
    setActive(page);
  }
  return (
    <div className="container">
      <div className={styles.header}>
        <ul>
          <li
            onClick={() => showHandler(true, "أولي العزم")}
            className={active === "أولي العزم" ? styles.active : ""}
          >
            أولي العزم
          </li>
          <li
            onClick={() => showHandler(false, "من ذكروا في القران")}
            className={active === "من ذكروا في القران" ? styles.active : ""}
          >
            من ذكروا في القران
          </li>
        </ul>
      </div>
      {prophetsData.map((obj) => {
        if (show) {
          return (
            obj.determination && (
              <main className={styles.main}>
                <div className={styles.card} key={obj.id}>
                  <div className={styles.content}>
                    <p>{obj.description}</p>
                    {/* <br /> */}
                    {obj.links?.map((link) => {
                      return (
                        <a href={link.url} key={link.content}>
                          <button className={styles.btn}>
                            {link?.content}
                          </button>
                        </a>
                      );
                    })}
                  </div>
                  <div className={styles.name}>
                    <img src={obj.image} alt={obj.name} />
                  </div>
                </div>
              </main>
            )
          );
        } else {
          return (
            <main className={styles.main}>
              <div className={styles.card} key={obj.id}>
                <div className={styles.content}>
                  <p>{obj.description}</p>
                  {/* <br /> */}
                  {obj.links?.map((link) => {
                    return (
                      <a href={link.url} target="_blank" rel="noreferrer">
                        <button className={styles.btn}>{link?.content}</button>
                      </a>
                    );
                  })}
                </div>
                <div className={styles.name}>
                  <img src={obj.image} alt={obj.name} />
                </div>
              </div>
            </main>
          );
        }
      })}
    </div>
  );
}

export default Prophets;
