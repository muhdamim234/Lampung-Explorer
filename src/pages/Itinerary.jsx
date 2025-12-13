import React from 'react';
import { Link } from 'react-router-dom';
import { FaMountain, FaArrowRight } from 'react-icons/fa';

const Itinerary = () => {
  // Data untuk itinerary templates
  const templates = [
    {
      id: 1,
      duration: "3 Days 2 Nights",
      tag: "Budget",
      tagColor: "bg-green-100 text-green-700",
      title: "Coastal Culture Sampler",
      description: "Beaches, fishing villages, and maritime traditions along Lampung's coastline.",
      distance: "180 km",
      cost: "IDR 1.2M - 1.8M",
      transport: "Motorcycle/Car",
      stops: ["Pesawaran Beach", "Krui Fishing Village", "Local Seafood Market"],
      borderColor: "border-l-blue-500"
    },
    {
      id: 2,
      duration: "5 Days 4 Nights",
      tag: "Standard",
      tagColor: "bg-amber-100 text-amber-700",
      title: "Highland Heritage Trail",
      description: "Mountain villages, coffee plantations, and traditional crafts in Lampung's highlands.",
      distance: "250 km",
      cost: "IDR 2.5M - 3.5M",
      transport: "4x4 Vehicle",
      stops: ["Tanggamus Highlands", "Coffee Plantations", "Traditional Weaving"],
      borderColor: "border-l-green-500"
    },
    {
      id: 3,
      duration: "7 Days 6 Nights",
      tag: "Comprehensive",
      tagColor: "bg-purple-100 text-purple-700",
      title: "Complete Cultural Immersion",
      description: "Deep dive into language, rituals, and daily life across multiple regions.",
      distance: "400 km",
      cost: "IDR 4M - 6M",
      transport: "Car + Local Transport",
      stops: ["Language Lessons", "Homestay Experience", "Ritual Participation"],
      borderColor: "border-l-purple-500"
    }
  ];

  // Data untuk planning tools
  const tools = [
    {
      icon: "🗺️",
      title: "Route Calculator",
      description: "Calculate distances, travel times, and optimal routes between cultural sites.",
      linkText: "Open Calculator →"
    },
    {
      icon: "💰",
      title: "Budget Estimator",
      description: "Estimate costs for transportation, accommodation, and entrance fees.",
      linkText: "Estimate Budget →"
    },
    {
      icon: "📅",
      title: "Seasonal Planner",
      description: "Best times to visit based on weather, festivals, and cultural events.",
      linkText: "View Calendar →"
    }
  ];

  // Data untuk cost breakdown
  const costItems = [
    { name: "Transportation", amount: "IDR 550,000" },
    { name: "Accommodation (4 nights)", amount: "IDR 800,000" },
    { name: "Entrance Fees", amount: "IDR 175,000" },
    { name: "Food & Drinks", amount: "IDR 600,000" },
    { name: "Local Guides (Optional)", amount: "IDR 300,000" },
    { name: "Souvenirs & Extras", amount: "IDR 250,000" }
  ];

  // Fungsi untuk handle klik template
  const handleTemplateClick = (templateName) => {
    alert(`Loading "${templateName}" template into planner...`);
  };

  // Fungsi untuk handle klik tools
  const handleToolClick = (toolName) => {
    alert(`Opening ${toolName}...`);
  };

  // Fungsi untuk handle klik map
  const handleMapClick = () => {
    alert("Opening interactive route map in new window...");
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased">
      {/* Navigation - SAMA dengan Home dan Explore page */}
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
              <Link to="/explore" className="text-gray-900 hover:text-blue-600 font-bold text-xl transition-colors">
                Explore
              </Link>
              <Link to="/stories" className="text-gray-900 hover:text-blue-600 font-bold text-xl transition-colors">
                Stories
              </Link>
              <Link to="/itinerary" className="text-blue-600 font-bold text-xl border-b-2 border-blue-600">
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

      {/* Hero Section - Style sama dengan Home dan Explore */}
      <section 
        className="relative text-white py-24 md:py-36"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            TRIP PLANNING<br />
            <span className="bg-gradient-to-r from-amber-300 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              TOOLKIT
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Plan your cultural journey with detailed routes, time estimates, transportation options, and entrance fees. No bookings, just pure planning.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-12">
        {/* Featured Itinerary Planner */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              FEATURED ITINERARY
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Detailed 5-day journey through Lampung's cultural triangle
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="inline-block bg-gradient-to-r from-blue-500/10 to-teal-400/10 text-blue-600 px-6 py-2 rounded-full text-lg font-bold mb-6">
              Featured Route
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">Lampung Cultural Triangle</h2>
            <p className="text-xl text-gray-700 mb-8">
              A 5-day journey connecting three cultural hubs: Traditional villages, heritage sites, and natural wonders.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="bg-green-50 text-green-700 px-6 py-3 rounded-xl flex items-center font-bold">
                <span className="mr-3">🕒</span>
                <span>Total: 5 Days 4 Nights</span>
              </div>
              <div className="bg-amber-50 text-amber-700 px-6 py-3 rounded-xl flex items-center font-bold">
                <span className="mr-3">💰</span>
                <span>Estimated Cost: IDR 2.1M - 3.5M</span>
              </div>
              <div className="bg-blue-50 text-blue-700 px-6 py-3 rounded-xl flex items-center font-bold">
                <span className="mr-3">🗺️</span>
                <span>Distance: 320 km</span>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                {/* Route Details */}
                <div className="space-y-8">
                  {/* Day 1 */}
                  <div className="relative pl-12 pb-8 border-l-2 border-gray-300">
                    <div className="absolute -left-3 top-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-black mb-2 text-gray-900">Day 1: Arrival & Bandar Lampung</h3>
                          <p className="text-gray-600 text-lg">Explore the capital's cultural landmarks</p>
                        </div>
                        <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-full font-bold">
                          8 Hours
                        </span>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold mb-3 text-gray-700 text-lg">Activities:</h4>
                          <ul className="space-y-3">
                            <li className="flex items-center text-gray-700">
                              <span className="text-blue-500 mr-3 text-xl">🏛️</span>
                              <span className="text-lg">Lampung Museum (IDR 15,000 entry)</span>
                            </li>
                            <li className="flex items-center text-gray-700">
                              <span className="text-blue-500 mr-3 text-xl">🍽️</span>
                              <span className="text-lg">Traditional lunch at local warung (~IDR 35,000)</span>
                            </li>
                            <li className="flex items-center text-gray-700">
                              <span className="text-blue-500 mr-3 text-xl">🛍️</span>
                              <span className="text-lg">Pasar Seni (Art Market) browsing</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-3 text-gray-700 text-lg">Transportation:</h4>
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 border border-gray-300">
                                <span className="text-gray-600 text-xl">🚕</span>
                              </div>
                              <div>
                                <div className="font-bold text-lg">Taxi from Airport</div>
                                <div className="text-gray-500">~IDR 85,000 (30 mins)</div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 border border-gray-300">
                                <span className="text-gray-600 text-xl">🚌</span>
                              </div>
                              <div>
                                <div className="font-bold text-lg">Local Angkot</div>
                                <div className="text-gray-500">IDR 5,000 per ride (city transport)</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Day 2 */}
                  <div className="relative pl-12">
                    <div className="absolute -left-3 top-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-black mb-2 text-gray-900">Day 2: Journey to Liwa</h3>
                          <p className="text-gray-600 text-lg">Highland culture and traditional weaving</p>
                        </div>
                        <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-full font-bold">
                          10 Hours
                        </span>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold mb-3 text-gray-700 text-lg">Route:</h4>
                          <div className="flex items-center text-gray-700 text-lg">
                            <span className="font-bold">Bandar Lampung</span>
                            <span className="mx-4 text-blue-500 text-xl">→</span>
                            <span className="font-bold">Liwa</span>
                            <span className="ml-4">120 km via Trans-Sumatra Highway</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-3 text-gray-700 text-lg">Transport Options:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-xl">
                              <div className="font-bold text-lg mb-1">Shared Minivan</div>
                              <div className="text-gray-500">IDR 75,000/person</div>
                              <div className="text-gray-500">~3 hours</div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl">
                              <div className="font-bold text-lg mb-1">Private Car</div>
                              <div className="text-gray-500">IDR 400,000/car</div>
                              <div className="text-gray-500">~2.5 hours</div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-3 text-gray-700 text-lg">Cultural Stops:</h4>
                          <ul className="space-y-3">
                            <li className="flex justify-between items-center">
                              <span className="text-lg">Traditional Weaving Workshop Visit</span>
                              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold">
                                Free (Donation appreciated)
                              </span>
                            </li>
                            <li className="flex justify-between items-center">
                              <span className="text-lg">Local Homestay Experience</span>
                              <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold">
                                IDR 150,000/night
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map & Cost Summary Sidebar */}
              <div className="lg:w-1/3">
                <div className="sticky top-24 space-y-8">
                  {/* Map Preview */}
                  <div>
                    <h3 className="font-bold mb-4 text-2xl text-gray-900">Route Map</h3>
                    <div 
                      className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-3xl h-80 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
                      onClick={handleMapClick}
                    >
                      <span className="text-gray-400 text-6xl mb-4">🗺️</span>
                      <p className="text-gray-700 font-bold text-xl">Interactive route visualization</p>
                      <p className="text-gray-500 mt-2">Click to expand full map</p>
                    </div>
                  </div>
                  
                  {/* Cost Breakdown */}
                  <div className="bg-gray-100 rounded-3xl p-8">
                    <h3 className="font-bold mb-6 text-2xl text-gray-900">Estimated Cost Breakdown</h3>
                    
                    <div className="space-y-4">
                      {costItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-gray-300 last:border-0">
                          <span className="text-gray-700 font-medium text-lg">{item.name}</span>
                          <span className="font-bold text-lg">{item.amount}</span>
                        </div>
                      ))}
                      <div className="flex justify-between items-center pt-6 border-t border-gray-400 mt-2">
                        <span className="font-black text-xl text-gray-900">Total Estimate</span>
                        <span className="font-black text-xl text-blue-600">IDR 2,675,000</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                      <p className="text-amber-800 flex items-start text-lg">
                        <span className="mr-2">ℹ️</span>
                        <span>Estimates based on mid-range travel style. Actual costs may vary.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quick Itinerary Templates */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              QUICK TRIP TEMPLATES
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Start with these pre-planned routes and customize based on your preferences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div 
                key={template.id} 
                className={`bg-white rounded-3xl shadow-xl p-8 border-l-4 ${template.borderColor} hover:shadow-3xl transition-all duration-400 hover:-translate-y-3`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-full font-bold">
                    {template.duration}
                  </span>
                  <span className={`${template.tagColor} px-4 py-2 rounded-full font-bold`}>
                    {template.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black mb-4 text-gray-900">{template.title}</h3>
                <p className="text-gray-700 mb-6 text-lg">{template.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-3 text-xl">🗺️</span>
                    <span className="text-lg">Total Distance: {template.distance}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-3 text-xl">💰</span>
                    <span className="text-lg">Est. Cost: {template.cost}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-3 text-xl">🚗</span>
                    <span className="text-lg">Best Transport: {template.transport}</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-bold mb-3 text-lg">Key Stops:</h4>
                  <div className="flex flex-wrap gap-2">
                    {template.stops.map((stop, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-lg font-medium"
                      >
                        {stop}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => handleTemplateClick(template.title)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-bold transition-colors flex items-center justify-center text-lg group"
                >
                  <span className="mr-3">📋</span>
                  Use This Template
                  <FaArrowRight className="ml-3 text-lg group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Planning Tools */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              PLANNING TOOLS
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Essential resources to help you plan your perfect cultural journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-5xl mb-6 text-blue-500">
                  {tool.icon}
                </div>
                <h4 className="text-2xl font-black mb-4 text-gray-900">{tool.title}</h4>
                <p className="text-gray-700 text-lg mb-6">{tool.description}</p>
                <button 
                  onClick={() => handleToolClick(tool.title)}
                  className="text-blue-600 font-black text-xl hover:text-blue-700 cursor-pointer flex items-center justify-center group"
                >
                  {tool.linkText}
                  <FaArrowRight className="ml-3 text-lg group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer - SAMA dengan Home dan Explore page */}
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
};

export default Itinerary;