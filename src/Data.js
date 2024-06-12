const questionsData = [
  {
    name: "prophets",
    data: [
      {
        active: true,
        id: 1,
        qes: "من هو النبي الذي بعث مرتين إلى قومين مختلفين؟",
        answer: "سيدنا إدريس عليه السلام.",
      },
      {
        active: false,
        id: 2,
        qes: "من هو النبي الذي تعرض لسخرية من قومه؟",
        answer: "النبي نوح عليه السلام.",
      },
      {
        active: false,
        id: 3,
        qes: "من هو النبي الذي تم دفنه في نهر النيل ؟",
        answer: "النبي يوسف عليه السلام.",
      },
      {
        active: false,
        id: 4,
        qes: "من هو أول الأنبياء الذي جاهد في سبيل الله؟",
        answer: "سيدنا إدريس عليه السلام.",
      },
      {
        active: false,
        id: 5,
        qes: "من هو النبي الذي نقل بعد موته من مصر إلى فلسطين؟",
        answer: "النبي يوسف عليه السلام",
      },
      {
        active: false,
        id: 6,
        qes: "من هو النبي الذي قال أنا ابن الذبيحين؟",
        answer: "هو النبي محمد صلى الله عليه وسلم.",
      },
      {
        active: false,
        id: 7,
        qes: "من هو النبي الذي يصوم يوم ويفطر يوم؟",
        answer: "النبي داود.",
      },
      {
        active: false,
        id: 8,
        qes: "من هو النبي الذي يصوم يومي الاثنين والخميس؟",
        answer: "النبي محمد عليه السلام.",
      },
      {
        active: false,
        id: 9,
        qes: "من هو النبي الذي صام أول مرة؟",
        answer: "آدم عليه السلام.",
      },
      {
        active: false,
        id: 10,
        qes: "من هو النبي الذي صام عن الكلام لمدة ثلاثة أيام؟",
        answer: "زكريا عليه السلام.",
      },
      {
        active: false,
        id: 11,
        qes: "من هو كفيل السيدة مريم؟",
        answer: "زكريا عليه السلام.",
      },
      {
        active: false,
        id: 12,
        qes: "بماذا وصف القرآن الكريم ادريس عليه السلام؟",
        answer: "وصفه بالصفات التالية: الصبر والصدق والمنزلة الرفيعة.",
      },
      {
        active: false,
        id: 13,
        qes: "ما هي السور التي ذكرت ادريس في القرآن؟",
        answer: "سورة مريم والأنبياء.",
      },
      {
        active: false,
        id: 14,
        qes: "من هم الأنبياء الذي ذكروا بأسمائهم في القرآن؟",
        answer: `إن عدد المذكورين من الأنبياء والمرسلين عليهم السلام في القرآن الكريم هو خمسة وعشرون وهم:
    (آدم عليه السلام، نوح عليه السلام، إدريس عليه السلام، صالح عليه السلام، هود عليه السلام، إبراهيم عليه السلام، إسماعيل عليه السلام، لوط عليه السلام، إسحاق عليه السلام، يعقوب عليه السلام، يوسف عليه السلام، شعيب عليه السلام، أيوب عليه السلام، هارون عليه السلام، موسى عليه السلام، ذو الكفل عليه السلام، داود عليه السلام، سليمان عليه السلام، اليسع عليه السلام، إلياس عليه السلام، يونس عليه السلام، زكريا عليه السلام، يحي عليه السلام، عيسى عليه السلام، محمد صلوات الله عليه.)
    `,
      },
      {
        active: false,
        id: 15,
        qes: "كم لبث نوح بدعوة قومه لعبادة الله؟",
        answer: "تسعمائة وخمسون عاماً.",
      },
      {
        active: false,
        id: 16,
        qes: "من أول الرسل؟",
        answer: "نوح عليه السلام.",
      },
      {
        active: false,
        id: 17,
        qes: "من هما النبيان اللذان جعل الله في ذريتهما النبوة؟",
        answer: "نوح وابراهيم عليهما السلام.",
      },
      {
        active: false,
        id: 18,
        qes: "نجى الله أهل نوح عليه السلام إلا اثنين مَن هما؟",
        answer: "ابنه وزوجته.",
      },
      {
        active: false,
        id: 19,
        qes: "نبيان امرأة كل واحد منهما كافرة من هما؟",
        answer: "نوح ولوط عليهما السلام.",
      },
      {
        active: false,
        id: 20,
        qes: "من هو النبي الملقب بالصديق؟",
        answer: "النبي يوسف عليه السلام.",
      },
      {
        active: false,
        id: 21,
        qes: "من هو النبي الذي لقب بكليم الله؟",
        answer: "شعيب عليه السلام.",
      },
      {
        active: false,
        id: 22,
        qes: "من هو خليل الله؟",
        answer: "ابراهيم عليه السلام.",
      },
      {
        active: false,
        id: 23,
        qes: "من هو النبي الملقب بروح الله؟",
        answer: "عيسى عليه السلام.",
      },
      {
        active: false,
        id: 24,
        qes: "من هو النبي الذي كان اسمه بذي النون؟",
        answer: "يونس عليه السلام.",
      },
      {
        active: false,
        id: 25,
        qes: "من هو النبي الذي لقب بشيخ المسلمين؟",
        answer: "نوح عليه السلام.",
      },
      {
        active: false,
        id: 26,
        qes: "من هو النبي الملك؟",
        answer: "سليمان عليه السلام.",
      },
      {
        active: false,
        id: 27,
        qes: "من هو النبي الذي لقب بخليفة الله؟",
        answer: "داود عليه السلام.",
      },
      {
        active: false,
        id: 28,
        qes: "من هو النبي الملقب بسيد الأولين وسيد الآخرين؟",
        answer: "محمد عليه الصلاة والسلام.",
      },
      {
        active: false,
        id: 29,
        qes: "من هو النبي الملقب بالمسيح؟",
        answer: "عيسى علي السلام.",
      },
      {
        active: false,
        id: 30,
        qes: "من هو النبي الذي لقب بأبي اليهود؟",
        answer: "يعقوب عليه السلام.",
      },
      {
        active: false,
        id: 31,
        qes: "ما هو لقب النبي يعقوب؟",
        answer: "إسرائيل",
      },
      {
        active: false,
        id: 32,
        qes: "أي من الأنبياء سيقتل المسيح الدجال؟",
        answer: "عيسى عليه السلام.",
      },
      {
        active: false,
        id: 33,
        qes: "كم يبلغ طول سيدنا آدم؟",
        answer: "ستون ذراعاً.",
      },
      {
        active: false,
        id: 34,
        qes: "من هو أول الأنبياء سيقوم بقرع باب الجنة؟",
        answer: "محمد عليه الصلاة والسلام.",
      },
      {
        active: false,
        id: 35,
        qes: "من هو النبي الذي آمن جميع قومه بما أُنزل إليه؟",
        answer: "يونس عليه السلام.",
      },
      {
        active: false,
        id: 36,
        qes: "من أول رسول إلى أهل الأرض؟",
        answer: "نوح عليه السلام.",
      },
      {
        active: false,
        id: 37,
        qes: "كم عدد أبناء سيدنا إبراهيم عليه السلام؟",
        answer: "عددهم اثنان اسماعيل واسحاق.",
      },
      {
        active: false,
        id: 38,
        qes: "ما اسم ناقة النبي صالح؟",
        answer: "القصواء",
      },
      {
        active: false,
        id: 39,
        qes: "كيف أهلك الله عاد قوم هود؟",
        answer: "بريح صرصر عاتية.",
      },
      {
        active: false,
        id: 40,
        qes: "من هو النبي الذي ألان الله له الحديد؟",
        answer: "داود عليه السلام.",
      },
      {
        active: false,
        id: 41,
        qes: "كم حج النبي محمد واعتمر؟",
        answer: "حج مرة واحدة واعتمر 4 مرات.",
      },
      {
        active: false,
        id: 42,
        qes: "من أول من قاتل بالسيف من الأنبياء؟",
        answer: "إبراهيم عليه السلام.",
      },
      {
        active: false,
        id: 43,
        qes: "من هو الملك الذي أمر بحرق سيدنا إبراهيم؟",
        answer: "النمرود.",
      },
      {
        active: false,
        id: 44,
        qes: "من هي أول امرأة تزوجها ابراهيم عليه السلام؟",
        answer: "سارة.",
      },
      {
        active: false,
        id: 45,
        qes: "من هو النبي الذي بقي حياً حتى الآن؟",
        answer: "عيسى عليه السلام.",
      },
    ],
  },
  {
    name: "quran",
    data: [
      {
        active: true,
        id: 1,
        qes: "على من أُنزل القرآن الكريم؟",
        answer: "على النبي محمد صلى الله عليه وسلم.",
      },
      {
        active: false,
        id: 2,
        qes: "من خلال من تم إرسال الوحي للقرآن الكريم؟",
        answer: "من خلال الملاك جبريل عليه السلام.",
      },
      {
        active: false,
        id: 3,
        qes: "ما هي الليلة التي نزل فيها القرآن؟",
        answer: "في شهر رمضان، ليلة القدر1.",
      },
      {
        active: false,
        id: 4,
        qes: "  أين أُنزل القرآن الكريم أول مرة على النبي محمد صلى الله عليه وسلم؟ ",
        answer: "في غار حراء بالقرب من مكة المكرمة",
      },
      {
        active: false,
        id: 5,
        qes: "ما هي أول سورة نزلت من القرآن الكريم؟",
        answer: "أول سورة نزلت من القرآن هي سورة العلق.",
      },

      {
        active: false,
        id: 6,
        qes: "كم عدد سور القرآن الكريم؟",
        answer: "أطول سورة هي سورة البقرة",
      },
      {
        active: false,
        id: 7,
        qes: "ما هي أطول سورة في القرآن الكريم؟",
        answer: "أقصر سورة هي سورة الكوثر",
      },
      {
        active: false,
        id: 8,
        qes: "ما هي أقصر سورة في القرآن الكريم؟ ",
        answer: "في شهر رمضان، ليلة القدر1.",
      },
      {
        active: false,
        id: 9,
        qes: " ما هي السورة التي تُعرف بأنها قلب القرآن؟",
        answer: "سورة يس",
      },
      {
        active: false,
        id: 10,
        qes: "ما هي السورة التي لا تبدأ بـ “بسم الله الرحمن الرحيم”؟",
        answer: "سورة التوبة",
      },

      {
        active: false,
        id: 11,
        qes: "كم عدد الأجزاء في القرآن الكريم؟ ",
        answer: "القرآن الكريم مقسم إلى 30 جزءًا",
      },
      {
        active: false,
        id: 12,
        qes: "ما هي السورة التي تُسمى بـ “عروس القرآن”؟",
        answer: "سورة الرحمن",
      },
      {
        active: false,
        id: 13,
        qes: "ما هي السورة التي تحتوي على آية الكرسي؟",
        answer: "سورة البقرة",
      },
      {
        active: false,
        id: 14,
        qes: " ما هي السورة التي تُعرف بأنها تعادل ثلث القرآن؟",
        answer: "سورة الإخلاص",
      },
      {
        active: false,
        id: 15,
        qes: "كم عدد المرات التي يُذكر فيها اسم النبي محمد صلى الله عليه وسلم في القرآن؟",
        answer: " يُذكر اسمه أربع مرات",
      },

      {
        active: false,
        id: 16,
        qes: "ما هي السورة التي تحتوي على اسم الله في كل آية من آياتها؟",
        answer: "سورة المجادلة",
      },
      {
        active: false,
        id: 17,
        qes: "ما هو العدد الإجمالي للآيات في القرآن الكريم؟",
        answer: "يحتوي القرآن الكريم على 6236 آية",
      },
      {
        active: false,
        id: 18,
        qes: "ما هي السورة التي تُقرأ لطلب الحماية من الحسد والشر؟",
        answer: "سورة الفلق وسورة الناس",
      },
      {
        active: false,
        id: 19,
        qes: "  ما هي السورة التي ذُكر فيها اسم نبي ولم يُذكر في أي سورة أخرى؟ ",
        answer:
          " سورة صاد، حيث يُذكر فيها اسم نبي الله “ذو الكفل” وهو لم يُذكر في أي مكان آخر في القرآن",
      },
      {
        active: false,
        id: 20,
        qes: "ما هي الآية الوحيدة في القرآن التي تحتوي على جميع حروف اللغة العربية؟",
        answer: " آية النور في سورة النور، وهي الآية رقم 35",
      },
    ],
  },
  {
    name: "jurisprudence",
    data: [
      {
        active: true,
        id: 1,
        qes: "ما هو الفقه الإسلامي؟",
        answer:
          "الفقه الإسلامي هو علم يُعنى بدراسة الأحكام الشرعية المستنبطة من الأدلة الدينية كالقرآن والسنة.",
      },
      {
        active: false,
        id: 2,
        qes: "ما هي أركان الإسلام الخمسة؟",
        answer:
          "أركان الإسلام الخمسة هي: الشهادتان، الصلاة، الزكاة، الصوم في رمضان، والحج لمن استطاع إليه سبيلاً.",
      },
      {
        active: false,
        id: 3,
        qes: "ما المقصود بالحلال والحرام؟",
        answer:
          "الحلال هو كل ما أباحه الله ورسوله للمسلمين، والحرام هو كل ما حُرِّم عليهم.",
      },
      {
        active: false,
        id: 4,
        qes: "ما هي الصلوات الواجبة على كل مسلم؟",
        answer:
          "الصلوات الخمس الواجبة هي: الفجر، الظهر، العصر، المغرب، والعشاء.",
      },
      {
        active: false,
        id: 5,
        qes: "ما هي الزكاة ومن يجب عليه دفعها؟",
        answer:
          "الزكاة هي فريضة مالية واجبة على كل مسلم يملك نصابًا معينًا من المال وقد مر عليه الحول (السنة القمرية).",
      },
      {
        active: false,
        id: 6,
        qes: " ما هي الشروط الواجب توافرها لصحة الصلاة؟",
        answer: "الطهارة، تغطية العورة، استقبال القبلة، والنية.",
      },
      {
        active: false,
        id: 7,
        qes: "ما هي أنواع الطهارة في الإسلام؟",
        answer: " الطهارة من الحدث والطهارة من الخبث.",
      },
      {
        active: false,
        id: 8,
        qes: "ما هي الأمور التي توجب الغسل؟",
        answer: "الجنابة، الحيض، والنفاس.",
      },
      {
        active: false,
        id: 9,
        qes: "ما هي أحكام الإحرام في الحج والعمرة؟",
        answer: "  النية، التلبية، وتجنب المحظورات.",
      },
      {
        active: false,
        id: 10,
        qes: " ما هي أحكام القصاص في الفقه الإسلامي؟ ",
        answer: " القصاص في النفس والأطراف عند القتل أو الجرح.",
      },
      {
        active: false,
        id: 11,
        qes: " ما هي أحكام العدة ومتى تجب؟",
        answer: " الفترة التي تنتظرها المرأة بعد الطلاق أو وفاة الزوج. ",
      },
      {
        active: false,
        id: 12,
        qes: "ما هو النصاب الشرعي لزكاة المال؟",
        answer: "مقدار النصاب هو ما يعادل 85 جرامًا من الذهب.",
      },
      {
        active: false,
        id: 13,
        qes: "ما هي الأشياء التي تنقض الوضوء؟",
        answer: "الخارج من السبيلين، النوم العميق، ولمس العورة بدون حائل.",
      },
      {
        active: false,
        id: 14,
        qes: "ما هو مقدار فدية الصوم؟",
        answer: " إطعام مسكين لكل يوم عن الصيام.",
      },
      {
        active: false,
        id: 15,
        qes: "ما هو مقدار زكاة الفطر؟",
        answer: "صاع من طعام أو قيمته نقدً.",
      },

      {
        active: false,
        id: 16,
        qes: "ما هي الوقف والهبة في الفقه الإسلامي؟",
        answer:
          " الوقف هو تحبيس الأصل وتسبيل المنفعة، والهبة هي التبرع بالمال بدون مقابل.",
      },
      {
        active: false,
        id: 17,
        qes: " ما هي الأمور التي تنقض الصيام؟",
        answer: " الأكل والشرب عمدًا، وغيرها.",
      },
      {
        active: false,
        id: 18,
        qes: " ما هي الأمور التي تجب فيها الكفارة؟",
        answer: "  الحنث في اليمين، القتل الخطأ، والجماع في نهار رمضان. ",
      },
      {
        active: false,
        id: 19,
        qes: "ما هو الصيام في الإسلام؟",
        answer: "الامتناع عن الأكل والشرب من الفجر حتى المغرب",
      },
      {
        active: false,
        id: 20,
        qes: "ما هو الإمساك في رمضان؟",
        answer: "التوقف عن تناول الطعام والشرب قبل الفجر",
      },
      {
        active: false,
        id: 21,
        qes: "ما هو الإحسان؟",
        answer: "العمل الصالح والتعامل الحسن مع الخلق",
      },
      {
        active: false,
        id: 22,
        qes: "ما هو الإيمان؟",
        answer: "التصديق بالقلب والإقرار باللسان والعمل بالأركان",
      },
      {
        active: false,
        id: 23,
        qes: "ما هو الإسلام؟",
        answer: "الاستسلام لله بالتوحيد والطاعة",
      },
      {
        active: false,
        id: 24,
        qes: "ما هي شروط الطهارة؟",
        answer: "إزالة النجاسة، النية، واستعمال الماء الطهور",
      },
    ],
  },
  {
    name: "history",
    data: [
      {
        active: true,
        id: 1,
        qes: "ما هي أول معركة في التاريخ الإسلامي؟",
        answer: "هي غزوة بدر، وقد حدثت في العام الثاني بعد الهجرة",
      },
      {
        active: false,
        id: 2,
        qes: "من هم الخلفاء الراشدون",
        answer:
          "هم: أبو بكر الصديق، عمر بن الخطاب، عثمان بن عفان، وعلي بن أبي طالب.",
      },
      {
        active: false,
        id: 3,
        qes: "لماذا سقطت الأندلس؟",
        answer:
          "سقطت الأندلس لعدة أسباب منها انتشار الفواحش والبُعد عن الدين، وانصراف بعض الملوك إلى الترف.",
      },
      {
        active: false,
        id: 4,
        qes: "من جمع القرآن الكريم في مصحف واحد؟ (كان مسؤول عن الامر)",
        answer: "الصحابي زيد بن ثابت.",
      },
      {
        active: false,
        id: 5,
        qes: "ما هو اسم ملك الحبشة والذي قد أمر النبي محمد صلى الله عليه وسلم أصحابه بالهجرة إليه؟",
        answer: "كان اسمه النجاشي",
      },

      {
        active: false,
        id: 6,
        qes: "ما هو الحدث الذي يُعرف بالإسراء والمعراج؟",
        answer: "رحلة النبي محمد ليلًا من مكة إلى القدس ثم صعوده إلى السماوات",
      },
      {
        active: false,
        id: 7,
        qes: "ما اسم المعركة التي كانت الأولى في الإسلام؟",
        answer: "معركة بدر.",
      },
      {
        active: false,
        id: 8,
        qes: "ما هي السورة التي نزلت بعد فتح مكة؟",
        answer: "سورة الفتح.",
      },
      {
        active: false,
        id: 9,
        qes: "من هو الصحابي الذي فتح القسطنطينية؟",
        answer:
          "أبو أيوب الأنصاري شارك في الحصار، ولكن الفتح الكامل كان في عهد السلطان محمد الفاتح.",
      },
      {
        active: false,
        id: 10,
        qes: "ما هي الغزوة التي تُعرف بأنها غزوة الفرقان؟",
        answer: "غزوة بدر.",
      },

      {
        active: false,
        id: 11,
        qes: "من هو الصحابي الذي نام في فراش النبي ليلة الهجرة؟",
        answer: "الصحابي علي بن أبي طالب.",
      },
      {
        active: false,
        id: 12,
        qes: "ما هو العام الذي يُعرف بعام الحزن؟",
        answer: "العام الذي توفيت فيه خديجة وأبو طالب.",
      },
      {
        active: false,
        id: 13,
        qes: "ما هي المدينة التي هاجر إليها النبي من مكة؟",
        answer: "المدينة المنورة.",
      },
      {
        active: false,
        id: 14,
        qes: "من هو الخليفة الذي جمع القرآن الكريم؟ (الذي أمر بهذا)",
        answer: "أبو بكر الصديق.",
      },
      {
        active: false,
        id: 15,
        qes: "ما هي المعركة التي استشهد فيها حمزة بن عبد المطلب؟",
        answer: "معركة أحد.",
      },

      {
        active: false,
        id: 16,
        qes: "من هو أول الخلفاء الراشدين؟",
        answer: "أبو بكر الصديق.",
      },
      {
        active: false,
        id: 17,
        qes: "ما هي المعركة التي انتصر فيها المسلمون على الفرس؟",
        answer: "معركة القادسية.",
      },
      {
        active: false,
        id: 18,
        qes: "كيف توفي عثمان بن عفان؟",
        answer: "تم اغتياله خلال الفتنة.",
      },
      {
        active: false,
        id: 19,
        qes: "من قام بتوسيع الدولة الإسلامية وإنشاء ديوان العدل.",
        answer: "عمر بن الخطاب.",
      },
      {
        active: false,
        id: 20,
        qes: "ما هي المعركة التي انتصر فيها المسلمون على الروم؟",
        answer: "معركة اليرموك",
      },

      {
        active: false,
        id: 21,
        qes: "من هو الخليفة الذي عُرف بتوسعة المسجد النبوي؟",
        answer: "عمر بن الخطاب.",
      },
      {
        active: false,
        id: 22,
        qes: "من هو الخليفة الذي استشهد في صلاة الفجر؟",
        answer: "عمر بن الخطاب.",
      },
      {
        active: false,
        id: 23,
        qes: "من هو مؤسس الدولة الأموية؟",
        answer: "معاوية بن أبي سفيان.",
      },
      {
        active: false,
        id: 24,
        qes: "ما هو الحدث الذي يُعرف بمعركة عين جالوت؟",
        answer: "معركة بين المسلمين والمغول انتهت بانتصار المسلمين.",
      },
      {
        active: false,
        id: 25,
        qes: "كيف انتهت الدولة الأموية؟",
        answer: "انتهت بقيام الدولة العباسية.",
      },

      {
        active: false,
        id: 26,
        qes: "ما هي العاصمة الأموية؟",
        answer: "دمشق.",
      },
      {
        active: false,
        id: 27,
        qes: "من هو الخليفة الأموي الذي عُرف بالعدل؟",
        answer: "عمر بن عبد العزيز.",
      },
      {
        active: false,
        id: 28,
        qes: "ما هي المعركة التي فتح فيها المسلمون الأندلس؟",
        answer: "معركة وادي لكة.",
      },
      {
        active: false,
        id: 29,
        qes: "ما هو الإنجاز البحري الكبير للدولة الأموية؟",
        answer: "إنشاء الأسطول البحري والسيطرة على البحر المتوسط.",
      },
      {
        active: false,
        id: 30,
        qes: "من هو الخليفة العباسي الذي عُرف بالعصر الذهبي للعلوم؟",
        answer: "الخليفة هارون الرشيد.",
      },

      {
        active: false,
        id: 31,
        qes: "ما هي العاصمة العباسية؟",
        answer: "بغداد.",
      },
      {
        active: false,
        id: 32,
        qes: "كيف تعامل العباسيون مع الفتوحات الإسلامية؟",
        answer: "ركزوا على الإدارة والثقافة أكثر من التوسع.",
      },
      {
        active: false,
        id: 33,
        qes: "من هو الخليفة العباسي الذي أسس مدينة القاهرة؟",
        answer: "المعز لدين الله الفاطمي.",
      },
      {
        active: false,
        id: 34,
        qes: "ما هي المعركة التي أوقفت تقدم المغول في العالم الإسلامي؟",
        answer: "معركة عين جالوت.",
      },
      {
        active: false,
        id: 35,
        qes: "ما هو الحدث الذي يُعرف بفتح الأندلس؟",
        answer: "دخول المسلمين بقيادة طارق بن زياد إلى شبه الجزيرة الإيبيرية.",
      },

      {
        active: false,
        id: 36,
        qes: "من هو القائد الذي قاد المسلمين في معركة الزلاقة؟",
        answer: "يوسف بن تاشفين.",
      },
      {
        active: false,
        id: 37,
        qes: "ما هي الدولة التي قامت في الأندلس بعد سقوط الخلافة الأموية؟",
        answer: "دولة الأمراء أو الطوائف.",
      },
      {
        active: false,
        id: 38,
        qes: "من هو القائد الذي استرد القدس من الصليبيين؟",
        answer: "صلاح الدين الأيوبي.",
      },
      {
        active: false,
        id: 39,
        qes: "من هو الصحابي الذي كان يُلقب بـ'سيف الله المسلول'؟",
        answer: "خالد بن الوليد.",
      },
      {
        active: false,
        id: 40,
        qes: "ما هي الوثيقة التي وضعها النبي محمد لتنظيم العلاقات بين المسلمين وغيرهم في المدينة ",
        answer: "وثيقة المدينة.",
      },
    ],
  },
];
const prophetsData = [
  {
    determination: false,
    id: 1,
    name: "أدم",
    image: require("./assets/images/adam.jpeg"),
    description:
      "هو أول البشر والنبي الأول في الإسلام، خُلق من تراب وكُرّم بالسجود من الملائكة. عُرف بأبي البشرية وقصته تتضمن الإقامة في الجنة والتحذير من إبليس",
    links: [
      {
        content: "وعي الجزء 1",
        url: "https://www.youtube.com/watch?v=s31fucb5OsU",
      },
      {
        content: "وعي 2",
        url: "https://www.youtube.com/watch?v=hZd_IBfvTbA",
      },
      {
        content: "(كيف خلق الله أدم) نبيل العوضي",
        url: "https://youtu.be/UObVkPIFTcI?si=U_uuaKtZ9sLxXYTO",
      },
      {
        content: "(لماذا لم يسجد ابليس) نبيل العوضي",
        url: "https://youtu.be/XmbwtznQUB0?si=Xo8pUiKbwRu0cgA1",
      },
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/VQtyczrmgDU?si=P_5d6od3bdJQKzxB",
      },
    ],
  },
  {
    determination: false,
    id: 2,
    name: "إدريس عليه السلام",
    image: require("./assets/images/edres.jpg"),
    description:
      "يُعتقد أنه كان من الأنبياء الذين جاءوا بعد آدم وقبل نوح. وهو معروف بحكمته وعلمه، ويُقال إنه كان أول من خط بالقلم. وقد ذُكر في القرآن الكريم بأنه كان صديقًا نبيًا وأن الله رفعه مكانًا عليًا.",

    // links: [
    //   {
    //     content: "",
    //     url: "",
    //   },
    //   {
    //     content: "",
    //     url: "",
    //   },
    // ],
  },
  {
    determination: true,
    id: 3,
    name: "نوح عليه السلام",
    image: require("./assets/images/noh2.jpg"),
    description:
      "هو أحد الأنبياء الخمسة أولي العزم، وقد دعا قومه إلى عبادة الله وحده وترك الأصنام لمدة تزيد عن 950 عامًا. ولكن قومه رفضوا دعوته فأرسل الله عليهم الطوفان العظيم الذي أغرق الكافرين، بينما نجا نوح والمؤمنون معه في السفينة.",

    links: [
      {
        content: "وعي 1",
        url: "https://www.youtube.com/watch?v=hYy7TSLnfbw",
      },
      {
        content: "وعي 2",
        url: "https://www.youtube.com/watch?v=byp0HgspP_A",
      },
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/U1b6uIe9LmM?si=D5MBymS4Yy50iUso",
      },
    ],
  },
  {
    determination: false,
    id: 4,
    name: "هود عليه السلام",
    image: require("./assets/images/hod.jpg"),
    description:
      "بُعث إلى قوم عاد الذين كانوا يعيشون في منطقة تُعرف اليوم بالأحقاف في اليمن. وقد دعاهم إلى عبادة الله وحده وترك الأصنام، لكنهم رفضوا دعوته وأصروا على الكفر والطغيان، فأهلكهم الله بريح صرصر عاتية.",

    links: [
      {
        content: "وعى",
        url: "https://www.youtube.com/watch?v=wyP__uKGzfQ",
      },
      // {
      //   content: "",
      //   url: "",
      // },
    ],
  },
  {
    determination: false,
    id: 5,
    name: "صالح عليه السلام",
    image: require("./assets/images/saleh.jpg"),
    description:
      "أرسل إلى قوم ثمود الذين عاشوا في منطقة الحجر، وقد دعاهم إلى التوحيد وترك عبادة الأصنام. وأيده الله بمعجزة الناقة التي انشقت من الصخر، لكن قومه قتلوا الناقة وعصوا أمر الله، فأهلكهم الله بصيحة عظيمة.",

    links: [
      {
        content: "وعى",
        url: "https://www.youtube.com/watch?v=UnB0CTWxq98",
      },
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/ck6vaENGENg?si=xVJO-1Gil8mZUcjs",
      },
    ],
  },
  {
    determination: true,
    id: 6,
    name: "إبراهيم عليه السلام.",
    image: require("./assets/images/abrahem.jpeg"),

    description:
      "المعروف بخليل الله، هو أحد أولي العزم من الرسل وأبو الأنبياء. دعا قومه لترك عبادة الأصنام والتوحيد بالله، ومر بابتلاءات عظيمة مثل قذفه في النار وأمر الله له بذبح ابنه إسماعيل، الذي فُدِيَ بكبش",
    links: [
      {
        content: "وعي 1",
        url: "https://www.youtube.com/watch?v=pc4aUaoq5fc",
      },
      {
        content: "وعي 2",
        url: "https://www.youtube.com/watch?v=tvGkYJ87YTo",
      },
      {
        content: "وعي 3",
        url: "https://www.youtube.com/watch?v=x1XX_S9N4oA",
      },
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/G5sO3nBi-gM?si=3VVESu8TF-1wWeAc",
      },
    ],
  },
  {
    determination: false,
    id: 7,
    name: "لوط عليه السلام",
    image: require("./assets/images/loot.jpg"),
    description:
      "نبي أرسله الله تعالى لقومه الذين كانوا يقطنون في منطقة البحر الميت، وقد عُرف بدعوته لقومه للإقلاع عن المعاصي والفواحش.",

    links: [
      {
        content: "وعى",
        url: "https://www.youtube.com/watch?v=xxFtMgKTm5U",
      },
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/xKc6_kZYq9I?si=64aC-N_KrHCIePk_",
      },
    ],
  },
  {
    determination: false,
    id: 8,
    name: "إسماعيل عليه السلام",
    image: require("./assets/images/esma3el.png"),
    description:
      "هو ابن النبي إبراهيم عليه السلام والسيدة هاجر، وُلد في أرض الشام وعُرف بصبره وتحمله. كانت حياته مليئة بالتجارب والابتلاءات، وهو أحد أجداد النبي محمد صلى الله عليه وسلم",

    links: [
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/xKc6_kZYq9I?si=64aC-N_KrHCIePk_",
      },
      //   {
      //     content: "",
      //     url: "",
      //   },
    ],
  },

  {
    determination: false,
    id: 9,
    name: "إسحاق عليه السلام",
    image: require("./assets/images/es7ak.jpg"),
    description:
      "هو ابن النبي إبراهيم عليه السلام والسيدة سارة، ويُعتبر من الأنبياء الذين بُشروا بالنبوة والصلاح",

    links: [
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/xKc6_kZYq9I?si=64aC-N_KrHCIePk_",
      },
      // {
      //   content: "",
      //   url: "",
      // },
    ],
  },
  {
    determination: false,
    id: 10,
    name: "يعقوب عليه السلام",
    image: require("./assets/images/y3kob.png"),
    description:
      "المعروف أيضًا بإسرائيل، هو ابن النبي إسحاق وأبو الأسباط الاثني عشر، وقد عُرف بصبره الجميل على فقدان ابنه يوسف",

    // links: [
    //   {
    //     content: "",
    //     url: "",
    //   },
    //   {
    //     content: "",
    //     url: "",
    //   },
    // ],
  },
  {
    determination: false,
    id: 11,
    name: "يوسف عليه السلام",
    image: require("./assets/images/yosof.gif"),
    description:
      "ابن النبي يعقوب، معروف بجماله وحكمته، وقصته مليئة بالدروس والعبر، وقد ذُكرت قصته بتفصيل في سورة يوسف",

    links: [
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/eLC6K7YyIIU?si=GO67Vo9UfdSDvdLW",
      },
      {
        content: "(يوسف وأخوته) نبيل العوضي",
        url: "https://youtu.be/Qxx9vSAXIRg?si=v-Nj7npkjQZnpuQA",
      },
    ],
  },
  {
    determination: false,
    id: 12,
    name: "شعيب عليه السلام",
    image: require("./assets/images/sho3ib.jpg"),
    description:
      "نبي أرسله الله لأهل مدين، دعاهم لعبادة الله والإقلاع عن الغش في المكيال والميزان.",

    links: [
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/xKc6_kZYq9I?si=64aC-N_KrHCIePk_",
      },
      //   {
      //     content: ,
      //     url: "",
      //   },
    ],
  },
  {
    determination: false,
    id: 13,
    name: "أيوب عليه السلام",
    image: require("./assets/images/ayob.jpg"),
    description:
      "نبي معروف بصبره العظيم على البلاء والمرض، وقد ذُكر في القرآن كمثال للصابرين.",

    links: [
      {
        content: "وعي",
        url: "https://www.youtube.com/watch?v=ptJLT1ShVgE",
      },
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/S-hwVKViokc?si=Dr1YiHlJJGLgdmX-",
      },
    ],
  },
  {
    determination: false,
    id: 14,
    name: "ذو الكفل عليه السلام",
    image: require("./assets/images/zoalkafal.jpg"),
    description:
      "ذُكر في القرآن الكريم ويُعتقد أنه كان نبيًا صالحًا ومُلتزمًا بعهده مع الله.",

    // links: [
    //   {
    //     content: ,
    //     url: "",
    //   },
    //   {
    //     content: ,
    //     url: "",
    //   },
    // ],
  },
  {
    determination: true,
    id: 15,
    name: "موسى عليه السلام",
    image: require("./assets/images/mosa.jpg"),
    description:
      "من أولي العزم من الرسل، أرسله الله لفرعون وقومه، وقد أُعطي التوراة وقاد بني إسرائيل من مصر.",

    links: [
      {
        content: "1 نبيل العوضي",
        url: "https://youtu.be/S-hwVKViokc?si=Dr1YiHlJJGLgdmX-",
      },
      {
        content: "نبيل العوضيل 2",
        url: "https://youtu.be/wvtWBHguRh0?si=O4tr7COV2B2TNSp8",
      },
    ],
  },
  {
    determination: false,
    id: 16,
    name: "هارون عليه السلام",
    image: require("./assets/images/haron.jpg"),
    description:
      "هو أخو النبي موسى ووزيره، وقد ساعده في دعوة فرعون وقومه للإيمان بالله تعالى.",

    // links: [
    //   {
    //     content: ,
    //     url: "",
    //   },
    //   {
    //     content: ,
    //     url: "",
    //   },
    // ],
  },
  {
    determination: false,
    id: 17,
    name: "داود عليه السلام",
    image: require("./assets/images/dawood.jpg"),
    description:
      "نبي وملك، معروف بصوته الجميل في تسبيح الله، وقد أُنزل عليه الزبور.",

    links: [
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/2lyl2XOMhqs?si=DEvlJfyDaPmD7Jsh",
      },
      //   {
      //     content: ,
      //     url: "",
      //   },
    ],
  },
  {
    determination: false,
    id: 18,
    name: "سليمان عليه السلام",
    image: require("./assets/images/soliman.jpg"),
    description:
      "كان نبي الله وابن داود عليه السلام. اشتهر بحكمته وقدرته على التحدث مع الحيوانات والجن",

    links: [
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/2lyl2XOMhqs?si=DEvlJfyDaPmD7Jsh",
      },
      //   {
      //     content: ,
      //     url: "",
      //   },
    ],
  },
  {
    determination: false,
    id: 19,
    name: "اليسع عليه السلام",
    image: require("./assets/images/elyas3.jpg"),
    description: "يُعتقد أنه كان خليفة إلياس عليه السلام وواصل دعوته.",

    // links: [
    //   {
    //     content: ,
    //     url: "",
    //   },
    //   {
    //     content: ,
    //     url: "",
    //   },
    // ],
  },
  {
    determination: false,
    id: 20,
    name: "إلياس عليه السلام",
    image: require("./assets/images/elyas.jpg"),
    description:
      "كان نبيًا أُرسل إلى أهل بعلبك ليدعوهم إلى عبادة الله وترك عبادة الأصنام",

    // links: [
    //   {
    //     content: ,
    //     url: "",
    //   },
    //   {
    //     content: ,
    //     url: "",
    //   },
    // ],
  },
  {
    determination: false,
    id: 21,
    name: "يونس  عليه السلام",
    image: require("./assets/images/yonos.jpg"),
    description:
      "نبي أرسله الله إلى قومه ليدعوهم إلى الإيمان، وهو معروف بقصة الحوت",

    links: [
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/S-hwVKViokc?si=Dr1YiHlJJGLgdmX-",
      },
      //   {
      //     content: ,
      //     url: "",
      //   },
    ],
  },
  {
    determination: false,
    id: 22,
    name: "زكريا عليه السلام",
    image: require("./assets/images/zkria.jpg"),
    description:
      "كان نبيًا وكفيل مريم العذراء، ودعا الله فأُعطي يحيى عليه السلام4.",

    links: [
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/2lyl2XOMhqs?si=DEvlJfyDaPmD7Jsh",
      },
      //   {
      //     content: ,
      //     url: "",
      //   },
    ],
  },
  {
    determination: false,
    id: 23,
    name: "يحي عليه السلام",
    image: require("./assets/images/ye7ya.gif"),
    description:
      "كان نبيًا بارًا بوالديه، معروفًا بحكمته وتقواه، وكان أول من آمن بدعوة عيسى عليه السلام",

    links: [
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/2lyl2XOMhqs?si=DEvlJfyDaPmD7Jsh",
      },
      //   {
      //     content: ,
      //     url: "",
      //   },
    ],
  },
  {
    determination: true,
    id: 24,
    name: "عيسى عليه السلام",
    image: require("./assets/images/3esa.jpg"),
    description:
      "هو رسول الله الذي حمل الإنجيل ودعا الناس إلى التوحيد وهو من أولي العزم من الرسل",

    links: [
      {
        content: "نبيل العوضي",
        url: "https://youtu.be/4cxCcYlJXbY?si=p9SHMtNF7fS3Fa7q",
      },
      //   {
      //     content: ,
      //     url: "",
      //   },
    ],
  },
  {
    determination: true,
    id: 25,
    name: "محمد عليه السلام",
    image: require("./assets/images/mohamed.jpg"),
    description:
      "هو خاتم الأنبياء والمرسلين، جاء برسالة الإسلام ليتمم مكارم الأخلاق ويدعو الناس إلى عبادة الله الواحد الأحد.",

    links: [
      {
        content: "نبيل العوضي (نزول الوحي)",
        url: "https://youtu.be/d5vq2Ly9LBw?si=LuVgRBGX_3lMS3o3",
      },
      //   {
      //     content: ,
      //     url: "",
      //   },
    ],
  },
];
export { questionsData, prophetsData };
