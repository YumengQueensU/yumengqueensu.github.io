// skillsData.js

export const skills = [
  {
    name: "Quantitative Finance & Analytics", // Adjusted category title
    projects: [
      {
        id: "IFRS 9 credit risk (SAS + SQL)",
        title: "IFRS 9 credit risk (SAS + SQL)",
        imgUrl: "/images/EconSAS3.png",
        features: [
          { title: "ECL Pipeline", description: "Reproducible SAS+SQL pipeline for PD/LGD/EAD modeling, IFRS 9 staging, and robust Expected Credit Loss computation." },
          { title: "Audit-Friendly Design", description: "Industry-standard stack (SAS, SQL) for clear data lineage, parameterised objectives, and consistent model comparisons, ready for governance reviews." },
          { title: "Stress Testing", description: "Integrated macro-stress scenarios reveal loss sensitivity and model resilience, crucial for bank-grade risk management workflows." }
        ]
      },
      {
        id: "portfolio optimisation framework",
        title: "portfolio optimisation framework",
        imgUrl: "/images/Econ1.png",
        iframeUrl: "https://portfolio-optimisation-tmszbfem5wq8sqlvqbmb9c.streamlit.app",
        features: [
          { title: "Advanced Optimisation", description: "Developed a platform integrating classical (Markowitz) and deep learning (GRU) models for robust portfolio strategy evaluation and selection." },
          { title: "Superior Returns", description: "GRU model achieved 7.11% return, significantly outperforming Markowitz with enhanced volatility control in dynamic market conditions." },
          { title: "Interactive Insights", description: "Full-stack deployment via Streamlit provides interactive visualisations, fostering clear strategy comparisons and an engaging user experience." }
        ]
      },
      {
        id: "monte carlo option pricing",
        title: "monte carlo option pricing",
        imgUrl: "/images/EconMC1.png",
        features: [
          { title: "Lean Pricing Engine", description: "Concise Python engine for option pricing and Greeks, incorporating variance reduction (antithetic, control variates, Sobol quasi-MC) for precision." },
          { title: "Reproducible Analytics", description: "Unified interface abstracts model/payoff blocks; ensures consistent, like-for-like comparisons, providing reliable and interview-ready results." },
          { title: "Enhanced Efficiency", description: "Variance reduction techniques cut variance 4-6x; Sobol quasi-MC delivers 8-10x sample efficiency, yielding tighter 95% confidence intervals." }
        ]
      },
    ]
  },
  {
    name: "Game & Simulation Development", // Adjusted category title
    projects: [
      {
        id: "pollution is colonialism",
        title: "pollution is colonialism",
        imgUrl: "/images/S2P1.jpg",
        features: [
          { title: "Immersive World", description: "A vast open world with dynamic weather systems and a day-night cycle that affects gameplay." },
          { title: "Complex Storytelling", description: "Branching narratives that allow player choices to significantly impact story outcomes and character development." },
          { title: "Multiplayer Elements", description: "Seamless integration of multiplayer modes that allow for both cooperative and competitive play without leaving the campaign." }
        ]
      },
      {
        id: "gunman unity",
        title: "gunman unity",
        imgUrl: "/images/game2.png",
        features: [
          { title: "AI-Driven Gameplay", description: "Behaviour-tree powered AI for dynamic enemy tactics, contextual decision-making (evade, re-engage), and efficient navigation." },
          { title: "Lightweight Networking", description: "Minimal client-server avatar system for two players, ensuring smooth, fair play with efficient state/transform synchronization." },
          { title: "Modular & Scalable", description: "Compact, inspectable AI graph and message schema designed for easy tuning, extension, and scalability beyond two players." }
        ]
      }
    ]
  },
  {
    name: "AI & Data Science", // Adjusted category title
    projects: [
      {
        id: "googan prototype",
        title: "googan prototype",
        imgUrl: "/images/AI11.png",
        features: [
          { title: "NLP Capabilities", description: "Advanced natural language processing to understand and respond to user queries effectively." },
          { title: "Machine Learning", description: "Self-learning algorithm to improve response accuracy based on user interactions." },
          { title: "Integration", description: "Easy integration with existing customer service platforms to streamline operations." }
        ]
      },
      {
        id: "lexstat phylogeny",
        title: "lexstat phylogeny",
        imgUrl: "/images/AI22.png",
        features: [
          { title: "Linguistic Analysis", description: "Applied LingPy LexStat to ASJP wordlists for robust cognate detection and phonetic alignment across language families." },
          { title: "Phylogenetic Reconstruction", description: "Generated accurate, downloadable .nwk phylogenetic trees, offering insights into language family relationships and evolution." },
          { title: "Interactive Visualisation", description: "Custom front-end (Phylotree.js fork) with node dropdowns and info cards facilitates fast, field-friendly exploration of language trees." }
        ]
      }
    ]
  }
];

export default skills;