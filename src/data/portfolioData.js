// ============================================================================
// ALL the content of the site lives in this file (English + Arabic).
// To change any text, link, project or picture, change it here.
// ============================================================================

export const contact = {
  whatsapp: "963935394498", // international format, digits only (used in wa.me links)
  whatsappDisplay: "+963 935 394 498",
  email: "hamzaheshmeh9@gmail.com",
  linkedin: "https://www.linkedin.com/in/hamza-hashma",
  github: "", // e.g. "https://github.com/your-username" (empty = hidden)
  resumeUrl: "", // e.g. "/Hamza_Hashma_CV.pdf" after you put the PDF in /public (empty = hidden)
};

// Screenshots for the laptop and phone at the top of the home page.
// Empty = the working Team Flow demo is shown instead.
export const heroShots = {
  laptop: "",
  phone: "",
};

// ---------------------------------------------------------------------------
// PROJECTS
// Each project gets its own page at  #/project/<slug>
// Pictures: put the files in  public/projects/<slug>/  and list them in
// `images`, e.g.  { src: "/projects/team-flow/dashboard.png", frame: "laptop", caption: { en: "Admin dashboard", ar: "لوحة المدير" } }
// `frame`: "laptop", "phone" or "none". `year`, `liveLink`, `codeLink`: empty = hidden.
// `featured: true` shows the project big at the top.
// ---------------------------------------------------------------------------
export const projects = [
  {
    slug: "team-flow",
    mock: "attendance", // drawn screen shown until you add real screenshots in `images`
    year: "2025 – 2026",
    tags: ["Flutter", "Node.js", "Express", "MySQL", "AI API"],
    images: [],
    liveLink: "",
    codeLink: "",
    featured: true,
    text: {
      en: {
        category: "Damascus International Airport project",
        title: "Team Flow",
        subtitle: "Workforce, attendance and payroll system",
        summary: "The system that manages attendance and pay for about 125 workers on the Damascus International Airport project, built for ASIK Engineering Construction.",
        role: "Sole developer: requirements, design, mobile and web app, back end, database and deployment",
        platforms: "Android, iPhone, web and Windows",
        problem: "On a large site with several work areas and day and night shifts, attendance, payroll and worker transfers were managed on paper and spreadsheets. A small mistake could mean a worker was paid less than he had earned.",
        solution: "I gathered needs from management, site supervisors and accountants, and built one system for all of them. Supervisors record attendance on their phones, fingerprint data is imported automatically, and payroll is calculated from approved attendance for daily, hourly and monthly staff. It is built around clear rules: no worked day can be silently lost, a paid salary can never be changed, workers' data is protected, and when information is unclear the system asks a person instead of guessing.",
        features: [
          "Daily attendance by site supervisors, with a Draft, Submitted, Approved or Rejected workflow",
          "Fingerprint device imports, punch processing and a daily review screen",
          "Day and night shifts",
          "Payroll for daily, hourly and monthly staff: preview first, then save, with Excel export",
          "Salary advances and worker transfers between sites",
          "The daily manpower report sent to the client, exported to Word",
          "Built-in AI assistant that guides each user step by step",
          "Separate roles for admin, site supervisors and staff supervisors, with an audit log",
        ],
      },
      ar: {
        category: "مشروع مطار دمشق الدولي",
        title: "Team Flow",
        subtitle: "نظام لإدارة العمال والحضور والرواتب",
        summary: "النظام الذي يدير حضور وأجور نحو 125 عاملًا في مشروع مطار دمشق الدولي، وقد بنيته لشركة ASIK للهندسة والمقاولات.",
        role: "المطوّر الوحيد: جمع المتطلبات، والتصميم، وتطبيق الموبايل والويب، والخادم، وقاعدة البيانات، والنشر",
        platforms: "أندرويد وآيفون والويب وويندوز",
        problem: "في موقع كبير يضم عدة مناطق عمل ومناوبات نهارية وليلية، كانت إدارة الحضور والرواتب ونقل العمال تتم على الورق وجداول Excel. وأي خطأ صغير قد يعني أن يتقاضى العامل أقل مما يستحق.",
        solution: "جمعت احتياجات الإدارة ومشرفي المواقع والمحاسبين، وبنيت نظامًا واحدًا يخدمهم جميعًا. يسجّل المشرفون الحضور من هواتفهم، وتُستورد بيانات البصمة تلقائيًا، وتُحسب الرواتب من الحضور المعتمد للعاملين باليومية وبالساعة وبالشهر. ويقوم النظام على قواعد واضحة: لا يضيع أي يوم عمل دون أن يُلاحظ، ولا يمكن تعديل راتب مدفوع، وبيانات العمال محمية، وعندما تكون المعلومة غير واضحة يحيلها النظام إلى شخص بدل أن يخمّن.",
        features: [
          "تسجيل الحضور اليومي من مشرفي المواقع، بمراحل: مسودة، ثم مُرسل، ثم معتمد أو مرفوض",
          "استيراد بيانات أجهزة البصمة ومعالجتها مع شاشة مراجعة يومية",
          "دعم المناوبات النهارية والليلية",
          "رواتب العاملين باليومية وبالساعة وبالشهر: معاينة أولًا ثم حفظ، مع تصدير إلى Excel",
          "السلف ونقل العمال بين المواقع",
          "تقرير القوى العاملة اليومي الذي يُرسل إلى العميل، بصيغة Word",
          "مساعد ذكاء اصطناعي داخل التطبيق يرشد كل مستخدم خطوة بخطوة",
          "أدوار منفصلة للمدير ومشرفي المواقع ومشرفي الموظفين، مع سجل تدقيق",
        ],
      },
    },
  },
  {
    slug: "equipment-flow",
    mock: "machines",
    year: "2026",
    tags: ["Flutter", "Node.js", "REST API", "PDF"],
    images: [],
    liveLink: "",
    codeLink: "",
    featured: true,
    text: {
      en: {
        category: "Damascus International Airport project",
        title: "Equipment Flow",
        subtitle: "Rented machinery, pricing and vendor invoices",
        summary: "A second system for the same project: it tracks the rented construction machinery on site, from the hours each machine works to what each vendor is paid.",
        role: "Sole developer: mobile and desktop app, back end and database",
        platforms: "Android, iPhone, web and Windows",
        problem: "Rented machines work across many areas and every vendor has its own prices. Turning paper timesheets into correct vendor payments every month was slow and easy to get wrong.",
        solution: "Supervisors record each machine's day from their phones: check in, pause and check out. Accountants work from a desktop dashboard with a live board, review the hours, upload the signed paper sheets and produce vendor payroll from the pricing rules.",
        features: [
          "Phone screens for supervisors: my sites today, the day board and rejected rows",
          "A live board and attendance review for accountants",
          "Pricing rules for each machine, with a \"test this price\" calculator",
          "Vendor payroll and invoices, fuel and adjustments",
          "Supervisors never see prices",
          "Linked to Team Flow for one combined daily project report",
        ],
      },
      ar: {
        category: "مشروع مطار دمشق الدولي",
        title: "Equipment Flow",
        subtitle: "الآليات المستأجرة وتسعيرها وفواتير المورّدين",
        summary: "نظام ثانٍ للمشروع نفسه، يتابع الآليات الإنشائية المستأجرة في الموقع، من ساعات عمل كل آلية إلى المبلغ المستحق لكل مورّد.",
        role: "المطوّر الوحيد: تطبيق الموبايل وسطح المكتب، والخادم، وقاعدة البيانات",
        platforms: "أندرويد وآيفون والويب وويندوز",
        problem: "تعمل الآليات المستأجرة في مناطق كثيرة، ولكل مورّد أسعاره. وكان تحويل جداول الدوام الورقية إلى دفعات صحيحة للمورّدين كل شهر عملًا بطيئًا وكثير الأخطاء.",
        solution: "يسجّل المشرفون يوم كل آلية من هواتفهم: بدء العمل، والتوقف، وانتهاء العمل. ويعمل المحاسبون من لوحة تحكم على الحاسوب فيها لوحة مباشرة، فيراجعون الساعات، ويرفعون الجداول الورقية الموقّعة، ويستخرجون مستحقات المورّدين وفق قواعد التسعير.",
        features: [
          "شاشات موبايل للمشرفين: مواقعي اليوم، ولوحة اليوم، والسطور المرفوضة",
          "لوحة مباشرة ومراجعة للدوام خاصة بالمحاسبين",
          "قواعد تسعير لكل آلية، مع حاسبة لتجربة السعر",
          "مستحقات المورّدين وفواتيرهم، والمحروقات والتعديلات",
          "لا يرى المشرفون الأسعار",
          "مرتبط بنظام Team Flow لإصدار تقرير يومي موحّد للمشروع",
        ],
      },
    },
  },
  {
    slug: "from-waste-to-worth",
    year: "",
    tags: ["Data analysis", "Meal planning", "Sustainability"],
    images: [],
    liveLink: "",
    codeLink: "",
    featured: false,
    text: {
      en: {
        category: "UN Global Compact challenge",
        title: "From Waste to Worth",
        subtitle: "Reducing food waste at Hôtel-Dieu de France Hospital, Beirut",
        summary: "A data-driven meal-planning solution developed with my team during the UN Global Compact challenge, now being implemented with the hospital.",
        role: "Data analysis and solution design, as part of a team",
        platforms: "Data and analysis",
        problem: "The hospital was throwing away a large amount of food. The problem was not a lack of food, but the absence of a clear way to decide how much to prepare and where to send it.",
        solution: "I analysed the hospital's meal data with my team, and we designed a meal-planning approach based on that data. Our team advanced in the challenge, and we are now implementing the solution with the hospital.",
        features: [
          "Analysis of real hospital meal data",
          "A meal-planning approach based on the data",
          "Advanced in the challenge with the team",
          "Now being implemented with the hospital",
        ],
      },
      ar: {
        category: "تحدٍّ من الاتفاق العالمي للأمم المتحدة",
        title: "From Waste to Worth",
        subtitle: "الحدّ من هدر الطعام في مستشفى أوتيل ديو دو فرانس في بيروت",
        summary: "حلّ لتخطيط الوجبات يعتمد على البيانات، طوّرته مع فريقي ضمن تحدّي الاتفاق العالمي للأمم المتحدة، ويجري تطبيقه الآن مع المستشفى.",
        role: "تحليل البيانات وتصميم الحل ضمن فريق",
        platforms: "بيانات وتحليل",
        problem: "كان المستشفى يهدر كمية كبيرة من الطعام. ولم تكن المشكلة في نقص الطعام، بل في غياب طريقة واضحة لتحديد الكمية التي يجب تحضيرها وإلى أين تُرسل.",
        solution: "حللتُ مع فريقي بيانات الوجبات في المستشفى، وصمّمنا طريقة لتخطيط الوجبات تعتمد على هذه البيانات. تأهّل فريقنا في التحدّي، ونعمل الآن على تطبيق الحل مع المستشفى.",
        features: [
          "تحليل بيانات حقيقية لوجبات المستشفى",
          "طريقة لتخطيط الوجبات مبنية على البيانات",
          "تأهّل الفريق في التحدّي",
          "يجري تطبيق الحل الآن مع المستشفى",
        ],
      },
    },
  },
  {
    slug: "biometric-connector",
    year: "2026",
    tags: ["Node.js", "Automation", "Security"],
    images: [],
    liveLink: "",
    codeLink: "",
    featured: false,
    text: {
      en: {
        category: "Part of Team Flow",
        title: "Biometric Connector",
        subtitle: "Connects fingerprint devices to Team Flow",
        summary: "A Node.js tool that reads fingerprint-device export files and sends every punch securely to the Team Flow server.",
        role: "Design and development",
        platforms: "Server (Node.js)",
        problem: "Fingerprint devices export raw text files. Someone had to copy those punches into the system by hand, and wrong or duplicate lines were easy to miss.",
        solution: "The admin uploads the device file in the app. The connector checks every line, sends valid punches in batches through a token-protected API and reports the lines it could not read, while the original file is archived.",
        features: [
          "Token-protected batch upload to the server",
          "Invalid and duplicate lines are reported, never silently lost",
          "Original files are archived for auditing",
          "Runs automatically on the server after an upload",
        ],
      },
      ar: {
        category: "جزء من Team Flow",
        title: "موصّل أجهزة البصمة",
        subtitle: "يربط أجهزة البصمة بنظام Team Flow",
        summary: "أداة مبنية بـ Node.js تقرأ ملفات أجهزة البصمة وترسل كل بصمة بأمان إلى خادم Team Flow.",
        role: "التصميم والبرمجة",
        platforms: "خادم (Node.js)",
        problem: "تُخرج أجهزة البصمة ملفات نصية خام، وكان على أحدهم نقل البصمات إلى النظام يدويًا، فيسهل أن تضيع السطور الخاطئة أو المكررة.",
        solution: "يرفع المدير ملف الجهاز من التطبيق، فيفحص الموصّل كل سطر، ويرسل البصمات الصحيحة على دفعات عبر واجهة برمجية محمية، ويعرض السطور التي لم يتمكن من قراءتها، مع حفظ الملف الأصلي.",
        features: [
          "رفع على دفعات عبر واجهة محمية",
          "السطور الخاطئة والمكررة تظهر ولا تضيع",
          "حفظ الملفات الأصلية للتدقيق",
          "يعمل تلقائيًا على الخادم بعد الرفع",
        ],
      },
    },
  },
  {
    slug: "generative-ai-research",
    year: "2025",
    tags: ["Python", "GANs", "Transformers", "Research"],
    images: [],
    liveLink: "",
    codeLink: "",
    featured: false,
    text: {
      en: {
        category: "University research",
        title: "Generative AI in Engineering",
        subtitle: "Research project, Lebanese International University",
        summary: "Research on applying generative AI models (GANs and Transformers) to engineering and architectural design.",
        role: "Researcher",
        platforms: "Research",
        problem: "Early engineering design involves many repeated iterations. The question was whether generative AI can make design work faster and help use materials better.",
        solution: "I trained and evaluated generative models on architectural datasets and analysed their potential impact on design efficiency and material optimisation.",
        features: [
          "Trained GAN and Transformer models on architectural data",
          "Evaluated the generated results",
          "Analysed the effect on design efficiency and material use",
        ],
      },
      ar: {
        category: "بحث جامعي",
        title: "الذكاء الاصطناعي التوليدي في الهندسة",
        subtitle: "مشروع بحثي في الجامعة اللبنانية الدولية",
        summary: "بحث في تطبيق نماذج الذكاء الاصطناعي التوليدي (GANs و Transformers) على التصميم الهندسي والمعماري.",
        role: "باحث",
        platforms: "بحث",
        problem: "يمرّ التصميم الهندسي في مراحله الأولى بمحاولات كثيرة متكررة. وكان السؤال: هل يستطيع الذكاء الاصطناعي التوليدي تسريع التصميم والمساعدة في استخدام المواد بشكل أفضل؟",
        solution: "درّبتُ نماذج توليدية وقيّمتها على بيانات معمارية، وحللتُ أثرها المحتمل على كفاءة التصميم وترشيد استخدام المواد.",
        features: [
          "تدريب نماذج GAN و Transformer على بيانات معمارية",
          "تقييم النتائج المولّدة",
          "تحليل الأثر على كفاءة التصميم واستخدام المواد",
        ],
      },
    },
  },
  {
    slug: "reconstruction-priorities",
    year: "",
    tags: ["Public data", "Decision support", "Research"],
    images: [],
    liveLink: "",
    codeLink: "",
    featured: false,
    text: {
      en: {
        category: "Research plan",
        title: "Reconstruction Priorities Tool",
        subtitle: "A decision-support idea for Northwest Syria",
        summary: "A research plan for a tool that helps decide which damaged services to restore first, using public data from REACH, UNOSAT and OCHA.",
        role: "Author of the research plan",
        platforms: "Research plan",
        problem: "With limited resources, decisions about which water network, school or power line to restore first are often made on estimation rather than reliable information.",
        solution: "The plan combines damage assessments, population numbers and current service coverage. Decision-makers could adjust criteria such as need, cost and urgency, and immediately see how priorities change and why, starting with a small pilot in a few communities.",
        features: [
          "Based on public data from REACH, UNOSAT and OCHA",
          "Adjustable criteria: need, cost and urgency",
          "Transparent results that show why one option comes first",
          "Designed to start as a small pilot with local partners",
        ],
      },
      ar: {
        category: "خطة بحثية",
        title: "أداة أولويات إعادة الإعمار",
        subtitle: "فكرة لدعم القرار في شمال غرب سوريا",
        summary: "خطة بحثية لأداة تساعد على تحديد الخدمات المتضررة التي يجب إصلاحها أولًا، باستخدام بيانات عامة من REACH و UNOSAT و OCHA.",
        role: "كاتب الخطة البحثية",
        platforms: "خطة بحثية",
        problem: "مع محدودية الموارد، كثيرًا ما تُتخذ قرارات إصلاح شبكات المياه والمدارس وخطوط الكهرباء بناءً على التقدير لا على معلومات موثوقة.",
        solution: "تجمع الخطة بين تقييمات الأضرار وأعداد السكان وتغطية الخدمات الحالية، بحيث يستطيع صاحب القرار تعديل معايير مثل الحاجة والكلفة والإلحاح، ويرى فورًا كيف تتغير الأولويات ولماذا، على أن تبدأ بتجربة صغيرة في عدد من المجتمعات.",
        features: [
          "مبنية على بيانات عامة من REACH و UNOSAT و OCHA",
          "معايير قابلة للتعديل: الحاجة والكلفة والإلحاح",
          "نتائج شفافة توضّح سبب تقديم خيار على آخر",
          "مصممة لتبدأ بتجربة صغيرة مع شركاء محليين",
        ],
      },
    },
  },
  {
    slug: "financial-literacy-app",
    year: "2025",
    tags: ["Mobile app", "UX", "Product design"],
    images: [],
    liveLink: "",
    codeLink: "",
    featured: false,
    text: {
      en: {
        category: "Concept, Harvard Aspiring Leaders Program",
        title: "Financial Intelligence App",
        subtitle: "A mobile app concept for young people",
        summary: "A proposal for a mobile app that teaches young people financial intelligence in a simple, practical way.",
        role: "Idea, proposal and product concept",
        platforms: "Mobile (concept)",
        problem: "Many young people never learn how to manage money, save or plan, and most material on the topic is not made for them.",
        solution: "A proposal that turns financial skills into short, practical lessons for youth, developed and presented during Harvard's Aspiring Leaders Program.",
        features: [
          "Short, practical lessons made for young people",
          "Focused on everyday money decisions",
          "Developed and presented at Harvard's Aspiring Leaders Program",
        ],
      },
      ar: {
        category: "فكرة، برنامج القادة الطموحين في هارفارد",
        title: "تطبيق الذكاء المالي",
        subtitle: "فكرة تطبيق موبايل للشباب",
        summary: "مقترح لتطبيق موبايل يعلّم الشباب الذكاء المالي بطريقة بسيطة وعملية.",
        role: "الفكرة والمقترح وتصور المنتج",
        platforms: "موبايل (فكرة)",
        problem: "كثير من الشباب لا يتعلمون إدارة المال أو الادخار أو التخطيط، ومعظم المحتوى في هذا المجال غير موجّه إليهم.",
        solution: "مقترح يحوّل المهارات المالية إلى دروس قصيرة وعملية للشباب، طوّرته وعرضته ضمن برنامج القادة الطموحين في جامعة هارفارد.",
        features: [
          "دروس قصيرة وعملية موجّهة للشباب",
          "تركيز على قرارات المال اليومية",
          "طُوّر وعُرض في برنامج القادة الطموحين في هارفارد",
        ],
      },
    },
  },
];

