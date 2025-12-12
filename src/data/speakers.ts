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
  description2?:string
  Publishing?:string;
  readMoreLink: string;
}

export interface SpeakersData {
  keynoteSpeakers: Speaker[];
  facilitators: Speaker[];
}

const speakers: SpeakersData = {
  keynoteSpeakers: [
    {
      id: 1,
      name: "Prof. Dr. Madhu Veeraraghavan",
      title: "Pro Vice Chancellor [MAHE, BLR]",
      subtitle: "Pro Vice Chancellor [Management, Law, Humanities and Social Sciences]",
      image: "/images/speakers/madhu.png",
      description:
        "Prof. Madhu Veeraraghavan, T. A. Pai Chair Professor of Finance and Dr. T. M. A. Pai Endowment Chair in Management Research at TAPMI, is a distinguished scholar in Corporate Finance and Behavioural Finance, with his work focusing on the interplay between Auditing and Finance. With over 50 publications in leading international journals, including The Accounting Review, Journal of Financial Economics, and Journal of Corporate Finance, he has presented at major global conferences and serves as a reviewer for several top-tier journals in finance and accounting. ",
      readMoreLink: "https://lnkd.in/gwiVWstG"
    },
    {
      id: 2,
      name: "Prof. Dr. Colin Higgins",
      title: "Deputy Dean, Deakin Business School",
      subtitle: "",
     
      image: "/images/speakers/colin.png",
     
      description: 
"Colin Higgins is a Professor of Management whose research examines how organisations use language in social, environmental, and sustainability reporting, including the role of integrated reporting in addressing business and sustainability challenges. He is Co-Editor-in-Chief of the A-ranked Business & Society journal and has held major leadership roles in the Academy of Management's SIM Division. A former President, Fellow, and Conference Chair of IABS, his work appears in leading journals such as Accounting, Auditing and Accountability, Journal of Business Ethics, Journal of Cleaner Production, and Accounting Forum." ,   
  description2:"Colin has held multiple leadership roles at Deakin and across the Asia-Pacific, including leading the Deakin MBA, driving EdTech innovation, and serving as Associate Dean (International), where he strengthened TNE partnerships, research collaborations, and international student experiences.",
      
  readMoreLink: "https://lnkd.in/gwqTDxEC"
    }
  ],

  facilitators: [
    {
      id: 3,
      name: "Prof. Sushanta Kumar Mishra",
      title: "Indian Institute of Management Bangalore",
      subtitle: "Editor-in-Chief - IIMB Management Review; Former President - Indian Academy of Management",
      image: "/images/speakers/sushanta.png",
           Publishing:"How to Avoid Desk Rejection: Tips & Tricks for R&R",

      
      description: "Sushanta Kumar Mishra is a Professor at IIM Bangalore. His research has been published in several FT50 journals and leading international outlets. His work has received multiple distinctions, including Best Accepted Paper and recognition as a Carolyn B. Dexter Award Finalist at the Academy of Management Conferences, along with honours such as the Michael Poole Highly Commended Award and the Career Division Best Published Paper Award Finalist. He chairs the Research & Publication Centre, the Centre for Teaching and Learning, and the Case Centre at IIM Bangalore.",
      description2:"He is also Editor-in-Chief of IIMB Management Review and a former President of the Indian Academy of Management",
      readMoreLink: "https://lnkd.in/g5_zvSs3"
    },
    {
      id: 4,
      name: "Prof. Rahul De'",
      title: "Founder & CEO - Memoric Al",
      subtitle: "Editor - International Journal of Information Management [IJLM] (ABDC-A*)",
      subtitle2:"Government Information Quarterly (ABDC-A), and IIMB, Management Review (ABDC B)",
      subtitle3:"Former Professor of Information Systems, Indian Institute of Management Bangalore",
      image: "/images/speakers/rahul.png",
      Publishing:"Ethics in Publication (Al and Beyond)",
      
      description: "Rahul De’ retired as Professor of Information Systems at the Indian Institute of Management Bangalore in 2024. His research interests span AI, ICT for Development, Electronic Government, Open Source, Internet Governance, and Digital Transformation. He has published four books and over 100 articles in refereed scientific journals, and serves on the editorial boards of four international journals. His recent work has appeared in leading outlets such as Information Systems Journal, Research Policy, Journal of Information Technology, Journal of Computer Information Systems, International Journal of Information Management, and Information Systems Frontiers. He received his PhD from the AI in Management Lab at the University of Pittsburgh in 1993. He is currently the Founder and CEO of Memoric AI, a startup focused on consulting, research, and training in AI applications.",
      readMoreLink: " https://lnkd.in/gXMz3WpX"
    },
    {
      id: 5,
      name: "Prof. Rakesh Kumar Pati",
      title: "Deakin Business School, Deakin University, Australia",
      subtitle: "Deputy Director - Women's Entrepreneurship Research Alliance (WERA), Deakin University",
      image: "/images/speakers/rakesh.png",
      
      Publishing:"Job Market Paper and Interview",
      
      description: "Dr. Rakesh Kumar Pati is a Senior Lecturer in Management at Deakin University with expertise in strategy, innovation, and entrepreneurship. A Fulbright Doctoral Fellow at the University of Minnesota and a Visiting Professor at Oxford University, his research has been published in leading journals including Personnel Psychology, Harvard Business Review, and Long-Range Planning. With over a decade of international academic experience, he has helped secure more than $1.2 million in competitive research funding. An award-winning educator, Dr. Pati has designed and delivered executive programs for prominent organizations such as the National Stock Exchange of India, ANZ, and AustralianSuper.",
      readMoreLink: "https://lnkd.in/gDSbhXBK"
    },
    {
      id: 6,
      name: "Dr. Carol Upadhya",
      title: "Honorary Visiting Professor at the National Institute of Advanced Studies, Bengaluru, India",
      subtitle: "Co-editor of the Journal of South Asian Development",
      image: "/images/speakers/carol.png",
      Publishing:" Fieldwork and Ethics",
      description: "Carol Upadhya, a social anthropologist, is Honorary Visiting Professor at the National Institute of Advanced Studies, Bengaluru, where she leads the Urban and Mobility Studies Programme. Her recent publication is a collaborative volume on Bengaluru’s transformations titled \"Chronicles of a Global City: Speculative Lives and Unsettled Futures in Bengaluru\" (University of Minnesota Press, 2024; Yoda Press, 2025). She is also the author of \"Reengineering India: Work, Capital, and Class in an Offshore Economy\" (Oxford University Press, 2016), and her forthcoming monograph on the Amaravati project in Andhra Pradesh will be published by Berghahn Books in May 2026. Upadhya is co-editor of the Journal of South Asian Development.",
      readMoreLink: "https://lnkd.in/gP9aDJ_D"
    }
  ]
};

export default speakers;
