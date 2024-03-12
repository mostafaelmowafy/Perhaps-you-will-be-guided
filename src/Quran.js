import styles from "./quran.module.css";
import Poster from "./Poster";

const quran = [
  {
    id: 1,
    name: "محمد صديق المنشاوي",
    image: require("./assets/images/mohamed-elmenshawy.jpg"),
    description:
      "الشيخ محمد صديق المنشاوي المشهور بالمنشاوي (20 يناير 1920 – 20 يونيو 1969). يعد من أهم وأشهر القراء في العصر الحديث. أطلق عليه لقب ملك النهاوند لبراعته في القراءة بهذا المقام.",
  },
  {
    id: 2,
    name: "محمود خليل الحصري",
    image: require("./assets/images/mahmod-elhosary.jpg"),
    description:
      "محمود خليل الحصري محمود خليل الحصري قارئ من دولة مصر، ولد محمود خليل الحصري سنة 1335 ه الموافق ل 1917 م بمحافظة الغربية بمصر. ويعتبر من أشهر القراء في العالم الإسلامي، بدأ رحلته في حفظ القرآن عن عمر الأربع سنوات بالكتاب ثم إنتقل لتعلم القراءات العشر وعلوم القرآن في الأزهر.",
  },
  {
    id: 3,
    name: "ياسر الدوسري",
    image: require("./assets/images/yasser.png"),
    description:
      "ياسر الدوسري هو إمام وخطيب المسجد الحرام في مكة المكرمة. وُلد في 6 أغسطس 1980م، وهو أحد أئمة الحرم المكي منذ أكتوبر 2019م. يتميز بتلاوته الرائعة للقرآن الكريم وقد تلمذ على يد عدد من العلماء والمشايخ",
  },
];

function Quran() {
  return (
    <div>
      <Poster url={require("./assets/images/quran.jpg")} />
      <div className={styles.main}>
        {quran.map((q) => {
          return (
            <div className={styles.card} key={q.id}>
              <img src={q.image} alt={q.name} />
              <div>
                <h3 className={styles.quran_h3}>{q.name}</h3>
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
