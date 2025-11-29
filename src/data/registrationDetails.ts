export const registrationTabs = [
  { id: "registration", label: "Registration Details" },
  { id: "participation", label: "Participation Details" },
];

// ------------------------------
// Registration Details Table
// ------------------------------
export const registrationTable = {
  headings: ["Particulars", "Ph.D. Scholars", "Early Career Academicians"],

  rows: [
    {
      section: "Early Bird Submission and Registration",
      items: [
        {
          label: "Abstract Submission",
          phd: "15 Dec 2025",
          aca: "15 Dec 2025",
        },
        {
          label: "Registration Fees",
          phd: "INR 1000",
          aca: "INR 2500",
        },
      ],
    },

    {
      section: "Regular Submission and Registration",
      items: [
        {
          label: "Abstract Submission",
          phd: "30 Dec 2025",
          aca: "30 Dec 2025",
        },
        {
          label: "Registration Fees",
          phd: "INR 1500",
          aca: "INR 3000",
        },
      ],
    },

    {
      section: "Extended Abstract Submission *",
      items: [
        {
          label: "Extended Abstract Submission",
          phd: "30 Jan 2026",
          aca: "30 Jan 2026",
        },
      ],
      footnote:
        " Due date for submission of extended abstracts is 30th January 2026 (only applicable for accepted papers).",
    },
  ],
};

// ------------------------------
// Participation Details Content
// ------------------------------

export const participationContent = {
  eligibility:
    "Open to PhD scholars and early career researchers.",
  accommodation:
    "Provided at MAHE Bengaluru Campus Hostel.",
  travel:
    "Participants responsible for own travel arrangements.",

  // teal box content
  submissionBox: {
    abstract: {
      title: "Abstract",
      description:
        "500–800 words, highlighting research gap, objectives, methodology, key findings, and contributions",
      date: "15/30 Dec 2025",
    },
    extended: {
      title: "Extended Abstract / Full Paper",
      description:
        "3000–5000 words, including literature review, methodology, results, and conclusions",
      date: "1 Jan 2026",
    },
  },
};
