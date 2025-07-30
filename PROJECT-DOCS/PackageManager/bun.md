● Instructions for using Bun with your Next.js project:

1. Install dependencies using Bun:

  Navigate to the frontend/web directory and run:
  cd /mnt/c/Users/zen/AutoZen/frontend/web
  bun install

  This will:

- Read the package.json file
- Install all dependencies
- Create a bun.lockb file (Bun's lockfile)

2. Run the Next.js development server with Bun:

  bun run dev

  This will start the Next.js server on port 6400 as
  configured.

3. Other Bun commands you can use:

# Build the project

  bun run build

# Start production server

  bun run start

# Run linting

  bun run lint

# Fix linting issues

  bun run lint:fix

# Format code

  bun run format

4. Additional Bun-specific commands:

# Add a new dependency

  bun add `<package-name>`

# Add a dev dependency

  bun add -d `<package-name>`

# Remove a dependency

  bun remove `<package-name>`

# Update dependencies

  bun update

  The scripts in package.json work seamlessly with Bun -
  you don't need to modify them. Bun will automatically
  use its faster runtime when you use bun run instead of
  npm run.
