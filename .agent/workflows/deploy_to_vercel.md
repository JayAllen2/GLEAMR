---
description: How to deploy the GLEAMR SaaS application to Vercel
---

# Deploying to Vercel

Since this is a Next.js application, the easiest way to deploy is using [Vercel](https://vercel.com).

## Prerequisites

1.  A [GitHub](https://github.com) account.
2.  A [Vercel](https://vercel.com) account.
3.  A PostgreSQL database provider (Recommended: [Supabase](https://supabase.com), [Neon](https://neon.tech), or [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)).

> [!IMPORTANT]
> **Database Switch**: You are currently using **SQLite** (`file:./dev.db`). SQLite files are not persistent on serverless platforms like Vercel. You **MUST** switch to a PostgreSQL database for production.

## Step 1: Push Code to GitHub

1.  Initialize git if you haven't:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
2.  Create a new repository on GitHub.
3.  Push your code:
    ```bash
    git remote add origin <your-repo-url>
    git branch -M main
    git push -u origin main
    ```

## Step 2: Set up Production Database

1.  Create a new project on **Supabase** (or your chosen provider).
2.  Get the **Connection String** (Transaction mode or Session mode, usually looks like `postgres://user:pass@host:5432/db`).
3.  Update your `prisma/schema.prisma` to use `postgresql`:

    ```prisma
    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }
    ```

4.  Run migrations against your **production** database URL locally to set up the tables:
    ```bash
    # Temporarily set DATABASE_URL to your production URL in .env, then run:
    npx prisma migrate deploy
    ```

## Step 3: Deploy on Vercel

1.  Go to your Vercel Dashboard and click **"Add New..."** -> **"Project"**.
2.  Import your GitHub repository.
3.  **Environment Variables**:
    *   Add `DATABASE_URL`: Your PostgreSQL connection string.
    *   Add `AUTH_SECRET`: Generate a new one using `openssl rand -base64 32`.
    *   Add `NEXTAUTH_URL`: Your production URL (e.g., `https://your-project.vercel.app`).
4.  Click **Deploy**.

## Step 4: Post-Deployment Verification

1.  Visit your deployed URL.
2.  Register a new tenant to verify the database connection and authentication work.
