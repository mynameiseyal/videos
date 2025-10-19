// Your actual YouTube video data with clean date titles
const videoData = [
    {
        id: 1,
        title: "September 18, 2025",
        description: "",
        thumbnail: "https://img.youtube.com/vi/47WbL6zbdOc/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/47WbL6zbdOc?rel=0&modestbranding=1",
        youtubeUrl: "https://www.youtube.com/shorts/47WbL6zbdOc",
        duration: "0:30",
        uploadDate: "2025-09-18",
        type: "short"
    },
    {
        id: 2,
        title: "September 21, 2025",
        description: "",
        thumbnail: "https://img.youtube.com/vi/yqbFMGfizTw/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/yqbFMGfizTw?rel=0&modestbranding=1",
        youtubeUrl: "https://www.youtube.com/shorts/yqbFMGfizTw",
        duration: "0:45",
        uploadDate: "2025-09-21",
        type: "short"
    },
    {
        id: 3,
        title: "September 30, 2025",
        description: "",
        thumbnail: "https://img.youtube.com/vi/gdng4IedvmQ/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/gdng4IedvmQ?rel=0&modestbranding=1",
        youtubeUrl: "https://www.youtube.com/shorts/gdng4IedvmQ",
        duration: "0:35",
        uploadDate: "2025-09-30",
        type: "short"
    },
    {
        id: 4,
        title: "October 15, 2025",
        description: "",
        thumbnail: "https://img.youtube.com/vi/RQKOsCnEUgs/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/RQKOsCnEUgs?rel=0&modestbranding=1",
        youtubeUrl: "https://www.youtube.com/shorts/RQKOsCnEUgs",
        duration: "0:40",
        uploadDate: "2025-10-15",
        type: "short"
    },
    {
        id: 5,
        title: "October 15, 2025",
        description: "",
        thumbnail: "https://img.youtube.com/vi/Mjq0PMlasgw/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/Mjq0PMlasgw?rel=0&modestbranding=1",
        youtubeUrl: "https://www.youtube.com/watch?v=Mjq0PMlasgw",
        duration: "8:15",
        uploadDate: "2025-10-15",
        type: "video"
    }
];

// Function to parse date from video title
function parseDateFromTitle(title) {
    // Look for YYYYMMDD pattern in title like "VID 20250918 080047 10 090"
    const dateMatch = title.match(/\b(\d{4})(\d{2})(\d{2})\b/);
    if (dateMatch) {
        const year = dateMatch[1];
        const month = dateMatch[2];
        const day = dateMatch[3];
        return `${year}-${month}-${day}`;
    }
    return null;
}

// DOM elements
const videoGrid = document.getElementById('videoGrid');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadVideos();
});

// Load videos into the grid
function loadVideos() {
    videoGrid.innerHTML = '';
    
    videoData.forEach(video => {
        // Parse date from title
        const parsedDate = parseDateFromTitle(video.title);
        if (parsedDate) {
            video.uploadDate = parsedDate;
        }
        
        const videoCard = createVideoCard(video);
        videoGrid.appendChild(videoCard);
    });
}

// Create a video card element
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    
    // Show title since it's now clean and readable
    const titleHtml = `<h3 class="video-title">${video.title}</h3>`;
    const descriptionHtml = video.description ? `<p class="video-description">${video.description}</p>` : '';
    
    card.innerHTML = `
        <div class="video-player">
            <iframe 
                src="${video.videoUrl}" 
                title="${video.title}"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>
        <div class="video-info">
            ${titleHtml}
            ${descriptionHtml}
            <div class="video-meta">
                <span class="duration">${video.duration}</span>
                <span class="upload-date">${formatDate(video.uploadDate)}</span>
                <a href="${video.youtubeUrl}" target="_blank" class="youtube-link">Watch on YouTube</a>
            </div>
        </div>
    `;
    
    return card;
}


// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}


// Function to add new videos (for future use)
function addVideo(video) {
    videoData.push(video);
    loadVideos();
}

// Function to fetch videos from YouTube API (for future implementation)
async function fetchYouTubeVideos() {
    // This would be implemented to fetch actual videos from your YouTube channel
    // You would need to use the YouTube Data API v3
    // For now, we're using sample data
    
    try {
        // Example API call structure:
        // const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`);
        // const data = await response.json();
        // Process the data and update videoData array
        
        console.log('YouTube API integration would go here');
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
    }
}

// Utility function to convert YouTube video ID to embed URL
function getYouTubeEmbedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
}

// Utility function to get YouTube thumbnail URL
function getYouTubeThumbnailUrl(videoId, quality = 'maxresdefault') {
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

// Export functions for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addVideo,
        fetchYouTubeVideos,
        getYouTubeEmbedUrl,
        getYouTubeThumbnailUrl
    };
}
