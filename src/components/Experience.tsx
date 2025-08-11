const Experience = () => {
  const experiences = [
    {
      title: "Azure Data Engineer",
      company: "ELANCO",
      period: "September 2024 – Present",
      location: "Current Position",
      description: "Azure Data Engineer focused on developing robust ETL solutions using Azure Databricks (Scala, PySpark, SQL) and Azure Data Factory (ADF). Experienced in constructing fact/dimension models, executing incremental data strategies, and streamlining data workflows to Azure Data Lake Storage (ADLS). Proficient with Azure Blob Storage, ADLS Gen2, Azure SQL DB, and orchestrating CI/CD processes through GitHub.",
      category: "Commercial – Data Ingestion and Transformation",
      achievements: [
        "Partnered with business stakeholders to capture and evaluate requirements, converting them into comprehensive data solutions; engineered complex SQL queries, stored procedures, and views in SSMS",
        "Architected and implemented scalable data models and ETL frameworks using SQL and PySpark, enhancing data processing and transformation for enterprise-level analytics",
        "Constructed and managed automated data pipelines in Azure Data Factory to streamline Databricks notebook operations and incremental loading processes; developed interactive Power BI dashboards for actionable business intelligence",
        "Maintained version control through GitHub repositories and facilitated team collaboration, ensuring seamless integration and operational continuity in Databricks environments",
        "Implemented standardized CI/CD frameworks using GitHub Actions, driving consistent and reliable deployment methodologies organization-wide"
      ],
      skills: ["Azure Databricks", "Scala", "PySpark", "SQL", "Azure Data Factory", "Azure Data Lake Storage", "Azure Blob Storage", "ADLS Gen2", "Azure SQL DB", "Power BI", "GitHub Actions", "CI/CD", "SSMS"]
    },
    {
      title: "Software Engineering Intern (Data Engineering Team)",
      company: "Juniper Networks",
      period: "January 2024 – July 2024",
      location: "Internship",
      achievements: [
        "Developed ETL pipelines using Python and SQL to process network telemetry data from routers and switches, enabling real-time monitoring and analytics for network operations teams",
        "Designed data validation frameworks to ensure accuracy of network performance metrics, improving data quality for downstream analytics and reporting systems",
        "Collaborated with the data engineering team to implement data ingestion workflows that processed log files and performance data into centralized data repositories",
        "Optimized data storage and retrieval processes, reducing query response times for network health dashboards and operational reporting tools",
        "Automated data processing workflows using Python scripts, cutting manual data handling time by 30% and enhancing reliability across production environments"
      ],
      skills: ["Python", "SQL", "ETL Pipelines", "Data Validation", "Network Telemetry", "Data Engineering", "Automation"]
    }
  ];

  return (
    <section id="experience" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="#6366f1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            1.5+ years of experience in data engineering and software development, 
            with a focus on cloud-based data integration and performance optimization.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex items-center text-lg text-blue-600 font-semibold mb-2">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 104 0 2 2 0 00-4 0zm6 0a2 2 0 104 0 2 2 0 00-4 0z" clipRule="evenodd" />
                    </svg>
                    {exp.company}
                  </div>
                  {exp.category && (
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {exp.category}
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-2">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {exp.period}
                  </div>
                  <p className="text-gray-600 text-sm">{exp.location}</p>
                </div>
              </div>

              {/* Description */}
              {exp.description && (
                <div className="mb-6">
                  <p className="text-gray-700 text-lg leading-relaxed bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    {exp.description}
                  </p>
                </div>
              )}

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700 leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies & Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline visual */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center w-full max-w-md mx-auto">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <p className="text-xs text-gray-600 mt-1">2024</p>
              </div>
              <div className="w-24 h-px bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <p className="text-xs text-gray-600 mt-1">Juniper</p>
              </div>
              <div className="w-24 h-px bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <p className="text-xs text-gray-600 mt-1">Elanco</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
