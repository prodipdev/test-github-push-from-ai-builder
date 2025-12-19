import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in-down">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-purple-300 bg-purple-900 bg-opacity-50 rounded-full border border-purple-500 border-opacity-30">
            Welcome to the Future
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Build Something
          </span>
          <br />
          <span className="text-white">
            Extraordinary
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-down leading-relaxed">
          Transform your ideas into reality with cutting-edge technology and innovative solutions that push the boundaries of what is possible.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm text-white text-lg font-bold rounded-full border-2 border-white border-opacity-20 hover:bg-opacity-20 hover:border-opacity-40 transform hover:scale-105 transition-all duration-300 shadow-xl">
            Learn More
          </button>
        </div>
        
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
          <div className="group p-6 bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl border border-white border-opacity-10 hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Experience unparalleled speed and performance</p>
          </div>
          
          <div className="group p-6 bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl border border-white border-opacity-10 hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Secure by Default</h3>
            <p className="text-gray-400">Enterprise-grade security built into every layer</p>
          </div>
          
          <div className="group p-6 bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl border border-white border-opacity-10 hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Cloud Native</h3>
            <p className="text-gray-400">Scale effortlessly with modern cloud infrastructure</p>
          </div>
        </div>
        
        <div className="mt-16 animate-fade-in">
          <p className="text-sm text-gray-500 mb-4">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="text-2xl font-bold text-white">ACME</div>
            <div className="text-2xl font-bold text-white">TechCorp</div>
            <div className="text-2xl font-bold text-white">Innovate</div>
            <div className="text-2xl font-bold text-white">FutureLabs</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}