// ---------------------------------------------------------------------------
// EXPERIENCE (newest first)
// ---------------------------------------------------------------------------
export const experience = [
  {
    date: { en: "Present", ar: "حاليًا" },
    text: {
      en: {
        role: "IT Officer and Software Developer",
        org: "ASIK Engineering Construction, Damascus International Airport project",
        desc: "The only technical person on the project. I handle IT support and document control, and I design and build the company's internal software: Team Flow, which manages the attendance and pay of about 125 workers, and Equipment Flow for the rented machinery. I present both systems to management and to the client.",
      },
      ar: {
        role: "مسؤول تقنية المعلومات ومطوّر برمجيات",
        org: "شركة ASIK للهندسة والمقاولات، مشروع مطار دمشق الدولي",
        desc: "الشخص التقني الوحيد في المشروع. أتولى الدعم التقني وضبط الوثائق، وأصمّم وأبني البرمجيات الداخلية للشركة: نظام Team Flow الذي يدير حضور وأجور نحو 125 عاملًا، ونظام Equipment Flow للآليات المستأجرة. وأعرض النظامين على الإدارة وعلى العميل.",
      },
    },
  },
  {
    date: { en: "May 2025 – Present", ar: "أيار 2025 – حاليًا" },
    text: {
      en: {
        role: "Co-founder, Instructor and Computer Science Lead",
        org: "Infinity Team",
        desc: "Co-founded an initiative that teaches programming and robotics to refugee and underserved teenagers, in partnership with JUSOOR and community centres. I designed the curriculum and delivered more than 60 hours of workshops to over 30 students. When the war displaced many of us, we moved the classes online. One student who started with no coding background later won a Computer Science scholarship.",
      },
      ar: {
        role: "مؤسس مشارك ومدرّب ومسؤول علوم الحاسوب",
        org: "Infinity Team",
        desc: "شاركت في تأسيس مبادرة تعلّم البرمجة والروبوتات لليافعين اللاجئين والأقل حظًا، بالشراكة مع منظمة جسور ومراكز مجتمعية. صمّمت المنهج وقدّمت أكثر من 60 ساعة من الورش لأكثر من 30 طالبًا. وعندما هجّرت الحرب كثيرين منا، نقلنا الدروس عبر الإنترنت. وأحد الطلاب الذي بدأ دون أي خبرة في البرمجة حصل لاحقًا على منحة لدراسة علوم الحاسوب.",
      },
    },
  },
  {
    date: { en: "Nov 2024 – Jun 2025", ar: "تشرين الثاني 2024 – حزيران 2025" },
    text: {
      en: { role: "Department Coordinator", org: "Life Sculptor", desc: "Connected four teams (Academics, WWC, Life Coders and Psychosocial) and guided more than 100 applicants through their university applications and interviews." },
      ar: { role: "منسّق قسم", org: "Life Sculptor", desc: "نسّقت بين أربعة فرق (الأكاديمي و WWC و Life Coders والدعم النفسي)، وأرشدت أكثر من 100 متقدّم في طلبات الجامعات والمقابلات." },
    },
  },
  {
    date: { en: "May 2024 – Present", ar: "أيار 2024 – حاليًا" },
    text: {
      en: { role: "Robotics Team Manager", org: "STEP-AUB, Beqaa", desc: "Joined as a robotics instructor and now manage the robotics team: planning project-based workshops for more than 15 students and coaching them for local competitions." },
      ar: { role: "مدير فريق الروبوتات", org: "STEP-AUB، البقاع", desc: "انضممت مدرّبًا للروبوتات، وأدير اليوم فريق الروبوتات: أخطط ورشًا قائمة على المشاريع لأكثر من 15 طالبًا وأدرّبهم للمسابقات المحلية." },
    },
  },
  {
    date: { en: "Feb 2024 – Present", ar: "شباط 2024 – حاليًا" },
    text: {
      en: { role: "Scholarships Support Volunteer", org: "YAD Initiative", desc: "Share academic, internship and scholarship opportunities with a network of 2,000 students, and have mentored more than 15 students one to one." },
      ar: { role: "متطوع في دعم المنح", org: "مبادرة YAD", desc: "أنشر الفرص الأكاديمية وفرص التدريب والمنح لشبكة من 2,000 طالب، وأرشدت أكثر من 15 طالبًا بشكل فردي." },
    },
  },
  {
    date: { en: "Jan 2023 – Present", ar: "كانون الثاني 2023 – حاليًا" },
    text: {
      en: { role: "Media Officer (volunteer)", org: "Muslim Scout Association", desc: "Photography, publishing and content creation for the troop's digital media." },
      ar: { role: "مسؤول إعلامي (تطوعي)", org: "جمعية الكشافة المسلمة", desc: "التصوير والنشر وصناعة المحتوى للإعلام الرقمي للفوج." },
    },
  },
];

