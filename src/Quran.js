import styles from "./quran.module.css";
import { useNavigate } from "react-router-dom";
import { quran, livetv } from "./Data";
import { useState } from "react";

function Quran() {
  const [active, setActive] = useState(1);
  const [activeTv, setActiveTv] = useState(1);

  const navigate = useNavigate();

  const handleCardClick = (cardData) => {
    // Use navigate to direct the user to the appropriate route
    navigate(`/quran/person`, { state: cardData });
  };

  return (
    <div>
      <ul className={styles.head}>
        <li
          onClick={() => setActive(1)}
          className={active === 1 && styles.active}
        >
          القراء
        </li>
        <li
          onClick={() => setActive(2)}
          className={active === 2 && styles.active}
        >
          أذاعة القران الكريم
        </li>
        <li
          onClick={() => setActive(3)}
          className={active === 3 && styles.active}
        >
          قنوات مباشرة
        </li>
      </ul>
      {active === 1 && (
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
      )}
      {active === 2 && (
        <div className={styles.radioPage}>
          <p>
            25 مارس من عام 1964م تم إنشاء إذاعة القرآن الكريم المصرية، وهى إذاعة
            مختصة بإذاعة القرآن الكريم والبرامج الإسلامية، وتعد السابقة الأولى
            فى هذا النوع من الرسالة الإعلامية، ومن ثم فهى الإذاعة الأقدم على
            مستوى العالم بين إذاعات القرآن الكريم
          </p>
          <audio controls>
            <source
              src="https://stream.radiojar.com/8s5u5tpdtwzuv"
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
      {active === 3 && (
        <div className={styles.livetv}>
          {livetv.map((t) => {
            return (
              <>
                <button
                  onClick={() => {
                    setActiveTv(t.id);
                  }}
                  className={t.id === activeTv && styles.active}
                >
                  {t.name}
                </button>
              </>
            );
          })}
          <br />
          {1 === activeTv && (
            <iframe
              src="https://www.youtube.com/embed/4H4EqmK54pM?si=R1WgaNdAHsGB1pvu"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          )}
          {2 === activeTv && (
            <iframe
              src="https://www.youtube.com/embed/moQtMet7F7w?si=TAZVXXtwz_axjefd"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          )}
        </div>
      )}
    </div>
  );
}

export default Quran;
