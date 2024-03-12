import styles from "./prophets.module.css";
import { prophetsData } from "./Data";
import Poster from "./Poster";

function Prophets() {
  return (
    <div className="container">
      <Poster url={require("./assets/images/poster2.jpg")} />
      {prophetsData.map((obj) => {
        return (
          <main className={styles.main}>
            <div className={styles.card} key={obj.id}>
              <div className={styles.content}>
                <p>{obj.description}</p>
                {/* <br /> */}
                {obj.links?.map((link) => {
                  return (
                    <a href={link.url}>
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
      })}
    </div>
  );
}

export default Prophets;
