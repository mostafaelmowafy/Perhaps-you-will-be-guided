const questionsData = [
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
];
const prophetsData = [
  {
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 7,
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
    id: 8,
    name: "لوط عليه السلام",
    image: require("./assets/images/loot.webp"),
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
    id: 14,
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
    id: 16,
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
