import { useState, useEffect } from "react";

export default function Poster({ url }) {
  const [showImage, setShowImage] = useState(true);
  useEffect(() => {
    if (showImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    // const timer = setTimeout(() => {
    //   setShowImage(false);
    // }, 1000);

    // return () => {
    //   clearTimeout(timer);
    //   document.body.style.overflow = "visible";
    // };
  }, [showImage]);
  return (
    <div className={`posterContainer ${!showImage && "hidePoster"}`}>
      <img src={url} alt="Poster" />
      <button onClick={() => setShowImage(!showImage)}>أظهار المحتوى</button>
    </div>
  );
}
