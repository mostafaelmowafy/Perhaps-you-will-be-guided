import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./Header";
import Prayer from "./Prayer";
import Prophets from "./Prophets";
import Quran from "./Quran";
import Question from "./Questions";
import Person from "./person";
import Azkar from "./Azkar";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Prophets />} />
        <Route path="/prayer" element={<Prayer />} />
        <Route path="/Azkar" element={<Azkar />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/question" element={<Question />} />
        <Route path="/quran/person" element={<Person />} />
      </Routes>
    </>
  );
}

export default App;
