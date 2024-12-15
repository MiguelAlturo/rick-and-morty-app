# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


Este es un proyecto de aplicación basado en React para mostrar información sobre personajes, episodios y ubicaciones del universo de *Rick and Morty*, utilizando herramientas modernas como Vite, Redux, TypeScript y ESLint.

## Tecnologías

- **React**: Biblioteca principal para la creación de interfaces de usuario.
- **Redux Toolkit**: Gestión de estado global de manera sencilla y eficiente.
- **React Router**: Enrutamiento para la navegación entre las páginas.
- **TypeScript**: Superset de JavaScript para un desarrollo más seguro y robusto.
- **Vite**: Herramienta de construcción y servidor de desarrollo rápido.
- **Sass**: Preprocesador CSS para un mejor manejo de los estilos.
- **ESLint**: Linter para mantener el código limpio y consistente.

## Requisitos

Antes de comenzar, asegúrate de tener las siguientes herramientas instaladas:

- **Node.js**: Recomendado versión 16 o superior.
- **npm** o **yarn**: Gestores de paquetes para instalar dependencias.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/rick-and-morty.git