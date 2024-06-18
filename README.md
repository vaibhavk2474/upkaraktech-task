# ReactJs Assignment - Upkarak Tech Solutions

## Website Image and link

## Prerequisites

Make sure you have the following installed before setting up the project:

- [Node.js v20.14.0](https://nodejs.org/en/) (or compatible version)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
  ## Installation

1.  Clone the repository:

```sh
git clone https://github.com/vaibhavk2474/upkaraktech-task.git
cd upkaraktech-task
```

2.  Install dependencies:

```sh
npm install
or
yarn install
```

3. start development server

```sh
npm run dev
or
yarn dev
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
