# NieuwsFlits Frontend

A modern news platform built with Angular, providing real-time news updates for Belgian readers.

## Features

- Server-Side Rendering (SSR) for optimal SEO
- Static Site Generation (SSG) for static content
- Modern, responsive design
- Category-based navigation
- Real-time content updates
- Multi-language support (Dutch/French)

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nieuwsflits-frontend.git
cd nieuwsflits-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

The application will be available at `http://localhost:4200`.

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

- Development build: `ng build`
- Production build: `ng build --configuration production`
- SSR build: `ng build && ng run nieuwsflits-frontend:server`

## Running Tests

- Unit tests: `ng test`
- End-to-end tests: `ng e2e`

## Project Structure

```
src/
├── app/
│   ├── components/    # Reusable UI components
│   ├── models/       # Data models and interfaces
│   ├── services/     # API services and business logic
│   └── shared/       # Shared utilities and modules
├── assets/          # Static assets (images, icons)
└── environments/    # Environment configurations
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contact

Marvin Deckmyn - [GitHub Profile](https://github.com/marvindeckmyn)