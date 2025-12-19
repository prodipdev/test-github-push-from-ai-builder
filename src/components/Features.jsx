import React from 'react'

export default function Features() {
  return (
    <section className="relative py-20 bg-slate-900 bg-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale your applications with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group p-8 bg-gradient-to-br from-purple-900 from-opacity-20 to-transparent rounded-2xl border border-purple-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 transform hover:scale-105">
            <div className="w-14 h-14 mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Advanced Security</h3>
            <p className="text-gray-400 leading-relaxed">
              Bank-level encryption and security protocols to keep your data safe and protected at all times
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-blue-900 from-opacity-20 to-transparent rounded-2xl border border-blue-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 transform hover:scale-105">
            <div className="w-14 h-14 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Blazing Fast</h3>
            <p className="text-gray-400 leading-relaxed">
              Optimized performance with lightning-fast load times and seamless user experience
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-green-900 from-opacity-20 to-transparent rounded-2xl border border-green-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 transform hover:scale-105">
            <div className="w-14 h-14 mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Scalable Infrastructure</h3>
            <p className="text-gray-400 leading-relaxed">
              Grow from zero to millions of users with our auto-scaling cloud infrastructure
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-orange-900 from-opacity-20 to-transparent rounded-2xl border border-orange-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 transform hover:scale-105">
            <div className="w-14 h-14 mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Full Customization</h3>
            <p className="text-gray-400 leading-relaxed">
              Tailor every aspect to your needs with our flexible and powerful customization options
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-pink-900 from-opacity-20 to-transparent rounded-2xl border border-pink-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 transform hover:scale-105">
            <div className="w-14 h-14 mb-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Team Collaboration</h3>
            <p className="text-gray-400 leading-relaxed">
              Work together seamlessly with real-time collaboration tools and shared workspaces
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-indigo-900 from-opacity-20 to-transparent rounded-2xl border border-indigo-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 transform hover:scale-105">
            <div className="w-14 h-14 mb-6 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Analytics Dashboard</h3>
            <p className="text-gray-400 leading-relaxed">
              Gain deep insights with comprehensive analytics and beautiful data visualizations
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  )
}