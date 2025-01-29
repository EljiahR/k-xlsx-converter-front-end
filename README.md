# k-xlsx-converter-front-end

A front-end application designed to facilitate the conversion of `.xlsx` files, built using Next.js and TypeScript.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The `k-xlsx-converter-front-end` is a user-friendly interface that allows users to upload and convert `.xlsx` files into various formats. This application leverages the power of Next.js for server-side rendering and React for building interactive UIs.

## Features

- Upload `.xlsx` files for conversion.
- Preview data before and after conversion.
- Download converted files in the desired format.
- Responsive design ensuring usability across devices.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/EljiahR/k-xlsx-converter-front-end.git
   cd k-xlsx-converter-front-end
   ```

2. **Install Dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

### Running the Application

To start the development server:

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

Navigate to `http://localhost:3000` in your browser to view the application.

## Project Structure

The project's structure is as follows:

```
k-xlsx-converter-front-end/
├── cache/
├── depreciated/
├── public/
├── src/
│   ├── app/
│   ├── pages/
│   │   ├── api/
│   │   └── index.tsx
│   ├── styles/
│   └── components/
├── .eslintrc.json
├── .gitignore
├── .replit
├── next-env.d.ts
├── next.config.js
├── package.json
├── package-lock.json
└── tsconfig.json
```

- **cache/**: Contains cached data (if any).
- **depreciated/**: Holds deprecated code or resources.
- **public/**: Static assets like images and fonts.
- **src/**: Main source code directory.
  - **app/**: Application-specific components and logic.
  - **pages/**: Next.js pages.
    - **api/**: API routes.
    - `index.tsx`: Main landing page.
  - **styles/**: Global and component-specific styles.
  - **components/**: Reusable React components.
- `.eslintrc.json`: ESLint configuration.
- `.gitignore`: Specifies files to ignore in the repository.
- `.replit`: Configuration for Replit environment.
- `next-env.d.ts`: Next.js TypeScript environment settings.
- `next.config.js`: Next.js configuration.
- `package.json`: Project metadata and scripts.
- `package-lock.json`: Locks the versions of dependencies.
- `tsconfig.json`: TypeScript configuration.

## License

This project is licensed under the [MIT License](LICENSE).

