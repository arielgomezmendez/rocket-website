# README

This repository contains a React application that displays information about upcoming space launches using the Space Launch Now API.

## Getting started

1. Clone the repository to your local machine.

2. Install dependencies by running npm install.

3. Run the app with npm start.

4. Open http://localhost:3000 to view it in the browser.

## App Structure

### App.js

The App.js file is the main component that renders the application. It uses React Router to handle navigation between two pages: the Launches page and the LaunchInfo page.

### Launches.js

The Launches.js file is a component that displays a list of upcoming launches. It uses the LaunchCard component to render each launch.

### LaunchCard.js

The LaunchCard.js file is a component that displays a single launch. It is used by the Launches component to display a list of launches.

### LaunchInfo.js

The LaunchInfo.js file is a component that displays detailed information about a single launch. It uses the useParams hook from React Router to obtain the launch id from the url, and fetches data from the Space Launch Now API to display information about the launch.

## Technologies

React
React Router
Redux Toolkit
CSS

## Credits

This project was created by Ariel Gómez Méndez. It uses data from the Space Launch Now API.
