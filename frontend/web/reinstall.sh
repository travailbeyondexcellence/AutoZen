#!/bin/bash

# Clean installation script for Next.js with bun

echo "Cleaning up old installation..."
rm -rf node_modules
rm -f package-lock.json
rm -f bun.lockb
rm -rf .next

echo "Installing dependencies with bun..."
bun install

echo "Starting development server..."
bun run dev