// ---------------------------------------------------------------------------
// TEXT OF THE PAGE (per language)
// ---------------------------------------------------------------------------
export const portfolioData = {
  en: {
    dir: "ltr",
    nav: {
      projects: "Work",
      skills: "Skills",
      experience: "Experience",
      awards: "Awards",
      contact: "Contact",
      cta: "Email me",
      langSwitch: "عربي",
      themeLight: "Switch to light mode",
      themeDark: "Switch to dark mode",
      menu: "Menu",
      mainNav: "Main",
    },
    hero: {
      name: "Hamza Hashma",
      title: "Software Developer",
      badge: "Software developer in Damascus, Syria",
      headline: "I build software people rely on, and help others learn to build it.",
      bio: "I'm Hamza Hashma, a Computer Science graduate (GPA 3.99/4.00) and the only software developer on the Damascus International Airport project, where the payroll system I built pays about 125 workers. Before that, I taught programming and robotics to refugee youth in Lebanon.",
      primary: "See my work",
      secondary: "Email me",
      resume: "Download CV",
      demoHint: "Try it: tap a worker to approve their day and watch the payroll update.",
      demoReset: "Reset demo",
    },
    // The numbers strip under the hero.
    stats: [
      { value: "125", label: "workers paid through the payroll system I built" },
      { value: "2", label: "systems in daily use on the airport project" },
      { value: "60+", label: "hours of coding and robotics workshops taught" },
      { value: "3.99", label: "GPA, B.Sc. in Computer Science" },
    ],
    projectsSection: {
      title: "Selected work",
      details: "Read the case study",
      more: "More projects and research",
      more_details: "Details",
    },
    projectPage: {
      back: "Back to all projects",
      role: "My role",
      platforms: "Platforms",
      year: "Year",
      problem: "The problem",
      solution: "What I did",
      features: "Key features",
      tech: "Built with",
      gallery: "Screenshots",
      live: "Live demo",
      code: "Source code",
      next: "Next project",
      ctaTitle: "Questions about this project?",
      ctaText: "I'm happy to walk you through how it works and the decisions behind it.",
      ctaButton: "Email me",
      devHint: "Add screenshots: put image files in public/projects/{slug}/ and list them in `images` in src/data/portfolioData.js. (This note is only visible while developing.)",
    },
    skills: {
      title: "Skills",
      groups: [
        {
          title: "Software development",
          desc: "Mobile, web and desktop apps, from gathering requirements to deployment.",
          items: "Flutter, Dart, React, JavaScript, Node.js, Express, MySQL, REST APIs, Git",
        },
        {
          title: "Data and AI",
          desc: "Analysing data and building models that support decisions.",
          items: "Python, Pandas, NumPy, scikit-learn, Power BI, Alteryx, SQL, GANs, Transformers",
        },
        {
          title: "Teaching and leadership",
          desc: "Turning technical topics into lessons people can follow.",
          items: "Curriculum design, workshop facilitation, robotics and Arduino, mentoring, project coordination",
        },
      ],
      languages: "Languages: Arabic (native) and English",
    },
    experienceSection: {
      title: "Experience",
    },
    education: {
      title: "Education",
      degree: "B.Sc. in Computer Science, GPA 3.99 / 4.00",
      school: "Lebanese International University",
      date: "2026",
      desc: "Data structures and algorithms, artificial intelligence, machine learning, database systems, probability and statistics, software engineering.",
      dafiTitle: "UNHCR DAFI Scholar",
      dafiDate: "2023 – 2026",
      dafiDesc: "Completed 33 training workshops and more than 700 volunteering hours, four times the required amount. Co-founded the DAFI Robotics Club and built its curriculum from scratch.",
    },
    quote: {
      text: "Hamza has demonstrated a level of reliability, discipline, and consistency that sets him apart among DAFI scholars.",
      name: "Sandrine Melki",
      role: "Project Manager, DAFI programme (IECD)",
    },
    awards: {
      title: "Awards and programmes",
      items: [
        { title: "Youth Leadership Programme, Arab Forum for Sustainable Development", org: "UN-ESCWA", date: "2026" },
        { title: "\"From Waste to Worth\" challenge, team advanced", org: "UN Global Compact and Hôtel-Dieu de France", date: "" },
        { title: "Aspiring Leaders Program", org: "Harvard University", date: "2025" },
        { title: "Design Thinking, Generation of Innovation Leaders", org: "UNICEF and The Nawaya Network", date: "2025" },
        { title: "First place, FinFit Youth Championship (University Track)", org: "INJAZ Lebanon", date: "2025" },
        { title: "President's Honor List", org: "Lebanese International University", date: "2025" },
        { title: "Diploma in Advanced Data Analytics, Digital Heroes", org: "PwC Middle East", date: "2025" },
        { title: "Robotics and Arduino training (12 sessions)", org: "GLOW Center", date: "2024" },
        { title: "Gold Medal Certificate", org: "Codecrafters Bootcamp", date: "2024" },
        { title: "DAFI Scholarship", org: "UNHCR", date: "2023 – 2026" },
      ],
    },
    contactSection: {
      title: "Get in touch",
      text: "Open to roles, research collaborations and projects. The fastest way to reach me is email or WhatsApp.",
      whatsapp: "WhatsApp",
      email: "Email",
      linkedin: "LinkedIn",
      copy: "Copy number",
      copied: "Copied",
    },
    notFound: {
      title: "Page not found",
      text: "The page you're looking for doesn't exist or was moved.",
      button: "Back to home",
    },
    seoDescription: "Hamza Hashma, software developer in Damascus. Computer Science graduate (GPA 3.99), builder of Team Flow for the Damascus International Airport project, and co-founder of Infinity Team.",
    footer: "Designed and built by Hamza Hashma",
    skipLink: "Skip to content",
  },

  ar: {
    dir: "rtl",
    nav: {
      projects: "أعمالي",
      skills: "المهارات",
      experience: "الخبرات",
      awards: "الجوائز",
      contact: "تواصل",
      cta: "راسلني",
      langSwitch: "EN",
      themeLight: "الوضع الفاتح",
      themeDark: "الوضع الداكن",
      menu: "القائمة",
      mainNav: "القائمة الرئيسية",
    },
    hero: {
      name: "حمزة هشمة",
      title: "مطوّر برمجيات",
      badge: "مطوّر برمجيات في دمشق، سوريا",
      headline: "أبني برمجيات يعتمد عليها الناس، وأساعد غيري على تعلّم بنائها.",
      bio: "أنا حمزة هشمة، خريج علوم الحاسوب (بمعدل 3.99 من 4.00)، والمطوّر الوحيد في مشروع مطار دمشق الدولي، حيث يدير نظام الرواتب الذي بنيته أجور نحو 125 عاملًا. وقبل ذلك، درّست البرمجة والروبوتات لشباب لاجئين في لبنان.",
      primary: "اطّلع على أعمالي",
      secondary: "راسلني بالبريد",
      resume: "تحميل السيرة الذاتية",
      demoHint: "جرّبها: اضغط على أحد العمال لاعتماد يومه، وشاهد الرواتب تتحدّث.",
      demoReset: "إعادة العرض",
    },
    stats: [
      { value: "125", label: "عاملًا يتقاضون أجورهم عبر نظام الرواتب الذي بنيته" },
      { value: "2", label: "نظامان يُستخدمان يوميًا في مشروع المطار" },
      { value: "+60", label: "ساعة من ورش البرمجة والروبوتات قدّمتها" },
      { value: "3.99", label: "المعدل، بكالوريوس علوم الحاسوب" },
    ],
    projectsSection: {
      title: "أعمال مختارة",
      details: "تفاصيل المشروع",
      more: "مشاريع وأبحاث أخرى",
      more_details: "التفاصيل",
    },
    projectPage: {
      back: "العودة إلى كل المشاريع",
      role: "دوري",
      platforms: "المنصات",
      year: "السنة",
      problem: "المشكلة",
      solution: "ما قمت به",
      features: "أبرز الميزات",
      tech: "التقنيات",
      gallery: "صور من المشروع",
      live: "تجربة مباشرة",
      code: "الشيفرة المصدرية",
      next: "المشروع التالي",
      ctaTitle: "لديك أسئلة عن هذا المشروع؟",
      ctaText: "يسعدني أن أشرح لك طريقة عمله والقرارات التي بُني عليها.",
      ctaButton: "راسلني بالبريد",
      devHint: "لإضافة صور: ضع ملفات الصور في public/projects/{slug}/ وأضفها إلى images في ملف src/data/portfolioData.js. (تظهر هذه الملاحظة أثناء التطوير فقط.)",
    },
    skills: {
      title: "المهارات",
      groups: [
        {
          title: "تطوير البرمجيات",
          desc: "تطبيقات للموبايل والويب وسطح المكتب، من جمع المتطلبات حتى النشر.",
          items: "Flutter, Dart, React, JavaScript, Node.js, Express, MySQL, REST APIs, Git",
        },
        {
          title: "البيانات والذكاء الاصطناعي",
          desc: "تحليل البيانات وبناء نماذج تدعم اتخاذ القرار.",
          items: "Python, Pandas, NumPy, scikit-learn, Power BI, Alteryx, SQL, GANs, Transformers",
        },
        {
          title: "التعليم والقيادة",
          desc: "تحويل المواضيع التقنية إلى دروس يسهل اتباعها.",
          items: "تصميم المناهج، تيسير الورش، الروبوتات و Arduino، الإرشاد، تنسيق المشاريع",
        },
      ],
      languages: "اللغات: العربية (اللغة الأم) والإنكليزية",
    },
    experienceSection: {
      title: "الخبرات",
    },
    education: {
      title: "التعليم",
      degree: "بكالوريوس في علوم الحاسوب، بمعدل 3.99 من 4.00",
      school: "الجامعة اللبنانية الدولية",
      date: "2026",
      desc: "هياكل البيانات والخوارزميات، الذكاء الاصطناعي، تعلّم الآلة، قواعد البيانات، الاحتمالات والإحصاء، هندسة البرمجيات.",
      dafiTitle: "حاصل على منحة DAFI من المفوضية السامية للأمم المتحدة لشؤون اللاجئين",
      dafiDate: "2023 – 2026",
      dafiDesc: "أنهيت 33 ورشة تدريبية وأكثر من 700 ساعة تطوع، أي أربعة أضعاف المطلوب. وشاركت في تأسيس نادي DAFI للروبوتات وبنيت منهجه من الصفر.",
    },
    quote: {
      text: "أظهر حمزة مستوى من الموثوقية والانضباط والثبات يميّزه بين طلاب منحة DAFI.",
      name: "ساندرين ملكي",
      role: "مديرة مشروع DAFI (IECD)",
    },
    awards: {
      title: "الجوائز والبرامج",
      items: [
        { title: "برنامج القيادات الشبابية، المنتدى العربي للتنمية المستدامة", org: "الإسكوا", date: "2026" },
        { title: "تحدّي From Waste to Worth، تأهّل الفريق", org: "الاتفاق العالمي للأمم المتحدة ومستشفى أوتيل ديو دو فرانس", date: "" },
        { title: "برنامج القادة الطموحين (Aspiring Leaders)", org: "جامعة هارفارد", date: "2025" },
        { title: "التفكير التصميمي، برنامج جيل قادة الابتكار", org: "اليونيسف وشبكة نوايا", date: "2025" },
        { title: "المركز الأول في بطولة FinFit للشباب (فئة الجامعات)", org: "إنجاز لبنان", date: "2025" },
        { title: "لائحة شرف رئيس الجامعة", org: "الجامعة اللبنانية الدولية", date: "2025" },
        { title: "دبلوم تحليل البيانات المتقدم، برنامج Digital Heroes", org: "PwC الشرق الأوسط", date: "2025" },
        { title: "تدريب الروبوتات و Arduino (12 جلسة)", org: "GLOW Center", date: "2024" },
        { title: "شهادة الميدالية الذهبية", org: "Codecrafters Bootcamp", date: "2024" },
        { title: "منحة DAFI", org: "المفوضية السامية للأمم المتحدة لشؤون اللاجئين", date: "2023 – 2026" },
      ],
    },
    contactSection: {
      title: "تواصل معي",
      text: "منفتح على فرص العمل والتعاون البحثي والمشاريع. أسرع طريقة للتواصل هي البريد الإلكتروني أو واتساب.",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      linkedin: "لينكدإن",
      copy: "نسخ الرقم",
      copied: "تم النسخ",
    },
    notFound: {
      title: "الصفحة غير موجودة",
      text: "الصفحة التي تبحث عنها غير موجودة أو نُقلت.",
      button: "العودة إلى الرئيسية",
    },
    seoDescription: "حمزة هشمة، مطوّر برمجيات في دمشق. خريج علوم الحاسوب بمعدل 3.99، ومطوّر نظام Team Flow لمشروع مطار دمشق الدولي، ومؤسس مشارك في Infinity Team.",
    footer: "تصميم وبرمجة حمزة هشمة",
    skipLink: "انتقل إلى المحتوى",
  },
};
