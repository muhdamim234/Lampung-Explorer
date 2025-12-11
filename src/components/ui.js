// Navigation Component
export function renderNavigation() {
    return `
    <nav class="bg-white shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <a href="index.html" class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                        <i class="fas fa-mountain text-white text-xl"></i>
                    </div>
                    <div>
                        <div class="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Lampung Explorer</div>
                        <div class="text-xs text-gray-500">Discover Hidden Indonesia</div>
                    </div>
                </a>
                <div class="hidden md:flex space-x-6">
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="explore.html" class="nav-link">Explore</a>
                    <a href="pulse.html" class="nav-link">Cultural Pulse</a>
                    <a href="stories.html" class="nav-link">Stories</a>
                    <a href="canvas.html" class="nav-link">Community</a>
                    <a href="resources.html" class="nav-link">Resources</a>
                </div>
                <button class="md:hidden" id="mobile-menu-btn">
                    <i class="fas fa-bars text-xl text-gray-700"></i>
                </button>
            </div>
        </div>
    </nav>
    `;
}

// Card Component
export function createPlaceCard(place) {
    return `
    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div class="h-48 ${place.color}"></div>
        <div class="p-6">
            <div class="flex justify-between items-start mb-3">
                <h3 class="text-xl font-bold text-gray-900">${place.name}</h3>
                <div class="flex items-center">
                    <i class="fas fa-star text-yellow-400"></i>
                    <span class="ml-1 font-medium">${place.rating}</span>
                </div>
            </div>
            <p class="text-gray-600 mb-4">${place.description}</p>
            <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">
                    <i class="fas fa-map-marker-alt mr-1"></i> ${place.location}
                </span>
                <a href="${place.link}" class="text-primary font-semibold hover:text-blue-800">
                    Explore <i class="fas fa-arrow-right ml-1"></i>
                </a>
            </div>
        </div>
    </div>
    `;
}
