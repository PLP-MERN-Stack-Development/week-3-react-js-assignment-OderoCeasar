# Week 3: React.js, JSX, and Tailwind CSS – Mastering Front-End Development

## Objective
Build a responsive React application using JSX and Tailwind CSS that demonstrates:
- Component architecture
- State management with hooks
- API integration
- Responsive design with Tailwind CSS



## 📂 Tasks

### 🧱 Task 1: Project Setup
- Create a new React application using **Vite**
- Install and configure **Tailwind CSS**
- Organize project folders:
  - `components/`
  - `pages/`
  - `context/`
  - `hooks/`
- Configure routing using **React Router v6**

---

### 🧩 Task 2: Component Architecture
Create reusable and customizable components:
- ✅ `Button` – supports primary, secondary, danger variants
- ✅ `Card` – displays content in a box layout
- ✅ `Navbar` – for navigation
- ✅ `Footer` – with links and copyright
- ✅ `Layout` – wraps pages with Navbar and Footer

Use **props** to make components reusable and dynamic.



### ⚙️ Task 3: State Management and Hooks
Implement a `TaskManager` feature with:
- ➕ Add new tasks
- ✔️ Mark tasks as completed
- ❌ Delete tasks
- 🔎 Filter: All | Active | Completed

React Hooks to use:
- `useState`
- `useEffect`
- `useContext` (for dark/light theme toggle)
- Custom Hook: `useLocalStorage` (persist tasks)

---

### 🌐 Task 4: API Integration
- Fetch data from [JSONPlaceholder](https://jsonplaceholder.typicode.com)
- Display data in a grid/list
- Add:
  - ⏳ Loading state
  - ❌ Error state
  - 🔁 Pagination or Infinite scroll
  - 🔍 Search feature

---

### 🎨 Task 5: Styling with Tailwind CSS
- Responsive design: works on **mobile**, **tablet**, and **desktop**
- Theme switcher (light/dark mode) with Tailwind
- Utility-first classes for layout, spacing, and colors
- Add screenshot on assets folder



## 🧪 Expected Outcome
✅ A fully functional, responsive React app with:
- Component-based architecture
- State managed via React hooks
- Data fetched from external API
- Tailwind CSS styling
- Clean and modular folder structure



## 🛠️ Setup Instructions

### ✅ Prerequisites
- Install [Node.js](https://nodejs.org/) (v18 or higher)
- Install [pnpm](https://pnpm.io/):

```bash
pnpm install
