# Smart City Information Portal - Setup Guide

This guide will help you set up and run the Smart City Information Portal on your local machine.

## 📋 System Requirements

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (comes with Node.js)
- **Operating System**: Windows, macOS, or Linux
- **Browser**: Modern browser (Chrome, Firefox, Safari, Edge)

## 🚀 Installation Steps

### Step 1: Install Node.js

If you don't have Node.js installed:

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the prompts
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Install Dependencies

Open your terminal/command prompt in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide Icons
- And other dependencies

### Step 3: Run Development Server

Start the development server:

```bash
npm run dev
```

You should see output like:
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully
```

### Step 4: Open in Browser

Open your web browser and navigate to:
```
http://localhost:3000
```

## 🎨 Development Tips

### Hot Reload
The development server supports hot reload. Any changes you make to the code will automatically refresh in the browser.

### Dark Mode
Click the moon/sun icon in the header to toggle between light and dark modes.

### Mobile View
Use browser developer tools (F12) to test responsive design on different screen sizes.

## 🔧 Common Issues & Solutions

### Issue: Port 3000 is already in use

**Solution:** Either:
- Stop the process using port 3000, or
- Run on a different port:
  ```bash
  npm run dev -- -p 3001
  ```

### Issue: Module not found errors

**Solution:** Delete `node_modules` and reinstall:
```bash
rm -rf node_modules
npm install
```

### Issue: TypeScript errors

**Solution:** Ensure you're using Node.js 18 or higher:
```bash
node --version
```

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

To run the production build:

```bash
npm start
```

## 🧪 Testing the Application

### Test Checklist

- [ ] Home page loads correctly
- [ ] Navigation menu works on desktop and mobile
- [ ] All service pages are accessible
- [ ] Dark mode toggle functions
- [ ] Responsive design works on mobile/tablet
- [ ] All icons and images display properly
- [ ] Forms render correctly
- [ ] Cards have hover effects

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🎓 For University Presentations

### Demo Script

1. **Introduction** (2 min)
   - Explain the problem: Fragmented city services
   - Show the solution: Unified digital portal

2. **Feature Walkthrough** (5 min)
   - Home Dashboard - overview of services
   - Transportation - real-time schedules
   - Emergency - quick access to help
   - Weather - current conditions
   - Services - utilities and government
   - News - city updates
   - Map - locate facilities
   - About/Contact - project info

3. **Technical Highlights** (3 min)
   - Modern tech stack (Next.js, React, TypeScript)
   - Responsive design
   - Dark mode
   - Clean code architecture

4. **Future Vision** (2 min)
   - Backend integration
   - IoT connectivity
   - Mobile apps
   - AI features

## 💡 Customization Ideas

1. **Add Your City's Name**
   - Update the title in `layout.tsx`
   - Change branding colors in `tailwind.config.js`

2. **Modify Services**
   - Edit data in each page file
   - Add new service cards
   - Update contact information

3. **Change Theme Colors**
   - Edit `tailwind.config.js`
   - Update color variables in `globals.css`

## 🐛 Reporting Issues

If you encounter any problems:
1. Check the console for error messages (F12 in browser)
2. Verify all dependencies are installed
3. Ensure you're using the correct Node.js version
4. Clear browser cache and try again

## ✅ Success Checklist

Before presenting/submitting:

- [ ] All pages load without errors
- [ ] Navigation works smoothly
- [ ] Dark mode toggles correctly
- [ ] Mobile responsive design verified
- [ ] No console errors
- [ ] README documentation is clear
- [ ] Code is properly formatted
- [ ] Screenshots/demo video prepared

---

**Good luck with your project! 🎉**
