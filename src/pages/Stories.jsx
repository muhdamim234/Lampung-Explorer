import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMountain, FaBars, FaSearch, FaPenFancy, 
  FaEnvelope, FaPhone, FaMapMarkerAlt 
} from 'react-icons/fa';

function Stories() {
  const [activeCategory, setActiveCategory] = useState('All Stories');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All Stories', 'Language', 'Traditions', 'Food Culture', 'Local Wisdom', 'Travel Diaries'];

  const stories = [
    {
      id: 1,
      title: "Rediscovering My Roots Through Language",
      description: "How learning the Lampung dialect connected me to ancestral traditions I never knew existed...",
      category: "Language",
      readTime: "4 min read",
      author: "Ahmad Rizki",
      authorInitials: "AR",
      gradient: "from-blue-200 to-cyan-300",
      timeAgo: "2 days ago"
    },
    {
      id: 2,
      title: "Weaving Stories: The Art of Tapis Lampung",
      description: "Learning traditional weaving from master artisans in Liwa. Each thread tells a story of heritage and identity.",
      category: "Traditions",
      readTime: "7 min read",
      author: "Putri Wulandari",
      authorInitials: "PW",
      gradient: "from-purple-200 to-pink-300",
      timeAgo: "1 week ago"
    },
    {
      id: 3,
      title: "Seruit: More Than Just a Meal",
      description: "Discovering how this traditional Lampung dish brings communities together and preserves culinary heritage.",
      category: "Food Culture",
      readTime: "5 min read",
      author: "Budi Santoso",
      authorInitials: "BS",
      gradient: "from-orange-200 to-red-300",
      timeAgo: "2 weeks ago"
    },
    {
      id: 4,
      title: "Pesenggiri: The Philosophy of Lampung Honor",
      description: "Understanding the traditional values that guide social interactions and community life in Lampung society.",
      category: "Local Wisdom",
      readTime: "8 min read",
      author: "Rina Sari",
      authorInitials: "RS",
      gradient: "from-green-200 to-emerald-300",
      timeAgo: "3 weeks ago"
    },
    {
      id: 5,
      title: "A Month in Way Kambas National Park",
      description: "Living with the indigenous communities surrounding Sumatra's last remaining lowland rainforest.",
      category: "Travel Diaries",
      readTime: "6 min read",
      author: "David Foster",
      authorInitials: "DF",
      gradient: "from-cyan-200 to-blue-300",
      timeAgo: "1 month ago"
    },
    {
      id: 6,
      title: "The Rhythms of Talo Balak",
      description: "Documenting Lampung's traditional music and its role in storytelling and cultural transmission.",
      category: "Music & Arts",
      readTime: "9 min read",
      author: "Lina Suryani",
      authorInitials: "LS",
      gradient: "from-pink-200 to-rose-300",
      timeAgo: "1 month ago"
    }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Searching stories for: "${searchQuery}"`);
    }
  };

  const handleStoryClick = (title) => {
    alert(`Loading story: "${title}"`);
  };

  const handleLoadMore = () => {
    alert('Loading more stories...');
  };

  const handleWriteStory = () => {
    alert('Opening story submission form...');
  };

  const filteredStories = activeCategory === 'All Stories' 
    ? stories 
    : stories.filter(story => story.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased">
      {/* Navigation - SAMA dengan Home dan Explore pages */}
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
              <Link to="/stories" className="text-blue-600 font-bold text-xl border-b-2 border-blue-600">
                Stories
              </Link>
              <Link to="/itinerary" className="text-gray-900 hover:text-blue-600 font-bold text-xl transition-colors">
                Itinerary
              </Link>
              <Link to="/resources" className="text-gray-900 hover:text-blue-600 font-bold text-xl transition-colors">
                Resources
              </Link>
            </div>
            
            <button 
              onClick={handleWriteStory}
              className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-3 font-bold rounded-xl hover:opacity-90 transition-opacity"
            >
              Share Story
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Style sama dengan Home dan Explore */}
      <section 
        className="relative text-white py-24 md:py-36"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            COMMUNITY<br />
            <span className="bg-gradient-to-r from-amber-300 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              STORIES
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Real experiences from travelers, language keepers, and cultural explorers. Discover authentic stories that go beyond the surface.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-12">
        {/* Featured Story */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-4xl">
            <div className="p-8 md:p-12 text-white">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Featured Story
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black mb-4">The Last Speaker of Lampung's Ancient Dialect</h2>
                  <p className="text-white/90 mb-6 text-lg">
                    Meeting 87-year-old Mbah Sari, the only living person who fluently speaks the original Lampung Peminggir dialect. A journey into language preservation and cultural memory.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-black text-xl">
                        MS
                      </div>
                      <div>
                        <div className="font-bold text-lg">Maya Sari</div>
                        <div className="text-white/70 text-sm">Cultural Anthropologist • 3 days ago</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleStoryClick("The Last Speaker of Lampung's Ancient Dialect")}
                      className="mt-4 sm:mt-0 sm:ml-auto bg-white text-blue-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
                    >
                      READ STORY →
                    </button>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="h-64 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-2xl transform -translate-y-1'
                    : 'bg-white text-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-12">
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
                        placeholder="Search stories by keyword, author, or location..."
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

        {/* Stories Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div 
                key={story.id}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-4xl transition-all duration-400 hover:-translate-y-3 border border-gray-100 cursor-pointer"
                onClick={() => handleStoryClick(story.title)}
              >
                <div className={`relative h-64 bg-gradient-to-br ${story.gradient} overflow-hidden`}>
                  <div className="story-image h-full w-full"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold ${
                      story.category === 'Language' ? 'bg-blue-100 text-blue-700' :
                      story.category === 'Traditions' ? 'bg-purple-100 text-purple-700' :
                      story.category === 'Food Culture' ? 'bg-orange-100 text-orange-700' :
                      story.category === 'Local Wisdom' ? 'bg-green-100 text-green-700' :
                      story.category === 'Travel Diaries' ? 'bg-cyan-100 text-cyan-700' :
                      'bg-pink-100 text-pink-700'
                    }`}>
                      {story.category}
                    </span>
                    <span className="text-gray-500 text-lg font-medium">{story.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-gray-900">{story.title}</h3>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {story.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4 ${
                        story.authorInitials === 'AR' ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
                        story.authorInitials === 'PW' ? 'bg-gradient-to-r from-purple-400 to-pink-500' :
                        story.authorInitials === 'BS' ? 'bg-gradient-to-r from-orange-400 to-red-500' :
                        story.authorInitials === 'RS' ? 'bg-gradient-to-r from-emerald-400 to-teal-500' :
                        story.authorInitials === 'DF' ? 'bg-gradient-to-r from-cyan-400 to-blue-500' :
                        'bg-gradient-to-r from-pink-400 to-rose-500'
                      }`}>
                        {story.authorInitials}
                      </div>
                      <div>
                        <div className="font-bold text-lg">{story.author}</div>
                        <div className="text-gray-500 text-sm">{story.timeAgo}</div>
                      </div>
                    </div>
                    <button className="text-blue-600 font-black text-xl hover:text-blue-700">
                      READ →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Load More Button */}
        <div className="text-center mb-20">
          <button 
            onClick={handleLoadMore}
            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-12 py-4 rounded-xl font-black text-xl hover:opacity-90 transition-opacity shadow-2xl"
          >
            LOAD MORE STORIES
          </button>
        </div>

        {/* Share Your Story CTA */}
        <section className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-10 md:p-14 mb-16 border border-blue-100">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              Have a Story to Share?
            </h2>
            <p className="text-gray-700 mb-10 text-xl md:text-2xl max-w-3xl mx-auto font-medium">
              Your experiences matter. Share your cultural discoveries, language journeys, or traditional knowledge with our community.
            </p>
            <button 
              onClick={handleWriteStory}
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-12 py-5 rounded-xl font-black text-xl hover:opacity-90 transition-opacity shadow-2xl inline-flex items-center gap-3"
            >
              <FaPenFancy /> WRITE YOUR STORY
            </button>
          </div>
        </section>
      </div>

            {/* Footer - SAMA PERSIS dengan Home dan Explore pages */}
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

export default Stories;