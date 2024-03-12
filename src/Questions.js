import { useState } from "react";
import styles from "./question.module.css";
import { questionsData } from "./Data";

export default function Question() {
  const [step, setStep] = useState(1);
  const [answerIsOpen, setAnswerIsOpen] = useState(false);

  function preHandler() {
    if (step > 1) {
      setStep((s) => --s);
      questionsData[step - 2].active = true;
      setAnswerIsOpen(false);
    }
  }
  function nextHandler() {
    if (step < questionsData.length) {
      setStep((s) => ++s);
      questionsData[step].active = true;
      setAnswerIsOpen(false);
    }
  }
  function showHandler() {
    setAnswerIsOpen(!answerIsOpen);
  }
  //   function questionHandle(q) {
  //     setStep(q.id);
  //     q = { ...q, active: true };
  //   }
  return (
    <div className={styles.container}>
      <div className={styles.steps}>
        <div className={styles.numbers}>
          {questionsData.map((q) => {
            return (
              <>
                <div
                  key={q.id}
                  onClick={() => {
                    setStep(q.id);
                    q.active = true;
                  }}
                  className={q.active && styles.active}
                >
                  {q.id}
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.message}>
          <p>
            {step}: {questionsData[step - 1].qes}
          </p>
        </div>
        <div className={styles.buttons}>
          <Button onClick={preHandler}>
            <span>⏮️</span>السابق
          </Button>
          <button
            onClick={showHandler}
            className={answerIsOpen && styles.active}
          >
            الأجابة
          </button>
          <Button onClick={nextHandler}>
            التالي<span>⏭️</span>
          </Button>
        </div>
        {answerIsOpen && (
          <div className={styles.answer}>
            <h3 className={styles.ques_h3}>{questionsData[step - 1].answer}</h3>
          </div>
        )}
      </div>
    </div>
  );
}
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
