# Gallery App

## Overview
Gallery App is a full-stack application for posting, previewing, and liking pictures.

## Features
- User Authentication with Google
- Post pictures (only for logged-in users)
- Like pictures (only for logged-in users)
- View posted pictures

## Technology Stack
- Frontend: Next.js, Tailwind CSS
- Backend: tRPC, Prisma
- Database: Neon (PostgreSQL)
- Authentication: NextAuth.js
- Deployment: Vercel

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/mango-habanero/gallery.git
   ```
2. Install the dependencies:
   ```sh
    cd gallery
    npm install
   ```
3. Set up the environment variables:
   - Copy the `.env.example` file and rename it to `.env.local`.
   - Fill in the required environment variables.

4. Run the development server:
   ```sh
    next dev
    ```
