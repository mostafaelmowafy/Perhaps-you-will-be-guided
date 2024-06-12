import styles from "./quran.module.css";
import { useNavigate } from "react-router-dom";
import { quran } from "./Data";

function Quran() {
  const navigate = useNavigate();
  const handleCardClick = (cardData) => {
    // Use navigate to direct the user to the appropriate route
    navigate(`/quran/person`, { state: cardData });
  };
  return (
    <div>
      {/* <Poster url={require("./assets/images/quran.jpg")} /> */}
      <div className={styles.main}>
        {quran.map((q) => {
          return (
            <div
              className={styles.card}
              key={q.id}
              onClick={() => handleCardClick(q)}
            >
              <img src={q.image} alt={q.name} />
              <div>
                <h3 className={styles.quran_h3}>
                  {q.name} <span>{q.date}</span>{" "}
                </h3>
                <p>{q.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Quran;
