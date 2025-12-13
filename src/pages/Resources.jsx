import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMountain, FaSearch, FaDownload, FaComments, FaCalendarAlt, FaArrowRight, FaLanguage, FaMusic, FaVideo, FaGraduationCap, FaMapMarkedAlt, FaFont } from 'react-icons/fa';

function Resources() {
  const [activeTab, setActiveTab] = useState('All Resources');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['All Resources', 'Learning Materials', 'Community Directory', 'Events & Workshops', 'Discussion Forum'];

  const resources = [
    {
      id: 1,
      category: "Language Guide",
      categoryColor: "bg-blue-50 text-blue-700",
      icon: <FaLanguage className="text-2xl" />,
      title: "Basic Lampung Phrasebook",
      description: "Essential phrases for daily conversation, greetings, and cultural etiquette in Lampung language.",
      format: "PDF • 2.4 MB",
      borderColor: "border-t-blue-500"
    },
    {
      id: 2,
      category: "Audio Resource",
      categoryColor: "bg-green-50 text-green-700",
      icon: <FaMusic className="text-2xl" />,
      title: "Traditional Songs Collection",
      description: "MP3 recordings of traditional Lampung songs with lyrics and cultural context explanations.",
      format: "Audio • 15 Tracks",
      borderColor: "border-t-green-500"
    },
    {
      id: 3,
      category: "Video Tutorial",
      categoryColor: "bg-purple-50 text-purple-700",
      icon: <FaVideo className="text-2xl" />,
      title: "Tapis Weaving Techniques",
      description: "Step-by-step video guide to traditional Lampung weaving with master artisan explanations.",
      format: "Video • 45 mins",
      borderColor: "border-t-purple-500"
    },
    {
      id: 4,
      category: "Research Paper",
      categoryColor: "bg-amber-50 text-amber-700",
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Lampung Oral Traditions Study",
      description: "Academic research on storytelling traditions and their role in cultural preservation.",
      format: "PDF • 3.1 MB",
      borderColor: "border-t-amber-500"
    },
    {
      id: 5,
      category: "Interactive Map",
      categoryColor: "bg-red-50 text-red-700",
      icon: <FaMapMarkedAlt className="text-2xl" />,
      title: "Cultural Sites Directory",
      description: "Interactive map with 50+ cultural sites, opening hours, and contact information.",
      format: "Interactive • Web App",
      borderColor: "border-t-red-500"
    },
    {
      id: 6,
      category: "Font & Typography",
      categoryColor: "bg-emerald-50 text-emerald-700",
      icon: <FaFont className="text-2xl" />,
      title: "Lampung Script Font Pack",
      description: "Complete font family of traditional Lampung script for digital and print use.",
      format: "TTF/OTF • 4 Fonts",
      borderColor: "border-t-emerald-500"
    }
  ];

  const communityGroups = [
    {
      id: 1,
      name: "Lampung Language Preservation Group",
      members: "428 members",
      description: "Community of language enthusiasts working to document, teach, and preserve Lampung dialects.",
      leader: "Maya Sari",
      role: "Community Leader",
      initials: "LL"
    },
    {
      id: 2,
      name: "Traditional Crafts Collective",
      members: "312 members",
      description: "Artisans and craft enthusiasts preserving weaving, wood carving, and other traditional crafts.",
      leader: "Pak Darmo",
      role: "Master Weaver",
      initials: "TC"
    },
    {
      id: 3,
      name: "Youth Cultural Network",
      members: "589 members",
      description: "Young people reconnecting with their heritage through digital content creation and cultural events.",
      leader: "Rizki Pratama",
      role: "Coordinator",
      initials: "YN"
    },
    {
      id: 4,
      name: "Cultural Research Association",
      members: "187 members",
      description: "Academics, researchers, and students documenting Lampung's cultural heritage.",
      leader: "Dr. Surya Wijaya",
      role: "Research Director",
      initials: "CR"
    }
  ];

  const forumPosts = [
    {
      id: 1,
      author: "Ahmad R.",
      time: "2 hours ago",
      title: "Best resources for learning Lampung dialect?",
      category: "Language",
      categoryColor: "bg-blue-50 text-blue-700",
      content: "I'm planning to visit my grandparents' village next month and want to learn basic conversational Lampung.",
      replies: "12 replies",
      views: "84 views",
      initials: "AR"
    },
    {
      id: 2,
      author: "Putri W.",
      time: "1 day ago",
      title: "Upcoming cultural festivals in 2024?",
      category: "Events",
      categoryColor: "bg-green-50 text-green-700",
      content: "Looking to plan my travels around cultural events. Does anyone have information about traditional festivals?",
      replies: "8 replies",
      views: "156 views",
      initials: "PW"
    },
    {
      id: 3,
      author: "David F.",
      time: "3 days ago",
      title: "Documenting oral history - best practices?",
      category: "Research",
      categoryColor: "bg-purple-50 text-purple-700",
      content: "I'm working on a project to document traditional stories from elders. Looking for advice on ethical recording.",
      replies: "15 replies",
      views: "203 views",
      initials: "DF"
    }
  ];

  const events = [
    {
      id: 1,
      date: "15",
      month: "June",
      title: "Online Language Exchange",
      description: "Practice basic Lampung conversation with native speakers via Zoom.",
      time: "7:00 PM • Online"
    },
    {
      id: 2,
      date: "22",
      month: "June",
      title: "Weaving Workshop",
      description: "Hands-on workshop learning basic Tapis weaving techniques in Liwa.",
      time: "10:00 AM • Liwa Cultural Center"
    },
    {
      id: 3,
      date: "29",
      month: "June",
      title: "Cultural Storytelling Night",
      description: "Elders share traditional stories with English translation in Bandar Lampung.",
      time: "6:30 PM • City Library"
    }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Searching community resources for: "${searchQuery}"`);
    }
  };

  const handleDownload = (resourceName) => {
    alert(`Downloading: ${resourceName}\n(This would trigger actual download in production)`);
  };

  const handleJoinGroup = (groupName) => {
    alert(`Requesting to join: ${groupName}`);
  };

  const handleOpenForum = (postTitle) => {
    alert(`Opening discussion: "${postTitle}"`);
  };

  const handleRegisterEvent = (eventName) => {
    alert(`Registering for: ${eventName}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased">
      {/* Navigation - SAMA dengan page lain */}
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
              <Link to="/itinerary" className="text-gray-900 hover:text-blue-600 font-bold text-xl transition-colors">
                Itinerary
              </Link>
              <Link to="/resources" className="text-blue-600 font-bold text-xl border-b-2 border-blue-600">
                Resources
              </Link>
            </div>
            
            <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-3 font-bold rounded-xl hover:opacity-90 transition-opacity">
              Join Community
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Style sama dengan page lain */}
      <section 
        className="relative text-white py-24 md:py-36"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            COMMUNITY<br />
            <span className="bg-gradient-to-r from-amber-300 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              RESOURCES
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Connect with cultural keepers, access learning materials, and contribute to preserving Lampung's heritage. Together we explore, learn, and protect.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-12">
        {/* Community Stats */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-black mb-4">1,248</div>
                <div className="text-xl font-medium">Community Members</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-4">347</div>
                <div className="text-xl font-medium">Local Experts</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-4">84</div>
                <div className="text-xl font-medium">Cultural Organizations</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black mb-4">2.3K</div>
                <div className="text-xl font-medium">Resources Shared</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs & Search */}
        <section className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-2xl transform -translate-y-1'
                    : 'bg-white text-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Search Bar - Style sama dengan page lain */}
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
                        placeholder="Search resources, experts, or discussions..."
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
        </section>

        {/* Learning Materials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              LEARNING MATERIALS
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Downloadable resources for cultural learning and preservation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div 
                key={resource.id} 
                className={`bg-white rounded-3xl shadow-xl p-8 hover:shadow-3xl transition-all duration-400 hover:-translate-y-3 border-t-4 ${resource.borderColor}`}
              >
                <div className={`${resource.categoryColor} inline-block px-4 py-2 rounded-full font-bold mb-6`}>
                  {resource.category}
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl flex items-center justify-center text-white mb-6">
                  {resource.icon}
                </div>
                
                <h3 className="text-2xl font-black mb-4 text-gray-900">{resource.title}</h3>
                <p className="text-gray-700 mb-6 text-lg">{resource.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-gray-600 font-medium">
                    {resource.format}
                  </div>
                  <button 
                    onClick={() => handleDownload(resource.title)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold flex items-center transition-colors group"
                  >
                    <FaDownload className="mr-3" /> Download
                    <FaArrowRight className="ml-3 text-sm group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Directory */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              COMMUNITY DIRECTORY
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Connect with cultural communities and experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityGroups.map((group) => (
              <div 
                key={group.id} 
                className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-3xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-black text-gray-900">{group.name}</h3>
                  <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold">
                    {group.members}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-8 text-lg">{group.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {group.initials}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{group.leader}</div>
                      <div className="text-gray-600">{group.role}</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleJoinGroup(group.name)}
                    className="text-blue-600 font-black text-xl hover:text-blue-700 cursor-pointer flex items-center group"
                  >
                    JOIN GROUP
                    <FaArrowRight className="ml-3 text-lg group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Discussion Forum */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              COMMUNITY DISCUSSIONS
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Recent conversations from our community forum
            </p>
          </div>
          
          <div className="space-y-6">
            {forumPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-3xl transition-all duration-300 cursor-pointer border-l-4 border-blue-500"
                onClick={() => handleOpenForum(post.title)}
              >
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                    {post.initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-2xl font-black mb-2">{post.title}</h4>
                        <div className="text-gray-600">Posted by {post.author} • {post.time}</div>
                      </div>
                      <span className={`${post.categoryColor} px-4 py-2 rounded-full font-bold`}>
                        {post.category}
                      </span>
                    </div>
                    <p className="text-gray-700 text-lg mb-6">{post.content}</p>
                    <div className="flex items-center text-gray-600">
                      <FaComments className="mr-3" />
                      <span className="mr-6 font-bold">{post.replies}</span>
                      <span className="font-bold">{post.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-10 py-4 rounded-xl font-bold text-xl hover:opacity-90 transition-opacity flex items-center mx-auto">
              <FaComments className="mr-4" />
              VIEW ALL DISCUSSIONS
            </button>
          </div>
        </section>

        {/* Upcoming Events */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              UPCOMING EVENTS
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Join workshops, cultural exchanges, and community gatherings
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/10 to-teal-400/10 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-3xl shadow-xl p-8 relative">
                  <div className="absolute top-8 right-8 bg-blue-50 text-blue-700 px-6 py-4 rounded-xl font-bold text-center">
                    <div className="text-3xl">{event.date}</div>
                    <div className="text-lg">{event.month}</div>
                  </div>
                  
                  <div className="pr-24">
                    <div className="text-5xl text-blue-500 mb-6">
                      <FaCalendarAlt />
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-gray-900">{event.title}</h3>
                    <p className="text-gray-700 mb-6 text-lg">{event.description}</p>
                    <div className="text-gray-600 mb-8 font-medium">
                      {event.time}
                    </div>
                    <button 
                      onClick={() => handleRegisterEvent(event.title)}
                      className="text-blue-600 font-black text-xl hover:text-blue-700 cursor-pointer flex items-center group"
                    >
                      REGISTER NOW
                      <FaArrowRight className="ml-3 text-lg group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer - SAMA dengan page lain */}
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

export default Resources;