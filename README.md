# [Portfolio Website](https://dshr-65e14.web.app/learn)

Welcome to my portfolio website! This Angular project showcases my skills, projects, and what I'm learning. The website is built using Angular and styled with Bootstrap for a modern, responsive design.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Home**: Introduction and navigation to other sections.
- **About Me**: Information about my background and experience.
- **Featured Projects**: Details and links to some of my notable projects.
- **What I'm Learning**: A section to document the topics I'm currently studying.
- **Contact**: A section for users to reach out.

## Getting Started

To get started with this project, you'll need to have Node.js and Angular CLI installed on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [Angular CLI](https://cli.angular.io/) (version 15.x or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-github/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Project Structure

- `src/app`:

  - `components/`: Contains reusable components like `project-card`.
  - `app.module.ts`: The root module of the application.
  - `app.component.html`: The main HTML template for the app.
  - `app.component.ts`: The main component's TypeScript file.
  - `projects/`: Contains the `projects` component to display project cards.
  - `about/`: Contains the `about` component to showcase personal information.
  - `learn/`: Contains the `learn` component to document learning topics.
  - `contact/`: Contains the `contact` component for user interactions.

- `assets/`: Directory for static files like images.

- `styles.css`: Global styles for the application.

## Running the Project

To run the project locally, use the Angular CLI:

```bash
ng serve
```

This will start a development server, and you can view the application by navigating to `http://localhost:4200` in your web browser.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes.
4. Push your branch to your forked repository.
5. Open a Pull Request.

Please ensure your code adheres to the project's style and includes appropriate tests.
