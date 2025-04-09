# Personal Portfolio

This portfolio started as a tutorial project exercise from https://www.youtube.com/@PedroTechnologies and then modified to fit my needs

### Reference video

https://www.youtube.com/watch?v=LGdPMf-SgBA

## Technologies

- **React:** Component-based UI library.
- **Vite:** Fast and lean development build tool.
- **TailwindCSS:** Utility-first CSS framework.
- **JavaScript (ES6+):** Modern JavaScript features and best practices.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-portfolio.git
   cd your-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application should now be running at [http://localhost:5173](http://localhost:5173).

## Build

To create a production build, run:

```bash
npm run build
```

Then, you can preview the production build with:

```bash
npm run preview
```

## Folder Structure

```
your-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── sections/
│   │       ├── Home.jsx
│   │       ├── About.jsx
│   │       ├── Projects.jsx
│   │       └── Contact.jsx
│   ├── index.css          # Tailwind base styles and global styles
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Customization

- **Tailwind CSS:** Modify the `index.css` file or add custom classes to further tweak the design.
- **Components:** Edit individual components in the `src/components/` folder to update content or styling.
- **Sections:** Update content in the `src/components/sections/` directory to showcase your personal projects, about info, and contact details.

## License

This project is open source and available under the [MIT License](LICENSE).
