import styles from "./prayer.module.css";
import Poster from "./Poster";

function Prayer() {
  return (
    <div className={styles.main}>
      {/* <Poster url={require("./assets/images/prayer.jpg")} /> */}
      <iframe rolling="no" src="https://www.islamicfinder.org/prayer-widget/">
        {" "}
      </iframe>
    </div>
  );
}

export default Prayer;
