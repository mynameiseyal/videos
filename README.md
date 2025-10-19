# YouTube Videos Display

A modern, responsive web page to display MP4 videos from your YouTube channel. Built with vanilla HTML, CSS, and JavaScript, optimized for Vercel deployment.

## Features

- 🎥 Modern video grid layout
- 📱 Fully responsive design
- 🎨 Beautiful gradient background
- ⚡ Fast loading with lazy loading
- 🔍 Video modal with full-screen playback
- ⌨️ Keyboard shortcuts (ESC to close modal)
- 🎯 Vercel-ready configuration

## Local Development

### Option 1: Python HTTP Server
```bash
# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Option 2: Node.js HTTP Server
```bash
# Install dependencies (optional)
npm install

# Start local server
npm start

# Open in browser
open http://localhost:8000
```

## Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── vercel.json         # Vercel configuration
├── package.json        # Node.js dependencies
└── README.md           # This file
```

## Customization

### Adding Your Videos

1. **Replace Sample Data**: Edit the `videoData` array in `script.js` with your actual video information:

```javascript
const videoData = [
    {
        id: 1,
        title: "Your Video Title",
        description: "Your video description",
        thumbnail: "path/to/thumbnail.jpg",
        videoUrl: "path/to/video.mp4",
        duration: "5:30",
        uploadDate: "2024-01-15"
    }
    // Add more videos...
];
```

2. **YouTube Integration**: For automatic fetching from YouTube, you'll need to:
   - Get a YouTube Data API key
   - Implement the `fetchYouTubeVideos()` function
   - Update the video data structure to match YouTube API response

### Styling

- Modify `styles.css` to change colors, fonts, and layout
- The design uses CSS Grid for responsive video cards
- Gradient background can be customized in the `body` selector

## Deployment to Vercel

### Method 1: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Method 2: GitHub Integration
1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push

### Method 3: Drag & Drop
1. Zip your project files
2. Go to [vercel.com](https://vercel.com)
3. Drag and drop your zip file

## YouTube API Integration (Future Enhancement)

To automatically fetch videos from your YouTube channel:

1. **Get API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Enable YouTube Data API v3
   - Create credentials (API key)

2. **Update JavaScript**:
   ```javascript
   const API_KEY = 'your-api-key';
   const CHANNEL_ID = 'UCJV0eB-dKHLY5MzzUFvIRBw';
   
   async function fetchYouTubeVideos() {
       const response = await fetch(
           `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`
       );
       const data = await response.json();
       // Process and display videos
   }
   ```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

MIT License - feel free to use and modify as needed.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For issues and questions, please create an issue in the repository.
