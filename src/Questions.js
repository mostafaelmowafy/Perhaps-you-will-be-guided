import { useEffect, useState } from "react";
import styles from "./question.module.css";
import { questionsData } from "./Data";

export default function Question() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState(true);
  const [answerIsOpen, setAnswerIsOpen] = useState(false);
  const [show, setShow] = useState("prophets");
  const [score, setScore] = useState(0);

  const singleData = questionsData.filter((q) => {
    return q.name === show;
  })[0].data;

  function preHandler() {
    if (step > 1) {
      setStep((s) => --s);
      singleData[step - 2].active = "active";
      setAnswerIsOpen(false);
    }
  }

  function nextHandler() {
    if (step < singleData.length) {
      setStep((s) => ++s);
      singleData[step].active = "active";
      setAnswerIsOpen(false);
    }
  }

  function showHandler() {
    setAnswerIsOpen(!answerIsOpen);
  }

  useEffect(() => {
    function calcScore() {
      const correctAnswer = singleData.filter((q) => {
        return q.active === "true";
      });
      setScore(correctAnswer.length * 10);
    }
    calcScore();
  }, [singleData, status]);

  return (
    <>
      <div className={styles.header}>
        <ul>
          <li
            className={show === "prophets" ? styles.active : ""}
            onClick={() => {
              setShow("prophets");
              setStep(1);
            }}
          >
            الأنبياء
          </li>
          <li
            className={show === "history" ? styles.active : ""}
            onClick={() => {
              setShow("history");
              setStep(1);
            }}
          >
            تاريخ
          </li>
          <li
            className={show === "jurisprudence" ? styles.active : ""}
            onClick={() => {
              setShow("jurisprudence");
              setStep(1);
            }}
          >
            فقه
          </li>
          <li
            className={show === "quran" ? styles.active : ""}
            onClick={() => {
              setShow("quran");
              setStep(1);
            }}
          >
            قران
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <div className={styles.steps}>
          <div className={styles.numbers}>
            {singleData.map((q) => {
              return (
                <div
                  key={q.id}
                  onClick={() => {
                    setStep(q.id);
                    q.active = "active";
                  }}
                  className={
                    q.active === "active"
                      ? styles.active
                      : q.active === "true"
                      ? styles.true
                      : q.active === "false"
                      ? styles.false
                      : undefined
                  }
                >
                  {q.id}
                </div>
              );
            })}
          </div>
          <div className={styles.message}>
            <p>
              {step}: {singleData[step - 1].qes}
            </p>
          </div>
          <div className={styles.buttons}>
            <Button onClick={preHandler}>
              <span>⏭️</span>السابق
            </Button>
            <button
              onClick={showHandler}
              className={answerIsOpen ? styles.active : undefined}
            >
              الأجابة
            </button>
            <Button onClick={nextHandler}>
              التالي<span>⏮️</span>
            </Button>
          </div>
          {answerIsOpen && (
            <div className={styles.answer}>
              <h3 className={styles.ques_h3}>{singleData[step - 1].answer}</h3>
              <span
                onClick={() => {
                  singleData[step - 1].active = "true";
                  setStatus(!status);
                }}
              >
                <img
                  src={require("./assets/images/checked.png")}
                  alt="true answer"
                />
              </span>
              <span
                onClick={() => {
                  singleData[step - 1].active = "false";
                  setStatus(!status);
                }}
              >
                <img
                  src={require("./assets/images/delete.png")}
                  alt="false answer"
                />
              </span>
            </div>
          )}
          <div className={styles.score}>
            <span>Score:</span> {score}
          </div>
        </div>
      </div>
    </>
  );
}
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
