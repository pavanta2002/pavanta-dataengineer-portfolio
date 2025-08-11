const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "SQL", level: 95, description: "Data Transformation, Performance Tuning, Query Optimization" },
        { name: "Python", level: 90, description: "Data Scripting, Validation, Automation" },
        { name: "PySpark", level: 85, description: "Distributed Data Processing, ETL Pipelines" }
      ]
    },
    {
      category: "Cloud Data Warehousing",
      icon: "☁️",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "Azure Synapse Analytics", level: 85, description: "Data Warehousing, Analytics Workspaces, SQL Pools" },
        { name: "Azure Data Lake Storage", level: 85, description: "ADLS Gen2, Data Storage Solutions" }
      ]
    },
    {
      category: "Cloud Services - Azure",
      icon: "🔧",
      gradient: "from-green-500 to-blue-500",
      skills: [
        { name: "Azure Data Factory", level: 95, description: "ETL/ELT, Parameterized Pipelines, Scheduling" },
        { name: "Azure Databricks", level: 90, description: "Notebooks, Delta Lake, PySpark Processing" },
        { name: "Azure DevOps", level: 80, description: "CI/CD Pipelines, Version Control Integration" }
      ]
    },
    {
      category: "Databases & Tools",
      icon: "🗃️",
      skills: [
        { name: "Microsoft SQL Server", level: 85, description: "Database Management, Performance Optimization" },
        { name: "Azure SQL Database", level: 85, description: "Cloud Database Solutions" },
        { name: "GitHub", level: 90, description: "Version Control, CI/CD Integration, Branching" }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-gray-500";
  };

  const getSkillColorLight = (level: number) => {
    if (level >= 90) return "bg-green-100 text-green-800";
    if (level >= 80) return "bg-blue-100 text-blue-800";
    if (level >= 70) return "bg-yellow-100 text-yellow-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Modern geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-pink-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float delay-4000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Technical Skills
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across the modern data engineering technology stack, 
            with hands-on experience in <span className="font-semibold text-blue-600">cloud platforms</span>, 
            <span className="font-semibold text-purple-600"> data processing frameworks</span>, and development tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`w-14 h-14 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center text-2xl mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    {/* Skill Header */}
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${getSkillColorLight(skill.level)}`}>
                        {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Intermediate" : "Beginner"}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                    {/* Skill Description */}
                    <p className="text-gray-600 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Competencies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Data Engineering Practices */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Data Engineering Practices</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Star Schema Design</li>
                  <li>• CDC Logic Implementation</li>
                  <li>• Data Validation & Quality</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>

              {/* Development Methodologies */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Development Practices</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Agile Methodologies</li>
                  <li>• CI/CD Workflows</li>
                  <li>• Version Control (Git)</li>
                  <li>• Code Review & Testing</li>
                </ul>
              </div>

              {/* Soft Skills */}
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Professional Skills</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Cross-functional Collaboration</li>
                  <li>• Problem Solving</li>
                  <li>• Technical Communication</li>
                  <li>• Project Leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Highlight */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Databricks Certified Data Engineer Associate
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
