# Poetic Pookie 🌸

A modern poetry reader and frontend playground built using the latest features of React and Next.js.

The project focuses on:

- React 19 features
- Server Components
- Concurrent rendering
- Modern data fetching
- Performance optimization
- Clean UI architecture

Poetry data is fetched from the [PoetryDB API](https://poetrydb.org/random).

---

# 🛠️ Tech Stack & Key Features

## 1. React 19 Compiler

- Automatic component optimization
- Reduces need for `useMemo`, `useCallback`, and `React.memo`
- Encourages cleaner React code

### ⚠️ Note

- Components must remain pure and follow React rules
- Invalid patterns can prevent compiler optimizations

---

## 2. Next.js 16 App Router & Server Components

- Server-side data fetching using React Server Components (RSC)
- Smaller client-side JavaScript bundle
- Better SEO and faster initial load

### ⚠️ Note

- Server Components cannot access:
  - `window`
  - `document`
  - `localStorage`

---

## 3. React 19 `use()` Hook

- Handles async data directly during rendering
- Works well with Suspense
- Simplifies async UI handling

### ⚠️ Note

- Avoid creating promises inside Client Components
- It can cause repeated renders or infinite fetch loops

---

## 4. Concurrent Rendering with `useTransition`

- Keeps UI responsive during expensive updates
- Improves search and filtering performance
- Prevents UI blocking during large renders

### ⚠️ Note

- Only state updates should run inside transitions
- Use `isPending` for loading feedback

---

## 5. Tailwind CSS v4 & Theme Support

- Utility-first responsive styling
- Dark/light mode support using `next-themes`
- Shared theme sync across browser tabs

### ⚠️ Note

- Theme providers may require client-side rendering
- Be careful about hydration mismatches

---

# 📂 Project Structure

```text
src/
├── app/
├── components/
├── config/
└── types/
```

### Main Modules

| Folder        | Purpose                   |
| ------------- | ------------------------- |
| `app/`        | Routing and pages         |
| `components/` | Reusable UI components    |
| `config/`     | Static configuration data |
| `types/`      | TypeScript types          |

---

# 🚀 Getting Started

## 1. Clone Repository

```bash
git clone https://github.com/mohdasifabid/poetic-pookie.git
cd poetic-pookie
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Install React Compiler

```bash
npm install -D babel-plugin-react-compiler
```

---

## 4. Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 👤 Author

- Mohd Asif
- [GitHub Profile](https://github.com/mohdasifabid)
- [Project Repository](https://github.com/mohdasifabid/poetic-pookie)
- [Live Demo](https://poetic-pookie.vercel.app/)

---

# 📜 License

Open-source project created for learning, experimentation, and portfolio showcase.
