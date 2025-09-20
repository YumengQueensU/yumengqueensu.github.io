// skillsData.js

export const skills = [
  {
    name: "Full Stack Development",
    projects: [
      {
        id: "marketplace",
        title: "Online Marketplace",
        imgUrl: "/images/S2P3.jpg",
        iframeUrl: "https://portfolio-optimisation-tmszbfem5wq8sqlvqbmb9c.streamlit.app",
        features: [
          { title: "Project Summary", description: "Developed a portfolio optimisation platform integrating classical models and neural networks for strategy evaluation and visualisation" },
          { title: "Better Performance", description: "GRU-based deep learning model outperformed Markowitz, achieving 7.11% return with superior volatility control in complex market scenarios" },
          { title: "Interactive Visualisation", description: "Delivered full-stack pipeline from modelling to deployment with Streamlit, offering interactive visualisation and enhanced user experience" }
        ]
      },
      {
        id: "health-tracker",
        title: "Health Tracker App",
        imgUrl: "/images/S2P2.jpg",
        features: [
          { title: "User Dashboard", description: "Customizable user dashboard with tracking for steps, heart rate, and calorie intake." },
          { title: "Notifications", description: "Real-time alerts and reminders to encourage healthy habits and medication adherence." },
          { title: "Data Analysis", description: "Comprehensive analytics features to track progress over time and adjust goals." }
        ]
      }
    ]
  },
  {
    name: "Game Development",
    projects: [
      {
        id: "fantasy-rpg",
        title: "Fantasy Adventure RPG",
        imgUrl: "/images/S2P2.jpg",
        features: [
          { title: "Immersive World", description: "A vast open world with dynamic weather systems and a day-night cycle that affects gameplay." },
          { title: "Complex Storytelling", description: "Branching narratives that allow player choices to significantly impact story outcomes and character development." },
          { title: "Multiplayer Elements", description: "Seamless integration of multiplayer modes that allow for both cooperative and competitive play without leaving the campaign." }
        ]
      },
      {
        id: "arcade-racing",
        title: "Arcade Racing Game",
        imgUrl: "/images/S2P1.jpg",
        features: [
          { title: "High-Speed Races", description: "High-octane gameplay with an emphasis on speed and spectacle over realism." },
          { title: "Customizable Vehicles", description: "Extensive customization options for cars, allowing players to modify performance and aesthetics to suit their racing style." },
          { title: "Dynamic Tracks", description: "Tracks that change in real-time during races, adding unexpected twists and new challenges." }
        ]
      }
    ]
  },
  {
    name: "AI Engineering",
    projects: [
      {
        id: "ai-chatbot",
        title: "AI Chatbot",
        imgUrl: "/images/S2P2.jpg",
        features: [
          { title: "NLP Capabilities", description: "Advanced natural language processing to understand and respond to user queries effectively." },
          { title: "Machine Learning", description: "Self-learning algorithm to improve response accuracy based on user interactions." },
          { title: "Integration", description: "Easy integration with existing customer service platforms to streamline operations." }
        ]
      },
      {
        id: "data-analysis-system",
        title: "Automated Data Analysis System",
        imgUrl: "/images/S2P2.jpg",
        features: [
          { title: "Big Data Processing", description: "Capable of processing and analyzing large datasets quickly and efficiently." },
          { title: "Predictive Analytics", description: "Uses historical data to predict trends and user behavior." },
          { title: "Visualization Tools", description: "Dynamic visualization tools to help represent data in an accessible way." }
        ]
      }
    ]
  }
];

export default skills;
