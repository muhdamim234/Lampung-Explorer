import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMountain, FaBars, FaStar, FaSearch, FaMapMarkerAlt, FaWater, FaArrowRight, FaSun, FaCamera, FaUmbrellaBeach, FaLandmark, FaMusic, FaUtensils, FaPray, FaBuilding } from 'react-icons/fa';

function Explore() {
  const [activeFilter, setActiveFilter] = useState('All Places');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All Places', 'Sunrise', 'Photography', 'Beaches', 'Mountains'];
  
  const places = [
    {
      id: 1,
      title: "Pesawaran Coastline",
      description: "Dramatic cliffs meeting turquoise waters with stunning sunset views. Perfect for photography and relaxation.",
      category: "Beaches",
      location: "Pesawaran, Lampung",
      gradient: "from-blue-100 to-blue-300"
    },
    {
      id: 2,
      title: "Tanggamus Highlands",
      description: "Misty mountains and coffee plantations with cool refreshing air. Ideal for hiking and nature lovers.",
      category: "Mountains",
      location: "Tanggamus, Lampung",
      gradient: "from-green-100 to-green-300"
    },
    {
      id: 3,
      title: "Krui Surf Corridor",
      description: "World-class waves and vibrant beach culture for surf enthusiasts. The ultimate surfing destination.",
      category: "Beaches",
      location: "West Lampung",
      gradient: "from-purple-100 to-purple-300"
    },
    {
      id: 4,
      title: "Way Kambas National Park",
      description: "Home to Sumatran elephants and rich biodiversity. Experience wildlife in their natural habitat.",
      category: "Wildlife",
      location: "East Lampung",
      gradient: "from-amber-100 to-amber-300"
    },
    {
      id: 5,
      title: "Siger Tower",
      description: "Iconic cultural monument with panoramic views of Lampung's coastline and mountains.",
      category: "Cultural",
      location: "Bandar Lampung",
      gradient: "from-red-100 to-red-300"
    },
    {
      id: 6,
      title: "Kiluan Bay Dolphins",
      description: "Swim with friendly dolphins in their natural habitat at this pristine bay.",
      category: "Wildlife",
      location: "Tanggamus, Lampung",
      gradient: "from-cyan-100 to-cyan-300"
    }
  ];

  const featured = [
    {
      id: 1,
      title: "Lake Toba & Batak Culture",
      description: "Explore the world's largest volcanic lake and the unique Batak language, architecture, and musical traditions.",
      gradient: "from-blue-200 to-cyan-300"
    },
    {
      id: 2,
      title: "Bali Aga Villages",
      description: "Visit the original Balinese villages that preserve pre-Hindu traditions, rituals, and ancient Balinese language.",
      gradient: "from-green-200 to-emerald-300"
    }
  ];

  const experiences = [
    { icon: <FaSun />, title: "Sunrise Watching", desc: "Best spots for magical sunrise moments" },
    { icon: <FaCamera />, title: "Photography", desc: "Picture-perfect locations for photographers" },
    { icon: <FaUmbrellaBeach />, title: "Beach Relaxation", desc: "Pristine beaches for ultimate relaxation" },
    { icon: <FaLandmark />, title: "Cultural Heritage", desc: "Explore historical sites and traditions" },
    { icon: <FaMusic />, title: "Local Festivals", desc: "Experience vibrant cultural festivals" },
    { icon: <FaUtensils />, title: "Culinary Tours", desc: "Taste authentic Lampung cuisine" },
    { icon: <FaPray />, title: "Spiritual Sites", desc: "Visit sacred temples and religious sites" },
    { icon: <FaBuilding />, title: "Traditional Villages", desc: "Immerse in local village life" }
  ];

  const filteredPlaces = activeFilter === 'All Places' 
    ? places 
    : places.filter(place => place.category === activeFilter);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"`);
    }
  };

  const handlePlaceClick = (title) => {
    alert(`Loading details for: ${title}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased">
      {/* Navigation - SAMA dengan Home page */}
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
              <Link to="/" className="text-gray-900 hover:text-blue-600 font-bold text-xl transition-colors">
                Home
              </Link>
              <Link to="/explore" className="text-blue-600 font-bold text-xl border-b-2 border-blue-600">
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

      {/* Hero Section - Style sama dengan Home */}
      <section 
        className="relative text-white py-24 md:py-36"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            DISCOVER HIDDEN<br />
            <span className="bg-gradient-to-r from-amber-300 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              INDONESIA
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Step beyond the guidebooks. Immerse yourself in authentic experiences, cultural rhythms, and untouched landscapes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-12">
        {/* Places Explorer Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              PLACES EXPLORER
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Browse destinations by geography, experience type, mood, or discover hidden gems.
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-2xl transform -translate-y-1'
                    : 'bg-white text-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          {/* Search Bar - Style sama dengan Home */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-1 border-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-3xl"></div>
                
                <div className="relative flex flex-col sm:flex-row bg-white/10 rounded-2xl">
                  <div className="flex-1 p-6 sm:p-8">
                    <div className="flex items-center">
                      <FaSearch className="text-white mr-6 text-3xl" />
                      <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        placeholder="Search for cultural experiences, hidden gems, or specific locations..."
                        className="w-full bg-transparent border-none text-white placeholder-white/90 focus:outline-none text-2xl md:text-3xl font-medium"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={handleSearch}
                    className="relative bg-gradient-to-r from-amber-400 to-orange-500 text-white px-10 py-6 font-black rounded-2xl hover:opacity-95 transition-all transform hover:scale-105 text-xl shadow-2xl overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <span className="relative flex items-center">
                      <FaSearch className="mr-3" /> SEARCH
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => (
              <div 
                key={place.id} 
                className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-4xl transition-all duration-400 hover:-translate-y-3 border border-gray-100"
                onClick={() => handlePlaceClick(place.title)}
              >
                <div className={`relative h-64 bg-gradient-to-br ${place.gradient}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full font-bold text-lg">
                    {place.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-black mb-4 text-gray-900">{place.title}</h3>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {place.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-3 text-xl" />
                      <span className="text-lg font-medium">{place.location}</span>
                    </div>
                    <button className="text-blue-600 font-black text-xl hover:text-blue-700 cursor-pointer flex items-center group">
                      EXPLORE <FaArrowRight className="ml-3 text-lg group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Featured Destinations */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              FEATURED DESTINATIONS
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Curated cultural experiences selected by our community of explorers
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {featured.map((item) => (
              <div key={item.id} className="relative rounded-3xl overflow-hidden shadow-3xl hover:shadow-4xl transition-shadow duration-400">
                <div className={`h-80 bg-gradient-to-br ${item.gradient}`}></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-10">
                  <h3 className="text-3xl font-black mb-4 text-white">{item.title}</h3>
                  <p className="text-white/90 mb-6 text-lg">
                    {item.description}
                  </p>
                  <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
                    DISCOVER MORE →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Browse By Experience */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              BROWSE BY EXPERIENCE
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Find your perfect journey based on what moves you
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer group"
                onClick={() => alert(`Browsing experiences for: ${exp.title}`)}
              >
                <div className="text-5xl mb-6 text-blue-500 group-hover:text-blue-600 transition-colors">
                  {exp.icon}
                </div>
                <h4 className="text-2xl font-black mb-4 text-gray-900">{exp.title}</h4>
                <p className="text-gray-700 text-lg">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer - SAMA dengan Home page */}
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

export default Explore;