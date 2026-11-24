# Pet Care Website

A pet-care website built with Next.js, React, and Tailwind CSS.

**Author:** [BajrangVaishnav](https://github.com/BajrangVaishnav)  
**License:** Private use only. See [LICENSE](./LICENSE).

> This repository may be publicly viewable on GitHub, but it is not an open-source project under an OSI-approved license. Use and modification are limited by the private-use license below.

## Requirements

- Node.js 20 or later
- npm

## Getting started

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |

## Deploying to GitHub Pages

The `main` branch workflow builds and deploys the static site to GitHub Pages after each push. To publish it:

1. Push this repository to `BajrangVaishnav/Pet_Care_Website` on GitHub.
2. In the repository settings, open **Pages** and select **GitHub Actions** as the build and deployment source if it is not already selected.
3. Check the **Actions** tab for the deployment result. The project site URL will be `https://bajrangvaishnav.github.io/Pet_Care_Website/`.

The deployment uses a static export. Login and registration are browser-only demos: the demo account is `demo@petcare.local` / `PetCare123!`, and registered accounts are saved only in the current browser. Passwords are stored as salted hashes, but this is not secure authentication and does not protect site content. Do not use real or reused passwords. Appointment submissions and purchases are not connected to a backend.

## Project structure

```text
src/
  app/          Next.js routes and shared styles
  components/   Reusable UI components
public/         Static images and assets
.github/
  workflows/    GitHub Pages deployment
```

## Privacy and configuration

Do not commit passwords, access tokens, API keys, or real user data. Keep local environment variables in `.env.local` (ignored by Git), and use a secret manager for deployment configuration. Authentication is a local-only demo and must be replaced with a trusted server-side identity provider before handling real accounts.

## License

Copyright (c) BajrangVaishnav. All rights reserved. This software is available for private, personal, non-commercial use only, subject to the terms in [LICENSE](./LICENSE). This is a source-available license, not an open-source license.
