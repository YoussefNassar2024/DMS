# Dependable Marketing Solutions - WordPress Theme

A modern, professional WordPress theme for Dependable Marketing Solutions, converted from a React SPA to a fully functional WordPress theme.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Built with SEO best practices in mind
- **Customizable Content**: Uses Advanced Custom Fields for dynamic content management
- **Performance Focused**: Optimized for fast loading and smooth user experience

## Installation

### 1. Upload the Theme

1. Download or clone this repository
2. Zip the `wordpress-theme` folder (rename it to `dependable-marketing-solutions`)
3. Go to WordPress Admin > Appearance > Themes
4. Click "Add New" > "Upload Theme"
5. Upload the zip file and activate the theme

### 2. Install Required Plugins

This theme requires the following plugins:

- **Advanced Custom Fields (ACF)** - For dynamic content management
  - Download from: https://wordpress.org/plugins/advanced-custom-fields/

Install and activate ACF through WordPress Admin > Plugins > Add New.

### 3. Set Up Pages

Create the following pages in WordPress Admin > Pages > Add New:

1. **Home** - Set as front page in Settings > Reading, use the "Front Page" template
2. **About** - Use the "About Page" template
3. **Services** - Use the "Services Page" template
4. **Contact** - Use the "Contact Page" template

### 4. Import ACF Field Groups

1. Go to WordPress Admin > Custom Fields > Tools
2. Click "Import Field Groups"
3. Upload the `acf-json/theme-settings.json` file from the theme folder
4. The field groups will be automatically created

### 5. Configure Theme Settings

1. Go to WordPress Admin > Theme Settings
2. **Hero Title**: Set your main headline (default: "Dependable Marketing Solutions")
3. **Team Members**: Add team member details and photos
4. **Services**: Add your service offerings with descriptions and icons

### 6. Set Up Navigation Menu

1. Go to WordPress Admin > Appearance > Menus
2. Create a new menu called "Primary Navigation"
3. Add your pages (Home, About, Services, Contact)
4. Set the menu location to "Primary Navigation"

### 7. Configure Reading Settings

1. Go to WordPress Admin > Settings > Reading
2. Set "Front page displays" to "A static page"
3. Select your Home page as the front page

### 8. Test the Theme

1. **Contact Form**: Test the contact form submission (it will show a success message)
2. **Navigation**: Test mobile menu and desktop navigation
3. **Responsive Design**: Check the site on different screen sizes
4. **Animations**: Verify scroll animations are working properly
5. **ACF Integration**: Ensure custom fields are displaying correctly

## Customization

### Colors and Styling

The theme uses CSS custom properties for easy customization. Edit `style.css` to modify:

```css
:root {
    --dms-main-color: #1a1a1a;
    --dms-green: #00d4aa;
    --dms-green-light: #00f5c4;
    --dms-blue: #3b82f6;
    --dms-light-gray: #f8f9fa;
    --dms-gray: #374151;
}
```

### Adding New Sections

To add new sections to pages:

1. Edit the appropriate template file (e.g., `front-page.php`, `page-about.php`)
2. Add your HTML structure with Tailwind classes
3. Use `will-animate` class for scroll animations
4. Follow the existing pattern for responsive design

### Navigation Menu

Set up your navigation menu:

1. Go to WordPress Admin > Appearance > Menus
2. Create a new menu called "Primary Navigation"
3. Add your pages to the menu
4. Assign it to the "Primary Navigation" location

## File Structure

```
wordpress-theme/
├── style.css              # Main stylesheet with Tailwind CSS
├── functions.php          # Theme functions and WordPress hooks
├── index.php              # Fallback template
├── front-page.php         # Home page template
├── page.php               # Default page template
├── page-about.php         # About page template
├── header.php             # Site header
├── footer.php             # Site footer
├── js/
│   └── script.js          # Theme JavaScript
└── template-parts/
    └── logo.php           # Logo component
```

## Development

### Prerequisites

- WordPress 5.0+
- PHP 7.4+
- Advanced Custom Fields plugin

### Local Development

1. Set up a local WordPress environment (XAMPP, MAMP, Local by Flywheel, etc.)
2. Install WordPress and activate the theme
3. Install and activate ACF
4. Set up the required pages and ACF fields
5. Start customizing!

### Building Assets

The theme uses Tailwind CSS via CDN. For production, consider:

1. Installing Tailwind CSS locally
2. Building a custom CSS file
3. Minifying assets for better performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

Converted from the original React SPA by Dependable Marketing Solutions team.

## Changelog

### Version 1.0.0
- Initial WordPress theme release
- Converted from React SPA
- Added ACF integration
- Responsive design implementation
- Scroll animations and interactions
