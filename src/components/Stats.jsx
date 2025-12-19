import React from 'react'

export default function Stats() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join the growing community of developers and businesses building the future
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group text-center p-8 bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl border border-white border-opacity-10 hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              10M+
            </div>
            <div className="text-gray-400 font-medium">Active Users</div>
          </div>

          <div className="group text-center p-8 bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl border border-white border-opacity-10 hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              99.9%
            </div>
            <div className="text-gray-400 font-medium">Uptime</div>
          </div>

          <div className="group text-center p-8 bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl border border-white border-opacity-10 hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              150+
            </div>
            <div className="text-gray-400 font-medium">Countries</div>
          </div>

          <div className="group text-center p-8 bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl border border-white border-opacity-10 hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-300 transform hover:scale-105">
            <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-gray-400 font-medium">Support</div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-900 to-pink-900 bg-opacity-30 backdrop-blur-sm rounded-3xl border border-purple-500 border-opacity-20 p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Join thousands of developers who are already building amazing applications with our platform. Start your free trial today and experience the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-purple-900 text-lg font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm text-white text-lg font-bold rounded-full border-2 border-white border-opacity-20 hover:bg-opacity-20 hover:border-opacity-40 transform hover:scale-105 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-10">
                <svg className="w-12 h-12 text-purple-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h4 className="text-white font-bold mb-2">No Credit Card</h4>
                <p className="text-gray-400 text-sm">Start free, upgrade anytime</p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-10">
                <svg className="w-12 h-12 text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-white font-bold mb-2">5 Min Setup</h4>
                <p className="text-gray-400 text-sm">Quick and easy onboarding</p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-10">
                <svg className="w-12 h-12 text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h4 className="text-white font-bold mb-2">Secure & Safe</h4>
                <p className="text-gray-400 text-sm">Enterprise-grade security</p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-10">
                <svg className="w-12 h-12 text-pink-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h4 className="text-white font-bold mb-2">24/7 Support</h4>
                <p className="text-gray-400 text-sm">Always here to help you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}