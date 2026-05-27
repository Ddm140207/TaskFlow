# TaskFlow — Modern Minimalist Task Manager

**TaskFlow** is a complete, lightweight, and visually polished task management web application crafted as a course portfolio submission for a college level **Web Programming for Data Science** assignment. 

Rather than relying on modern heavyweight single-page application (SPA) meta-frameworks, TaskFlow highlights standard frontend fundamentals by using raw, clean **HTML5 semantic tags**, **CSS3 variables & custom animation keyframes**, and modular **Vanilla.js client-side module patterns** with local persistence.

---

## 🎨 Visual Identity & UX Patterns

TaskFlow is visually grounded in modern minimalist design languages inspired by **Linear**, **Notion**, **Vercel**, and **Apple**.

- **Atmosphere Mode**: Supports an eye-safe, gorgeous color scheme toggle (Light Luxe Off-Whites & Cosmic Obsidian Slate) mapped dynamically via CSS Variables.
- **Micro-Interactions**: Features elegant sliding-up entries for card additions, custom checkbox scales, and status-selection transitions.
- **Glassmorphic Navigation Headers**: Leverages structural `backdrop-filter: blur` styling to create layout focus and physical depth.
- **Descriptive Empty States**: Includes dynamic vectors explaining dashboard status when zero elements match search or priority criteria.

---

## 🚀 Core Features

1. **Integrated Task Modulations (CRUD)**:
   - Create tasks with required validating Titles, rich Descriptions, setting Priority weights (High, Medium, Low), and target completion Dates.
   - Edit detail lines inline or via responsive modal layouts with auto-focused inputs.
   - Delete tasks supported by native confirmation prompts.
2. **Dynamic Work Completion Progress Bar**:
   - Calculates and updates cumulative statistics in real-time (Total count, Pending items, In Progress milestones, and Completed counts).
   - Animates a horizontal task percentage completion rate (e.g., `66%`) to provide positive motivation.
3. **Advanced Filtering & Sorting Engine**:
   - Live query text-matching searches across both Titles and Descriptions.
   - Dropdown query filters for selective Status and Priority states.
   - Sort cards dynamically by newest creations, oldest registrations, alphabetical ordering, and due date.
4. **Offline LocalStorage Persistence**:
   - Safely saves, updates, and persists state databases in browsers.
   - Implements safe fallback objects for private/incognito browsing sandboxes.
5. **Fluid Keyboard Operations**:
   - Press <kbd>N</kbd> to launch new card creators.
   - Press <kbd>/</kbd> to instantly highlight search textboxes.
   - Press <kbd>D</kbd> to toggle the light/dark themes.
   - Press <kbd>K</kbd> to read the inline cheat sheet.
   - Press <kbd>Esc</kbd> to dismiss popup forms.

---

## 📁 Folder Architecture

The codebase is organized using a professional, human-designed structure that isolates logic controllers, visual layout renderers, and storage utilities:

```text
/taskflow-app
│
├── index.html                   # Primary semantic markup entry point
│
├── /assets                      # Core visual assets
│   ├── /css
│   │   └── styles.css           # Fonts import, custom variable themes, scrollbars & keyframe definitions
│   │
│   └── /js
│       ├── app.js               # App boot entry point, DOM content loader setup
│       ├── ui.js                # Graphic controller, renders cards, toggle themes & trigger modal states
│       ├── storage.js           # LocalStorage wrapper, incognito memory fallbacks & dummy seeding
│       └── validation.js        # Input sanitizers, title validations & dynamic error borders
│
├── /backend
│   └── optional_server.py       # Educational Python HTTP server to serve static files locally
│
└── /logic
    ├── taskManager.js           # Task entity, aggregate statistics calculating, and filtering logic
    └── helpers.js               # Common macros, date formatting utilities & SVG icon configurations
```

---

## 🔧 How to Run

### Option 1: Using Node & Vite (Recommended)
This codebase is fully configured for lightning-fast development utilizing standard Node.js:

1. Install project dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Open your browser to the URL displayed in the console (default is `http://localhost:3000`).

### Option 2: Using the Python Backend Server
If you want to run the application using Python (simulating deployment without Node):

1. Execute the accompanying backend script:
   ```bash
   python backend/optional_server.py
   ```
2. Navigate to `http://localhost:3000` in your web browser.

---

## 📷 Screenshots Section

*Below are placeholder slots representing application screens for assignment grading slides:*

#### Light Luxe Dashboard — Empty State View
> `[Placeholder: Lightmode dashboard showcasing empty collection smile vector]`

#### Dark Cosmic Dashboard — Active Tasks Grid
> `[Placeholder: Dark mode layout highlighting three seeded cards and completion status bars]`

---

## 🤖 AI Usage & Reflection Document

As part of the academic integrity requirements for our Web Programming course, this section documents the utilization, engineering prompts, and code-adaptation procedures applied while developing this assignment alongside AI Coding Assistants:

### 1. AI Tools Utilized
- **Google AI Studio** with **Gemini models** (acting as pair programming architect and style auditor).

### 2. Examples of Advanced Prompts Used
- **Prompt for Clean Script-Separation Architecture**:
  > *"Analyze my current task data logic. I want you to separate concern layers beautifully into individual files. Write client-side ES Modules. Place all storage fallbacks inside `assets/js/storage.js`, input checks inside `assets/js/validation.js`, pure calculations inside `logic/taskManager.js`, and keep DOM manipulation strictly within `assets/js/ui.js`."*
- **Prompt for Fluid Color Modes Styling**:
  > *"Generate custom CSS rules using CSS variables to implement a crisp Light Theme and a highly polished dark obsidian theme inspired by Linear and Vercel. Minimize bright colors; use neutral greys, small borders, and smooth transitions on color alterations."*

### 3. Code Generation and Adaptation Procedures
- **Original Code Generated**: The complete structure of the ES6 models inside `helpers.js`, `taskManager.js` and `ui.js` was bootstrapped by the assistant.
- **Code Adapted**: The native key listener bindings were refined to prevent firing shortcuts when typing text inside custom inputs.
- **XSS and Validation Check**: Title lengths are limited to 80 chars, description lengths are guarded at 500 chars, and strings are fully sanitized using custom DOM utility cells (`escapeHTML`) before injecting them.

### 4. Quality Testing Framework
1. **Validation Boundary Tests**: Verified that blank inputs safely toggle warning borders.
2. **Private Browsing Fallback Tests**: Artificially disabled `localStorage` access using browser settings to guarantee the memory-db fallback mounts gracefully.
3. **Cross-Browser Styling Tests**: Monitored layouts across desktop and mobile to ensure absolute compatibility.
