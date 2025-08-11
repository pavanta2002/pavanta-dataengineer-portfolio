const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Professional Summary */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Data Engineering Professional
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Results-driven <span className="font-semibold text-blue-600">Data Engineering professional</span> with 
                <span className="font-semibold text-purple-600"> 1.5+ years</span> of hands-on experience designing and implementing 
                scalable data pipelines, ETL/ELT processes, and cloud-based data architectures using modern Azure technologies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Expertise in building robust data solutions that transform raw data into actionable insights, 
                with a proven track record in <span className="font-semibold text-blue-600">data warehousing</span>, 
                <span className="font-semibold text-purple-600"> performance optimization</span>, and ensuring data quality across enterprise systems.
              </p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                Key Achievements
              </h3>
              <div className="space-y-6">
                <div className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">1</span>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Performance Optimization</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Improved data load performance by <span className="font-semibold text-blue-600">30%</span> and reduced query execution time by <span className="font-semibold text-purple-600">40%</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">2</span>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Data Quality Enhancement</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Enhanced data quality by <span className="font-semibold text-purple-600">25%</span> through validation checks and schema enforcement
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group hover:bg-gradient-to-r hover:from-pink-50 hover:to-cyan-50 p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">3</span>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">Pipeline Reliability</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Achieved <span className="font-semibold text-pink-600">99.9%</span> pipeline uptime with automated failure alerts and monitoring
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 p-4 rounded-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">4</span>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">Cost Optimization</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Saved <span className="font-semibold text-cyan-600">$200/month</span> in compute costs through SQL tuning and cluster autoscaling
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
