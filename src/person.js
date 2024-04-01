import { useLocation } from "react-router-dom";
import styles from "./person.module.css";
function Person() {
  const { state } = useLocation();
  return (
    <>
      <div className={styles.main}>
        <img src={state.image} alt={state.name} />
        <div>
          <h1>{state.name}</h1>
          <p>{state.description}</p>
        </div>
      </div>
    </>
  );
}
export default Person;
