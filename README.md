# AIavatar Webpage

A modern, responsive webpage for AI-powered brand video creation with avatar integration.

## Features

- **Drag & Drop File Upload**: Easy upload of brand assets and avatar pictures
- **Interactive Form**: Campaign brief input and mood selection
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with smooth animations
- **Deployment Ready**: Optimized for Vercel and Hostinger deployment

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: CSS with modern features (Grid, Flexbox, CSS Variables)
- **Build Tool**: Vite for fast development and building
- **Fonts**: Inter from Google Fonts

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5173 in your browser

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment

### Vercel Deployment

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Vercel will automatically detect and deploy the React app

### Hostinger Deployment

1. Build the project: `npm run build`
2. Upload the entire `dist/` folder to your Hostinger hosting
3. The `.htaccess` file is included for proper routing
4. Make sure your hosting supports static file hosting

### Manual Static Hosting

1. Build the project: `npm run build`
2. Upload all files from the `dist/` folder to your web server
3. Ensure the server supports single-page application routing

## Project Structure

```
webpage/
├── src/
│   ├── App.jsx          # Main React component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── dist/                # Built files (after build)
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── vercel.json          # Vercel deployment config
├── .htaccess           # Hostinger/Apache config
└── README.md           # This file
```

## Form Integration

The webpage is designed to integrate with your N8N workflow:

1. **Brand Asset Upload**: Accepts images, PDFs, and documents
2. **Avatar Picture Upload**: Optional avatar image upload
3. **Campaign Brief**: Text area for detailed campaign description
4. **Target Mood**: Dropdown for selecting video mood/style

## Customization

### Colors and Styling
- Modify the CSS variables in `src/index.css`
- Update the gradient colors in the `.container` and `.submit-btn` classes

### Content
- Update the hero section text in `src/App.jsx`
- Modify feature cards in the features section
- Add or remove form fields as needed

### Integration
- Update the form submission logic in `handleSubmit()` function
- Connect to your actual N8N workflow endpoint
- Add real API integration instead of the simulated submission

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Built with Vite for optimal performance
- CSS and JavaScript files are minified
- Supports lazy loading and code splitting
- Optimized for fast loading times

## License

MIT License