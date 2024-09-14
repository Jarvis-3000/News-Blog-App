# Samachar Blog Web App

## Overview
**Samachar** is a responsive blog web application built using **Next.js 14** (App Router), **Material UI**, and **Tailwind CSS**. It features server-side rendering (SSR) for enhanced SEO optimization and fetches blog data from a backend built with **FastAPI**. The app provides a clean and user-friendly design with the ability to browse blogs via pagination and view individual blog posts.

### Hosted Link
[Visit the live app on Vercel](https://my-samachar.vercel.app/)

### GitHub Repository
[View the source code on GitHub](https://github.com/Jarvis-3000/Samachar-App)

## Features

- **Landing Page** (`/`): Displays the latest blogs.
- **Blog List Page** (`/blogs`): Shows all blogs with pagination. The user can browse through the blogs page by page.
- **Single Blog Page** (`/blogs/:id`): Displays the full content of a blog post, including title, body, author information, and creation/update dates.
- **SEO Optimization**: Leveraged server-side rendering (SSR) for better SEO and faster page loads.
- **Responsive Design**: The app is fully responsive and works well across different screen sizes.

## Technologies Used

### Frontend
- **Next.js 14 (App Router)**: For routing and server-side rendering.
- **Material UI**: For component design and UI styling.
- **Tailwind CSS**: For custom styling and layout adjustments.
- **Axios**: For making API calls to the backend.

### Backend
- **FastAPI**: A Python-based backend framework that handles API requests for fetching blog data.

### Dev Tools
- **TypeScript**: For type safety and better code quality.
- **Vercel**: For hosting the frontend.




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
