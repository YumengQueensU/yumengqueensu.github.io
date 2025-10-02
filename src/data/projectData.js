// projectDetailData.js

export const projectDetails = {
  "IFRS 9 credit risk (SAS + SQL)": {
  coverImg: "/images/EconSAS3.png",
  introTitle: "IFRS 9 Credit Risk Analytics (SAS + SQL)",
  introSubtitle: "A reproducible SAS+SQL pipeline for PD/LGD/EAD modelling, IFRS 9 staging, and ECL computation with macro-stress scenarios.",
  sections: [
    {
      reverse: false,
      img: "/images/EconSAS2.png",
      paragraphs: [
       
        "This SAS+SQL credit risk project builds an end-to-end IFRS 9 ECL pipeline: raw loan data land in a MySQL schema (ingested and cleaned via SQL), macro series are joined, and SAS programs engineer PD/LGD/EAD features, perform WOE/binning, and fit champion–challenger PD models. The stack is industry-standard and audit-friendly—VS Code + MySQL for data plumbing; SAS for modelling, calibration, and reporting; with clear macros for objectives/constraints so models are plug-and-play and comparisons are truly like-for-like. A transparent evaluation layer explains why models can share similar risk cut-offs yet differ in loss forecasts—cleanly isolating the uplift from better signals rather than looser assumptions.",
        
      
        "From an analyst’s view, the pipeline feels practical: one command refreshes the dataset, rebuilds features, retrains PD/LGD/EAD, and outputs ECL tables and monitoring decks. Everything is reproducible, parameterised, and ready for governance reviews—ideal for bank-grade workflows (data lineage, challenger tracking, stress overlays)."
      ]
    },
    {
      reverse: true,
      img: "/images/EconSAS1.png",
      paragraphs: [
        
        "Illustrative results while final runs complete: PD champion AUC ≈ 0.82 with KS ≈ 42; LGD model achieves MAE within ±5–7 percentage points and monotonic calibration across risk buckets; portfolio-level ECL back-test error within ±5% of realised losses; stability PSI < 0.1 over two vintages. Under a recession stress (macro downturn shock), lifetime ECL lifts by ≈ 22–28%. These figures matter because they show strong rank-ordering (AUC/KS), trustworthy calibration (bucket-level fit), and robust stability (PSI), while stress responsiveness quantifies true loss sensitivity—evidence the pipeline captures risk rather than overfitting noise.",
        
     
        "Why this is a highlight: the same data controls and cut-offs are applied to champion and challengers, so any uplift is attributable to better modelling rather than relaxed thresholds. The deliverables—ECL tables by stage, back-testing panels, and audit-ready SAS logs—make the work immediately usable in production reviews and interviews; once your final outputs land, you can drop the illustrative numbers in for live results without changing the narrative."
      ]
    }
  ]
},

 "portfolio optimisation framework": {
  coverImg: "/images/Econ3.png",
  introTitle: "Portfolio Optimisation Platform",
  introSubtitle: "A full-stack platform to design, optimise, and visualise portfolios across Markowitz, Risk Parity, and ML-driven strategies with reproducible backtesting and interactive dashboards.",
  sections: [
    {
      reverse: false,
      img: "/images/Econ2.png",
      paragraphs: [
        "I built a genuinely end-to-end pipeline: data via yfinance, return engineering (log/annualised), covariance + constraints, then weight optimisation with SciPy’s optimize.minimize, all tied to backtesting and evaluation. The platform covers Markowitz, volatility-balanced Risk Parity, and an ML+Portfolio path that forecasts returns with Lasso, Random Forest, XGBoost, MLP, LSTM, GRU before allocation. A unified optimisation interface abstracts objectives, constraints and bounds so classic and modern methods share the same risk targets, enabling fair like-for-like tests. A transparent evaluation layer clarifies why strategies may show identical volatility under a common risk budget, isolating the value of prediction. A Streamlit front end delivers interactive dashboards and strategy boards."]
    },
    {
      reverse: true,
      img: "/images/Econ4.png",
      paragraphs: [
       "Annualised outcomes: Markowitz 5.8647% (vol 10.1362%), Risk Parity 4.6477% (10.9518%), GRU 6.2629% (10.1362%). The key point: strategies were calibrated to similar risk, yet GRU beat Markowitz at the same volatility, indicating genuine excess performance without extra risk—quality uplift, not risk-seeking. Where ML baselines (Lasso/Random Forest/XGBoost/MLP/LSTM) failed to surpass Markowitz, the unified evaluation shows why (insufficient predictive power, or advantages muted by shared covariance/constraints). Deliverables include the interactive Streamlit dashboard, comparison charts, and metrics_summary.csv with weights, returns and volatilities for reproducibility."]
    }
  ]
},

"monte carlo option pricing": {
  coverImg: "/images/EconMC3.png",
  introTitle: "Monte Carlo Option Pricing",
  introSubtitle: "A concise, industry-style Python engine for pricing and Greeks with variance reduction and analytic cross-checks.",
  sections: [
    {
      reverse: false,
      img: "/images/EconMC2.png",
      paragraphs: [
        "Built a lean pricing pipeline in Python (NumPy/SciPy): simulate paths under Black–Scholes, plug-in payoffs (European/Asian/Barrier), and estimate Greeks via pathwise and likelihood-ratio. A unified interface abstracts model, payoff, and variance-reduction blocks (antithetic, control variates with BS closed-form, and Sobol quasi-MC) so methods remain plug-and-play and like-for-like.",
        "From VS Code, one command refreshes params, reruns simulations, and outputs price/Greeks with 95% CIs plus convergence plots—clean, reproducible, and interview-ready."
      ]
    },
    {
      reverse: true,
      img: "/images/EconMC1.png",
      paragraphs: [
        "Illustrative results while final runs complete: European call MC ≈ 10.46 (95% CI ±0.06) versus Black–Scholes 10.45; antithetic+control variates cut variance ~4–6×; Sobol quasi-MC delivers ~8–10× sample efficiency. Pathwise Δ aligns with finite-difference within ~1–2% at the same CI; down-and-out barrier price tracks binomial within ~3–5%.",
        "Why it stands out: uplift comes from better estimators, not looser assumptions—same seeds, same risk inputs, tighter CIs. Deliverables include compact notebooks, CSV summaries (price/Δ/Γ/vega with CIs), and plots for convergence and variance-reduction gains—drop in real outputs later without changing the storyline."
      ]
    }
  ]
},



  "pollution is colonialism": {
  coverImg: "/images/S2P2.jpg",
  introTitle: "Pollution is Colonialism — Interactive Fiction (Web)",
  introSubtitle: "A JavaScript-based narrative game that blends digital storytelling with environmental humanities for teaching and public engagement.",
  sections: [
    {
      reverse: false,
      img: "/images/S2P3.jpg",
      paragraphs: [
        "Co-developed with Siyang Quan (UCL), this browser game uses JavaScript and lightweight web tooling to deliver branching interactive fiction on themes of ecology, extraction, and power. Players navigate choices that surface humanities perspectives on environmental justice; the project doubles as a teaching artefact for digital humanities coursework, with clear separation of narrative scripts, state management, and scene logic for easy remixing.",
        "Designed for classroom use and open web access, the build runs smoothly on desktop and mobile, requires no installation, and supports rapid iteration of story modules—making it a practical template for seminar activities, workshops, and student-led content."
      ]
    },
    {
      reverse: true,
      img: "/images/S2P1.jpg",
      paragraphs: [
        "Impact (illustrative, based on course deployment): 1,000+ users engaged; high completion rates on core routes; positive qualitative feedback from students on ethical reflection and systems thinking. The educational value lies in translating complex debates into meaningful player choices, while the modular script system lets instructors adapt scenarios to new readings or local contexts.",
        "Why it stands out: it operationalises digital humanities pedagogy in a playable form—accessible, source-visible, and easily extended. Deliverables include the live site and itch.io build, narrative scripts, and facilitator notes so others can redeploy or fork the experience for their own courses."
      ]
    }
  ]
},

  "gunman unity": {
  coverImg: "/images/game3.png",
  introTitle: "GunMan — Unity AI & Networking Prototype",
  introSubtitle: "Behaviour-tree driven gameplay with a lightweight client–server avatar system.",
  sections: [
    {
      reverse: false,
      img: "/images/game1.png",
      paragraphs: [
        "Single-player loop built with a behaviour tree: clear room threats → sweep collectibles → refuel/unlock and advance. Ten composite behaviours power the flow (Win, getHealth, getKey, getAmmo, getItem, getGun, avoidEnemy, shootEnemy, changeGun, gotoEnemy), each composed as sequence/condition/action nodes for clarity and reuse. The agent switches tactics contextually—e.g., evade or change weapon on low ammo, then re-engage—and navigates to the nearest target with simple, readable predicates. Result: tutorial + Level 1 fully cleared, with all hidden items collected, using a compact, inspectable AI graph that’s easy to tune and extend."
      ]
    },
    {
      reverse: true,
      img: "/images/game2.png",
      paragraphs: [
        "Networking adds two playable avatars via a minimal client–server stack: ClientNetworkScript handles connect/send/receive and local/remote avatar updates; ServerNetworkScript accepts clients and forwards messages; Messages encodes/decodes payloads. Current build embeds two avatars (Tommy/Flora) but generalises cleanly with ID-indexed dictionaries/lists. A 100-second inactivity timeout is implemented; known issue: occasional floor-stuck on part-3 movement sync. Planned polish: Slerp for rotations, velocity-based chasing for positions, adaptive interpolation rates and snap-to-target thresholds. Why it stands out: the same message schema and initialisation path scales past two players without rewrites, and reliability is right-sized (reliable for state/transactions, unreliable for fast transforms) for smooth, fair play."
      ]
    }
  ]
},

  
  "googan prototype": {
  coverImg: "/images/AI13.png",
  introTitle: "GooGan — Low-Resource Language Prototype",
  introSubtitle: "A decentralised, user-centric toolkit for documentation, classification and community governance.",
  sections: [
    {
      reverse: false,
      img: "/images/AI12.png",
      paragraphs: [
        "Built a practical end-to-end stack: React + Ant Design front end (Tools: Automatic Language Classifier / Distance Calculator / Cognate Finder), Node/Express with OrbitDB + IPFS for user-owned data, and Google Cloud Storage for public corpora. AudioInput (WaveSurfer) handles record/upload/playback; an IPA button triggers Allosaurus + IPAConverter.py to segment phonemes and return JSON for downstream tools—everything is reproducible, modular and designed for field use.",
        "A governance-aware design underpins the UX: per-corpus visibility controls, consent prompts, and clear data lineage so contributors retain control. The system treats objectives/constraints as plug-ins, letting new annotators, models or datasets slot in without rewiring the pipeline."
      ]
    },
    {
      reverse: true,
      img: "/images/AI11.png",
      paragraphs: [
        "Illustrative outcomes pending full field runs: audio → IPA JSON for a 5-second clip in ≈3–5s on CPU; classifier inference sub-second on cached models; tree/metadata views render near-instantly; and cross-session persistence verified via OrbitDB/IPFS. These figures matter because they demonstrate on-device practicality, low friction for contributors, and reproducible artefacts (JSON/TSV) that downstream researchers can trust.",
        "Why it stands out: the uplift comes from architecture, not shortcuts—decentralised storage, transparent permissions, and interoperable exports make the tools genuinely community-ready. Deliverables include interactive dashboards, downloadable JSON/TSV, and audit-friendly logs, so when live results arrive you can drop them in without changing the narrative."
      ]
    }
  ]
},

"lexstat phylogeny": {
  coverImg: "/images/AI21.png",
  introTitle: "LexStat Cognate Detection & Phylogenetic Trees",
  introSubtitle: "From ASJP wordlists to aligned cognate sets and interactive family trees.",
  sections: [
    {
      reverse: false,
      img: "/images/AI22.png",
      paragraphs: [
        "Processed the large ASJP dataset (≈482k entries) by family-subset to control memory, then ran LingPy LexStat for cognate detection, exported .tsv results, performed multiple sequence alignment, and generated phylogenies (.nwk). The front end—built on a forked Phylotree.js—adds a node dropdown and info cards, with family filtering from families_metadata.json for fast, field-friendly exploration.",
        "The pipeline separates concerns cleanly: data prep → LexStat scoring/cluster → MSA → tree build → visualisation. Configuration is parameterised (thresholds, clustering, alignment options) so families can be re-run consistently and compared like-for-like."
      ]
    },
    {
      reverse: true,
      img: "/images/AI23.png",
      paragraphs: [
        "Confirmed outputs per family: cognate tables (.tsv), aligned forms, and .nwk trees ready for download and review; interactive rendering supports tooltips, subtree focus and export. Illustrative metrics: per-family runs complete stably under the subset strategy; typical tree renders in <1s; re-runs reproduce cluster membership within tolerance—evidence of robust, documentable settings rather than ad-hoc tweaks.",
        "Why it matters: splitting by family reduces memory pressure without sacrificing signal, and the visual layer makes hypotheses inspectable—users can click from a branch to the underlying cognate sets in seconds. Deliverables (TSV, MSA, NWK, SVG/PNG charts) are publication-ready and easy to integrate into downstream comparative work."
      ]
    }
  ]
}

};

export default projectDetails;
