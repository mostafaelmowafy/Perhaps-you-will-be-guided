import { useLocation } from "react-router-dom";
import styles from "./person.module.css";
import { useEffect, useState, useRef } from "react";
function Person() {
  const { state } = useLocation();
  const [moshaf, setMoshaf] = useState([{ name: "جاري التحميل ..." }]);
  const [surahs, setSurahs] = useState([]);
  const [surahServer, setSurahServer] = useState([]);
  const [urlSurah, setUrlSurah] = useState("");
  const audioRef = useRef(null);

  useEffect(() => {
    async function getReciters() {
      const res = await fetch(
        "https://mp3quran.net/api/v3/reciters?language=ar"
      );
      const data = await res.json();
      data.reciters.forEach((reciter) => {
        if (reciter.name === state.name) {
          getMoshaf(reciter.id);
        }
      });
    }

    async function getMoshaf(id) {
      const res = await fetch(
        `https://www.mp3quran.net/api/v3/reciters?language=arg&reciter=${id}`
      );
      const data = await res.json();
      setMoshaf(data.reciters[0].moshaf);
    }

    getReciters();
  }, []);

  async function getSurah(server, list) {
    setSurahServer(server);
    console.log(server);
    const res = await fetch("https://mp3quran.net/api/v3/suwar");
    const data = await res.json();
    const suraNames = data.suwar;
    let arr = [];

    list = list.split(",");

    list.forEach((s) => {
      const padS = s.padStart(3, "0");

      suraNames.forEach((suraName) => {
        if (suraName.id == s) {
          arr.push({ name: suraName.name, id: padS });
        }
      });
    });
    setSurahs(arr);
  }

  function playSurah(id) {
    setUrlSurah(surahServer + id + ".mp3");
    audioRef.current.src = surahServer + id + ".mp3";
  }
  useEffect(() => {
    if (urlSurah && audioRef.current) {
      audioRef.current.play();
    }
  }, [urlSurah]);
  return (
    <>
      <div className={styles.main}>
        <img src={state.image} alt={state.name} />
        <div>
          <h1 className={styles.h1}>{state.name}</h1>
          <p>{state.description}</p>
          <div>
            <label className={styles.label}>الرواية: </label>
            <select
              onChange={(e) => {
                const selectedOption = e.target.options[e.target.selectedIndex];
                const serverValue = selectedOption.dataset.server;
                const listValue = selectedOption.dataset.surahlist;
                getSurah(serverValue, listValue);
              }}
            >
              <option disabled selected value>
                -- أختار رواية --
              </option>
              {moshaf.map((m) => (
                <option
                  key={m.id}
                  value={m.id}
                  data-server={m.server}
                  data-surahList={m.surah_list}
                >
                  {m.name}
                </option>
              ))}
            </select>

            <br />
            <label className={styles.label}>السورة: </label>
            <select
              onChange={(e) => {
                const selectedOption = e.target.options[e.target.selectedIndex];
                playSurah(selectedOption.value);
              }}
            >
              <option disabled selected value>
                -- أختار السورة--
              </option>
              {surahs.map((e) => {
                return <option value={e.id}>{e.name}</option>;
              })}
            </select>
          </div>
          <div className={styles.audio}>
            <audio ref={audioRef} controls>
              <source src="" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </>
  );
}
export default Person;
