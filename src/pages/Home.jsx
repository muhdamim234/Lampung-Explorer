import React from 'react';
import { Link } from 'react-router-dom';
import { FaMountain, FaBars, FaStar, FaSearch, FaArrowRight } from 'react-icons/fa';

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased">
      {/* Navigation - SAMA dengan Explore page */}
      <nav className="bg-white shadow-xl sticky top-0 z-50 w-full">
        <div className="w-full mx-auto">
          <div className="flex justify-between items-center h-24 px-8 sm:px-12 lg:px-20">
            <div className="flex items-center space-x-5">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl flex items-center justify-center">
                <FaMountain className="text-white text-3xl" />
              </div>
              <div>
                <div className="text-4xl font-black bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  Lampung Explorer
                </div>
                <div className="text-lg text-gray-600 font-medium">Discover Hidden Indonesia</div>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-12">
              <Link to="/" className="text-blue-600 font-bold text-xl border-b-2 border-blue-600">
                Home
              </Link>
              <Link to="/explore" className="text-gray-900 hover:text-blue-600 font-bold text-xl transition-colors">
                Explore
              </Link>
              <Link to="/stories" className="text-gray-900 hover:text-blue-600 font-bold text-xl transition-colors">
                Stories
              </Link>
              <Link to="/itinerary" className="text-gray-900 hover:text-blue-600 font-bold text-xl transition-colors">
                Itinerary
              </Link>
              <Link to="/resources" className="text-gray-900 hover:text-blue-600 font-bold text-xl transition-colors">
                Resources
              </Link>
            </div>
            
            <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-3 font-bold rounded-xl hover:opacity-90 transition-opacity">
              Share Story
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Style sama dengan Explore */}
      <section 
        className="relative text-white py-24 md:py-36"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            DESTINASI<br />
            <span className="bg-gradient-to-r from-amber-300 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              LAMPUNG
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Jelajahi keindahan alam, sosial budaya, dan cerita Seputar Lampung.
          </p>
          
          {/* Search Box - Style sama dengan Explore */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-1 border-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl"></div>
                
                <div className="relative flex flex-col sm:flex-row bg-white/10 rounded-2xl">
                  <div className="flex-1 p-6 sm:p-8">
                    <div className="flex items-center">
                      <FaSearch className="text-white mr-6 text-3xl" />
                      <input 
                        type="text" 
                        placeholder="What moves you today? Search destinations, experiences..."
                        className="w-full bg-transparent border-none text-white placeholder-white/90 focus:outline-none text-2xl md:text-3xl font-medium"
                      />
                    </div>
                  </div>
                  <button className="relative bg-gradient-to-r from-amber-400 to-orange-500 text-white px-10 py-6 font-black rounded-2xl hover:opacity-95 transition-all transform hover:scale-105 text-xl shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <span className="relative flex items-center">
                      <FaSearch className="mr-3" /> CARI
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-12">
        {/* Destinations Section - Menggunakan konten asli Home */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              DESTINASI WISATA
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Temukan tempat-tempat menakjubkan yang menunggu untuk dijelajahi di Lampung
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Pesawaran Coastline */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-4xl transition-all duration-400 hover:-translate-y-3 border border-gray-100">
              <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full font-bold text-lg">
                  Pantai
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-black mb-4 text-gray-900">Pesawaran Coastline</h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Dramatic cliffs meeting turquoise waters with stunning sunset views.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 text-xl mr-2" />
                    <span className="text-lg font-bold text-gray-800">4.8</span>
                  </div>
                  <button className="text-blue-600 font-black text-xl hover:text-blue-700 cursor-pointer flex items-center group">
                    EXPLORE <FaArrowRight className="ml-3 text-lg group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Card 2 - Tanggamus Highlands */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-4xl transition-all duration-400 hover:-translate-y-3 border border-gray-100">
              <div className="relative h-64 bg-gradient-to-br from-green-100 to-green-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full font-bold text-lg">
                  Pegunungan
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-black mb-4 text-gray-900">Tanggamus Highlands</h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Misty mountains and coffee plantations with cool refreshing air.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 text-xl mr-2" />
                    <span className="text-lg font-bold text-gray-800">4.9</span>
                  </div>
                  <button className="text-blue-600 font-black text-xl hover:text-blue-700 cursor-pointer flex items-center group">
                    EXPLORE <FaArrowRight className="ml-3 text-lg group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Card 3 - Krui Surf Corridor */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-4xl transition-all duration-400 hover:-translate-y-3 border border-gray-100">
              <div className="relative h-64 bg-gradient-to-br from-purple-100 to-purple-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full font-bold text-lg">
                  Surfing
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-black mb-4 text-gray-900">Krui Surf Corridor</h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  World-class waves and vibrant beach culture for surf enthusiasts.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 text-xl mr-2" />
                    <span className="text-lg font-bold text-gray-800">4.7</span>
                  </div>
                  <button className="text-blue-600 font-black text-xl hover:text-blue-700 cursor-pointer flex items-center group">
                    EXPLORE <FaArrowRight className="ml-3 text-lg group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Langsung ke Why Choose Us Section (tanpa ruang kosong) */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              MENGAPA MEMILIH KAMI
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Platform terbaik untuk menjelajahi keindahan Lampung
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl mb-6 text-blue-500">
                🗺️
              </div>
              <h4 className="text-2xl font-black mb-4 text-gray-900">Panduan Lengkap</h4>
              <p className="text-gray-700 text-lg">Informasi detail setiap destinasi dengan peta interaktif</p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl mb-6 text-green-500">
                📸
              </div>
              <h4 className="text-2xl font-black mb-4 text-gray-900">Foto Nyata</h4>
              <p className="text-gray-700 text-lg">Foto dari pengunjung nyata, bukan stock photo</p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-5xl mb-6 text-purple-500">
                💬
              </div>
              <h4 className="text-2xl font-black mb-4 text-gray-900">Komunitas Aktif</h4>
              <p className="text-gray-700 text-lg">Tips dan pengalaman langsung dari traveler</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer - SAMA dengan Explore page */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-10 lg:mb-0">
              <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
                LAMPUNG EXPLORER
              </div>
              <p className="text-gray-400 mt-4 text-2xl font-medium">Discover Hidden Indonesia</p>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-gray-300 text-2xl">© 2024 Lampung Explorer</p>
              <p className="text-gray-500 text-xl mt-3">Built with React + Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;