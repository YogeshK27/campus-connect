# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Core Social & Communication
🔐 Secure Authentication: Robust login and multi-role signup system powered by Firebase Auth.
💬 Real-time Messaging: High-performance chat system with message status tracking (sent/read), image sharing, and denormalized metadata for speed.
👤 Dynamic Profiles: Customizable user profiles with real-time presence indicators.
🔔 Smart Notifications: Instant alerts for messages, interactions, and campus updates.
📝 Campus Feed: Interactive social wall for posting updates, sharing media, and community engagement.
🏛️ Campus Ecosystem
🚗 Ride Sharing: Coordinate student carpools and commuting options.
👥 Clubs & Communities: Discover and manage student organizations and club memberships.
📅 Events Dashboard: Integrated calendar for tracking campus-wide events and deadlines.
🧸 Lost & Found: Community-driven portal for reporting and finding lost items.
📚 Study Hub: Share academic notes, flashcards, and peer-to-peer resources.
💼 Internship Portal: Access curated internship and career opportunities.
🤖 AI-Powered Intelligence
✨ Smart Posts: Generate high-quality social media content and announcements from simple topics.
🧠 Genius Flashcards: Automatically transform study topics into interactive flashcard sets.
💬 AI Campus Assistant: 24/7 intelligent chatbot capable of answering queries and providing guidance.
⚙️ Core Services (Functions)
The application logic is modularized into specialized services that handle complex operations:

MessagingService: Manages the messaging lifecycle, including conversation repair, message indexing, and read-receipt synchronization.
aiService: Securely bridges the frontend to Google Gemini models via Firebase Cloud Functions for prompt engineering and content generation.
PresenceService: Orchestrates real-time user status (online/offline/away) across the platform.
SearchService: Implements specialized search algorithms for efficient discovery across users, groups, and content.
NotificationService: Handles the delivery pipeline and persistence of real-time user alerts
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
