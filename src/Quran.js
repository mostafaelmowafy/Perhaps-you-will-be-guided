import styles from "./quran.module.css";
import Poster from "./Poster";
import { useNavigate } from "react-router-dom";
// import person from "./person";
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
      "محمود خليل الحصري ولد سنة 1335 ه الموافق ل 1917 م بمحافظة الغربية بمصر. ويعتبر من أشهر القراء في العالم الإسلامي، بدأ رحلته في حفظ القرآن عن عمر الأربع سنوات بالكتاب ثم إنتقل لتعلم القراءات العشر وعلوم القرآن في الأزهر.",
  },
  {
    id: 3,
    name: "أحمد نعينع",
    image: require("./assets/images/ahmed.jpg"),
    description:
      "قارئ قرآن مصري ويعد أحد أعلام هذا المجال البارزين، من مواليد 15 مارس 1954 بمركز مطوبس بمحافظة كفر الشيخ، التحق بكلية الطب جامعة الإسكندرية. حفظ القران الكريم وهو في عمر الثامنة وتعلم التجويد على يد الشيخ أحمد الشوا. قرأ نعينع القراءات العشر أيام دراسته الجامعية على يد الشيخ محمد فريد النعماني.",
  },

  {
    id: 4,
    name: "عبدالباسط عبدالصمد",
    image: require("./assets/images/Abdelbasset.jpg"),
    description:
      "عبد الباسط عبد الصمد (1345هـ - 1409هـ)، قارئ قرآن مصري ويُعَد أحد أعلام هذا المجال البارزين، وقد لُقّب بـ«صوت مكة». دخل الإذاعة المصرية سنة 1951م. عُيّن قارئًا لمسجد الإمام الشافعي سنة 1952م، ثم لمسجد الإمام الحسين سنة 1958م خلفًا للشيخ محمود علي البنا. ترك للإذاعة ثروة من التسجيلات، إلى جانب المصحفين المرتل والمجود، ومصاحف مرتلة لبلدان عربية وإسلامية. جاب بلاد العالم سفيرًا لكتاب الله، وكان أول نقيب لقراء مصر سنة 1984م.",
  },
  {
    id: 5,
    name: "محمود علي البنا",
    image: require("./assets/images/albanna.jpg"),
    description:
      "الشيخ محمود علي البنا (17 ديسمبر 1926 - 20 يوليو 1985) قارئ قرآن مصري ويعد أحد أعلام هذا المجال البارزين، من مواليد قرية شبرا باص مركز شبين الكوم بمحافظة المنوفية. حفظ القرآن الكريم في كتاب القرية على يد الشيخ موسى المنطاش، وأتم حفظه وهو في الحادية عشرة، ثم انتقل إلى مدينة طنطا لدراسة العلوم الشرعية بالجامع الأحمدي، وتلقى القراءات فيها على يد الإمام إبراهيم بن سلام المالكي",
  },
  {
    id: 6,
    name: "مصطفى إسماعيل",
    image: require("./assets/images/Mustafa_Ismail.jpg"),
    description:
      "مصطفى إسماعيل. (17 يونيو 1905 - 26 ديسمبر 1978) قارئ قرآن مصري يُعد من أبرز شيوخ التلاوة في مصر والعالم الإسلامي. أتقن المقامات وقرأ القرآن بأكثر من 19 مقامًا بفروعها وبصوت عذب وأداء قوي، وقد عُرف عنه أنه صاحب نَفَس طويل في القراءة التجويدية. سجَّل بصوته تلاوة القرآن الكريم كاملًا مرتلًا.",
  },
];

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
