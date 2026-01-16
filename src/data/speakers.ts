export interface Speaker {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  subtitle2?: string;
  subtitle3?: string;
  subtitle4?: string;
  image: string;
  description: string;
  description2?: string
  Publishing?: string;
  readMoreLink: string;
}

export interface SpeakersData {
  keynoteSpeakers: Speaker[];
  facilitators: Speaker[];
  Editorial: Speaker[];
}

const speakers: SpeakersData = {
  keynoteSpeakers: [
    {
      id: 1,
      name: "Prof. Madhu Veeraraghavan",
      title: "Pro Vice Chancellor [MAHE, BLR]",
      subtitle: "Pro Vice Chancellor [Management, Law, Humanities and Social Sciences]",
      image: "/images/speakers/madhu.png",
      description:
  "Dr. Madhu Veeraraghavan, T. A. Pai Chair Professor of Finance and Dr. T. M. A. Pai Endowment Chair in Management Research at TAPMI, is a distinguished scholar in Corporate Finance and Behavioural Finance, with his work focusing on the interplay between Auditing and Finance. With over 50 publications in leading international journals, including *Accounting Review, Journal of Financial Economics, and Journal of Corporate Finance*, he has presented at major global conferences and serves as a reviewer for several top-tier journals in finance and accounting.",

      readMoreLink: "https://lnkd.in/gwiVWstG"
    },
    {
      id: 2,
      name: "Prof. Colin Higgins",
      title: "Deputy Dean, Deakin Business School",
      subtitle: "",

      image: "/images/speakers/colin.png",

      description:
        " Colin Higgins is a Professor of Management whose research examines how organisations use language in social, environmental, and sustainability reporting, including the role of integrated reporting in addressing business and sustainability challenges. He is Co-Editor-in-Chief of the A-ranked Business & Society journal and has held major leadership roles in the Academy of Management's SIM Division. A former President, Fellow, and Conference Chair of IABS, his work appears in leading journals such as *Accounting, Auditing and Accountability, Journal of Business Ethics, Journal of Cleaner Production, and Accounting Forum*.",
      description2: "Colin has held multiple leadership roles at Deakin and across the Asia-Pacific, including leading the Deakin MBA, driving EdTech innovation, and serving as Associate Dean (International), where he strengthened TNE partnerships, research collaborations, and international student experiences.",

      readMoreLink: "https://lnkd.in/gwqTDxEC"
    }
  ],

  facilitators: [
    {
      id: 3,
      name: "Prof. Sushanta Kumar Mishra",
      title: "Indian Institute of Management Bangalore",
      subtitle: "Editor-in-Chief - IIMB Management Review; Former President - Indian Academy of Management",
      image: "/images/speakers/sushat.png",
      Publishing: "Publishing Workshop: How to Avoid Desk Rejection: Tips & Tricks for R&R",


      description: "Dr. Sushanta Kumar Mishra is a Professor at IIM Bangalore. His research has been published in several FT50 journals and leading international outlets. His work has received multiple distinctions, including Best Accepted Paper and recognition as a Carolyn B. Dexter Award Finalist at the Academy of Management Conferences, along with honours such as the Michael Poole Highly Commended Award and the Career Division Best Published Paper Award Finalist. He chairs the Research & Publication Centre, the Centre for Teaching and Learning, and the Case Centre at IIM Bangalore.",
      description2: "He is also Editor-in-Chief of IIMB Management Review and a former President of the Indian Academy of Management",
      readMoreLink: "https://lnkd.in/g5_zvSs3"
    },
    {
      id: 4,
      name: "Prof. Rahul De'",
      title: "Founder & CEO - Memoric Al",
      subtitle: "Editor - International Journal of Information Management [IJLM] (ABDC-A*)",
      subtitle2: "Government Information Quarterly (ABDC-A), and IIMB, Management Review (ABDC B)",
      subtitle3: "Former Professor of Information Systems, Indian Institute of Management Bangalore",
      image: "/images/speakers/rahul.png",
      Publishing: "Publishing Workshop: Ethics in Publication (Al and Beyond)",

      description: "Dr. Rahul De’ retired as Professor of Information Systems at the Indian Institute of Management Bangalore in 2024. His research interests span AI, ICT for Development, Electronic Government, Open Source, Internet Governance, and Digital Transformation. He has published four books and over 100 articles in refereed scientific journals, and serves on the editorial boards of four international journals. His recent work has appeared in leading outlets such as Information Systems Journal, Research Policy, Journal of Information Technology, Journal of Computer Information Systems, International Journal of Information Management, and Information Systems Frontiers. He received his PhD from the AI in Management Lab at the University of Pittsburgh in 1993. He is currently the Founder and CEO of Memoric AI, a startup focused on consulting, research, and training in AI applications.",
      readMoreLink: " https://lnkd.in/gXMz3WpX"
    },
    {
      id: 5,
      name: "Prof. Rakesh Kumar Pati",
      title: "Deakin Business School, Deakin University, Australia",
      subtitle: "Deputy Director - Women's Entrepreneurship Research Alliance (WERA), Deakin University",
      image: "/images/speakers/rakesh.png",

      Publishing: "Publishing Workshop:Job Market Paper and Interview",

      description: "Dr. Rakesh Kumar Pati is a Senior Lecturer in Management at Deakin University with expertise in strategy, innovation, and entrepreneurship. A Fulbright Doctoral Fellow at the University of Minnesota and a Visiting Professor at Oxford University, his research has been published in leading journals including Personnel Psychology, Harvard Business Review, and Long-Range Planning. With over a decade of international academic experience, he has helped secure more than $1.2 million in competitive research funding. An award-winning educator, Dr. Pati has designed and delivered executive programs for prominent organizations such as the National Stock Exchange of India, ANZ, and AustralianSuper.",
      readMoreLink: "https://lnkd.in/gDSbhXBK"
    },
    // {
    //   id: 6,
    //   name: "Prof. Carol Upadhya",
    //   title: "Honorary Visiting Professor at the National Institute of Advanced Studies, Bengaluru, India",
    //   subtitle: "Co-editor of the Journal of South Asian Development",
    //   image: "/images/speakers/carolImg1.jpg",
    //   Publishing: "Publishing Workshop: Fieldwork and Ethics",
    //   description: "Dr. Carol Upadhya, a social anthropologist, is Honorary Visiting Professor at the National Institute of Advanced Studies, Bengaluru, where she leads the Urban and Mobility Studies Programme. Her recent publication is a collaborative volume on Bengaluru’s transformations titled *Chronicles of a Global City: Speculative Lives and Unsettled Futures in Bengaluru* (University of Minnesota Press, 2024; Yoda Press, 2025). She is also the author of *Reengineering India: Work, Capital, and Class in an Offshore Economy* (Oxford University Press, 2016), and her forthcoming monograph on the Amaravati project in Andhra Pradesh will be published by Berghahn Books in May 2026. Upadhya is co-editor of the *Journal of South Asian Development*.",
    //   readMoreLink: "https://lnkd.in/gP9aDJ_D"
    // }
  ],
  Editorial: [
    {
      id: 7,
      name: "Prof. Dishari Chattaraj",
      title: "Editorial Board Member - Humanities and Social Science Communications (Springer Nature)",
      subtitle: "Indian Institute of Technology Indore",
      image: "/images/speakers/dishari.png",
      Publishing: "Panel Theme: Navigating the Publishing Landscape—Insights from Leading Editors ",


      description: "Dr. Dishari Chattaraj is an Assistant Professor at SHSS, the *Indian Institute of Technology Indore*, where she leads the Education and Critical Food Studies Lab. She has served as a Visiting Faculty at the *Indian Institute of Management Rohtak*. Chattaraj holds a PhD from Jawaharlal Nehru University in New Delhi and was a Fulbright Fellow at Indiana University Bloomington, USA. She has received several international grants for her research, including the ASHDRA UK and NFMLTA Support Grant USA. She has co-edited two volumes (2024, Springer Nature) and authored one monograph, titled Food Literacy, Curriculum, and the Global South: Examples from South Asia (2025, Palgrave Macmillan). Chattaraj is on the editorial board of Humanities and Social Science Communications (Nature) and has served as a peer reviewer for several journals, including the Journal of Computer in Education (Springer Nature), Learning Environments Research (Springer Nature), and Public Humanities (Cambridge University Press), among others.",
      description2: "",
      readMoreLink: ""
    },
    {
      id: 8,
      name: "Prof. K. Mathiyazhagan",
      title: "Assistant/Associate Editor: Technological Forecasting and Social Change, Journal of Knowledge ",
      subtitle: "Management, Journal of Intellectual Capital, and Environment, Development and Sustainability",
      subtitle2: "Thiagarajar School of Management",
      subtitle3: "",
      image: "/images/speakers/mathiyazhagan.png",
      Publishing: "Panel Theme: Navigating the Publishing Landscape—Insights from Leading Editors ",

      description: "Dr. K. Mathiyazhagan is Professor and Head of the Research Centre at Thiagarajar School of Management, with over a decade of experience in teaching and research. He is listed among Stanford’s Top 2% Scientists and has over 9,000 citations, with an H-index of 40 (Google Scholar) and 34 (Scopus). He serves as Assistant/Associate Editor for several high-impact journals, including Technological Forecasting and Social Change, Journal of Knowledge Management, Journal of Intellectual Capital, and Environment, Development and Sustainability, and has also been a guest editor for leading international journals. An active reviewer for over 30 international journals, he has published extensively in top-tier outlets, received multiple excellence and best paper awards, edited international books, secured major research grants including AICTE ATAL FDPs, and collaborates widely with global universities. His research interests include Sustainable Supply Chain Management, Circular Economy, Lean Six Sigma, and Multi-Criteria Decision Making.",
      readMoreLink: ""
    },
    {
      id: 9,
      name: "Prof. Mukta Srivastava",
      title: "Senior Associate Editor of Marketing Intelligence & Planning",
      subtitle: "T. A. Pai Management Institute, MAHE, Manipal",
      image: "/images/speakers/mukta.png",

      Publishing: "Panel Theme: Navigating the Publishing Landscape—Insights from Leading Editors ",

      description: "Prof. Mukta Srivastava is an Associate Professor and Chairperson of the Marketing Management Area at T. A. Pai Management Institute, Manipal Academy of Higher Education (MAHE), Manipal, India. She brings over 16 years of experience in teaching, research, and academic leadership. Her research interests span Services Marketing, Consumer Behaviour, and Branding, with an emerging focus on AI and Sustainability. She has published extensively in leading international journals, including Marketing Intelligence & Planning, Journal of Product & Brand Management, Journal of Consumer Marketing, Electronic Commerce Research, Journal of Business & Industrial Marketing, and International Marketing Review. She has also authored scholarly case studies and book chapters with reputed international publishers and serves as Senior Associate Editor of Marketing Intelligence & Planning. Prof. Srivastava has conducted numerous Faculty Development Programs and research webinars on research methods and high-quality publishing, and regularly contributes to international conferences as a panelist, session chair, and track chair.",
      readMoreLink: ""
    },
    {
      id: 10,
      name: "Prof. Rudra Sensarma",
      title: "Former Managing Editor of Society and Management Review",
      subtitle: "Indian Institute of Management Kozhikode",
      image: "/images/speakers/rudra.png",
      Publishing: "Panel Theme: Navigating the Publishing Landscape—Insights from Leading Editors ",
      description: "Dr. Rudra Sensarma is a Professor of Economics at the Indian Institute of Management Kozhikode (IIMK). Before joining IIMK, he worked with the Reserve Bank of India, IIM Lucknow, the University of Birmingham, Brunel University, and the University of Hertfordshire, gaining extensive experience across policy, academic, and international settings. His research interests span macroeconomics, financial services, banking, and development policy, with a strong focus on issues relevant to emerging economies. He has published more than 50 articles in international peer-reviewed journals such as Journal of International Money and Finance, European Journal of Political Economy and Scientific Reports (Nature). Prof. Sensarma has also served as the Managing Editor of Society and Management Review, IIMK’s flagship journal, which is indexed in Scopus and appears in the ABDC and ABS journal lists. ",
      readMoreLink: ""
    },
      {
      id: 11,
      name: "Prof. Parthajit Kayal",
      title: "Associate Editor - Journal of Emerging Market Finance.",
      subtitle: "Madras School of Economics.",
      image: "/images/speakers/kayal.png",
      Publishing: "",
      description: "Prof. Parthajit Kayal is an Associate Professor of Finance at the Madras School of Economics and serves as Associate Editor of the Journal of Emerging Market Finance. His research spans asset pricing, financial economics, and investment strategies, with published work on factor investing, mutual fund behaviour, and firm-level financial characteristics. He is a regular reviewer for leading international journals and has guided numerous masters’ and doctoral students. His teaching portfolio includes Asset Pricing, Financial Mathematics, Fixed Income Securities, and advanced courses in quantitative finance. ",
      readMoreLink: ""
    }
  ]
};

export default speakers;
