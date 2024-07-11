# SpaceWonders: React + Vite

This project is a web application built using React and Vite. It allows users to explore NASA's Astronomy Picture of the Day (APOD) API. With this application, you can view stunning images from space along with detailed explanations and dates.

## Features

- **Fast Refresh**: Utilizing Vite's Hot Module Replacement (HMR) for a smooth development experience.
- **ESLint Integration**: Basic ESLint rules to maintain code quality.
- **API Integration**: Fetch and display data from NASA's APOD API.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Danico-mfala/spa_nasa_api
   cd spacewonders

2. **Install dependencies**:

```bash
    npm install
    # or
    yarn install

3. **Set up environment variables**:

Create a .env file in the root of your project and add your NASA API key:
VITE_NASA_API_KEY=your_nasa_api_key

4. **Running the Project**:
To start the development server:
    npm run build
    # or
    yarn build

The build output will be in the dist directory. You can deploy the contents of this directory to any static hosting service.

5. **Using the NASA API**:
This project uses NASA's Astronomy Picture of the Day (APOD) API to fetch and display images. The API requires an API key, which you can obtain from the NASA API Portal.

Fetching Data
In the project, data is fetched from the NASA API using the following endpoint:

    const api_key = import.meta.env.VITE_NASA_API_KEY;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

Ensure that you have set the VITE_NASA_API_KEY environment variable in your .env file to use the API key.

Displaying Data
The fetched data includes the image URL, title, explanation, and date. This data is displayed in the application using React components.


6. **Project Structure**:
Here's a brief overview of the project structure:

.
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── Gallery.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── .env
├── .eslintrc.js
├── .gitignore
├── index.html
├── jest.config.js
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md

