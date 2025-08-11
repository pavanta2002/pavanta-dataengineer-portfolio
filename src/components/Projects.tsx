"use client";

const Projects = () => {
  const projects = [
    {
      title: "Adventure Works Dataset – Data Engineering Challenge",
      category: "Data Pipeline Development",
      duration: "15-day Challenge",
      status: "1st Place Winner",
      description: "During the onboarding phase, completed a comprehensive hands-on challenge using Azure Data Factory and Databricks to design a real-world data integration pipeline.",
      achievements: [
        "Engineered high-performance ETL workflows to process and transform multi-table Adventure Works datasets, focusing on modularity, reusability, and low-latency execution",
        "Applied incremental load strategies, improved transformation logic, and ensured data integrity through validation checkpoints and schema enforcement",
        "Won 1st place among all new joiners in the data team, recognized for technical excellence, innovation, and completeness of solution",
        "Delivered a formal project presentation to department leadership, highlighting business impact, architecture choices, and future optimization scope"
      ],
      technologies: ["Azure Data Factory", "Databricks", "PySpark", "SQL", "Delta Lake", "ETL/ELT"],
      highlights: [
        "🏆 1st Place Winner",
        "⚡ High-Performance ETL",
        "🔄 Incremental Loading",
        "✅ Data Validation"
      ]
    },
    {
      title: "Dynamic Pricing & Shipping Feature Store Pipeline",
      category: "Data Engineering & MLOps",
      duration: "Production Implementation",
      status: "Production Ready",
      description: "Designed and implemented a robust data pipeline leveraging Databricks and Delta Lake to enable dynamic pricing and shipping estimation for e-commerce use cases. The project follows a multi-layered architecture (Bronze, Silver, Gold) to systematically ingest, clean, and transform raw business data into actionable features for real-time pricing and shipping optimization.",
      achievements: [
        "Built end-to-end ETL pipelines using Databricks notebooks and Spark, processing data from sources like product metadata, transactions, suppliers, clickstreams, market feeds, and shipping tables",
        "Architected a layered data lake (Bronze/Silver/Gold) on Delta Lake, enabling scalable and reliable storage with efficient partitioning strategies",
        "Developed advanced feature engineering logic (anchor product identification, margin calculation, conversion rates, shipping cost bands) in the Gold layer for downstream analytics",
        "Integrated experimentation support (A/B toggles) and data quality monitoring for continuous improvement and reliability",
        "Served feature-enriched outputs via real-time APIs and scheduled data exports to power business applications and dashboards",
        "Automated data quality checks and monitoring using Databricks and Great Expectations"
      ],
      technologies: ["Databricks", "Delta Lake", "Apache Spark", "PySpark", "SQL", "Great Expectations", "ETL/ELT"],
      highlights: [
        "🏪 E-commerce Pipeline",
        "⚡ Real-time Features",
        "🎯 Dynamic Pricing",
        "📊 Multi-layer Architecture"
      ]
    },
    {
      title: "Talent Acquisition Agent – Generative AI",
      category: "AI/ML Project",
      duration: "Cross-functional Initiative",
      status: "Prototype Completed",
      description: "Led a cross-functional initiative to design a Talent Search Agent leveraging AI for automated resume screening and enhanced candidate-role matching.",
      achievements: [
        "Designed a prototype Talent Search Agent using LLMs (Gemini/OpenAI APIs) to automate resume screening and enhance candidate-role matching accuracy",
        "Collaborated across engineering, ML, and TA teams to define workflows, model integration, and cloud infrastructure for scalable deployment",
        "Implemented natural language processing capabilities for intelligent resume parsing and skill extraction",
        "Developed scoring algorithms to rank candidates based on role requirements and experience alignment"
      ],
      technologies: ["LLMs", "Gemini API", "OpenAI API", "Python", "NLP", "Cloud Infrastructure"],
      highlights: [
        "🤖 AI-Powered Matching",
        "🔍 Resume Screening",
        "⚙️ API Integration",
        "📊 Scoring Algorithms"
      ]
    }
  ];

  return (
    <section id="projects" className="relative py-20 bg-white overflow-hidden">
      {/* Subtle diagonal lines background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="diagonals" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M0,30 L30,0" stroke="#8b5cf6" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonals)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Showcasing key projects that demonstrate expertise in data engineering, 
            cloud technologies, and innovative problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Project Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full mr-3">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-blue-100">{project.duration}</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Description */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Highlights:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center">
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                  <div className="space-y-3">
                    {project.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
