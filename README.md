# Vite React SSR

[![Node CI](https://github.com/jonluca/vite-typescript-ssr-react/actions/workflows/nodejs.yml/badge.svg)](https://github.com/jonluca/vite-typescript-ssr-react/actions/workflows/nodejs.yml)

A _blazingly_ modern web development stack. This template repo tries to achieve the minimum viable example for each of the following:

## Introduction & Architecture

- ⚡️ [React 18](https://beta.reactjs.org/)
- 🫀 [Vitest](https://vitest.dev/) - Blazingly fast unit test framework by vite
- 🎨 [Tailwind with JIT](https://tailwindcss.com/) - next generation utility-first CSS
- 🪢 [CSS Modules](https://github.com/css-modules/css-modules)
- 👑 [Atomic Design organization](https://bradfrost.com/blog/post/atomic-web-design/)
- 🗂 [Absolute imports](https://github.com/vitejs/vite/issues/88#issuecomment-762415200)
- 🐶 [Husky](https://github.com/typicode/husky) - Improve code quality with linting and code formatting
- 💻 [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- 📦 [Yarn](https://yarnpkg.com/) - A Good Package manager for JavaScript
- 😺 [GitHub Actions](https://github.com/features/actions)
- 🦾 TypeScript, of course

### **Folder Structure**

```
src
├── constants => Common shared constants file
├── components => Common shared reusabled global component
├── hooks => Custom Hooks
├── interfaces/types => Type/Interface typescript
├── libs => Utilities
├── pages => Routing of pages
├── redux => Global state management
├── service => Core service of module logic business
└── styles => Global styles
```

### Workflow

- **feat/{short-description}**: develop a features.
  `Base branch: main`
- **bugfix/{short-description}**: fix some bug or features.
  `Base branch: main`
- **hotfix/{short-description}**: uses main as the base branch. to fix prod env
  `Base branch: main`

### Commit Name Format

**Example**

```
feat: add search on manager tab
^--^  ^---------------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

### Development

```
yarn
yarn dev:server
```

That should start the server. It will open to http://localhost:7456.

If you'd like to just develop the UI, you can use

```bash
yarn
yarn dev:client
```

To start the native vite client.

### Building

```
yarn build
yarn serve
```

yarn build will create the assets in `dist` - a `client` and `server` folder. Serve will run `dist/server.js` with Node, but feel free to change this to use Docker or some other process manager to suit your deployment needs.

### Files Reference

`eslintrc.js` - a barebones eslint configuration for 2021, that extends off of the recommended ESLint config and prettier

`.prettierrc.js` - the prettier config

`index.html` - the vite entrypoint, that includes the entry point for the client

`postcss.config.cjs` - CommonJS module that defines the PostCSS config

`server.ts` - The barebones Express server with logic for SSRing Vite pages

`tailwind.config.cjs` - CommonJS module that defines the Tailwind config

`tsconfig.json` - TypeScript configuration

`vite.config.ts` - Vite configuration

### CI

We use GitHub actions to build the app. The badge is at the top of the repo. Currently it just confirms that everything builds properly.
