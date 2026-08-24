# Build stage
FROM node:20-alpine AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Production runtime stage
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000

# Create non-root user for security
RUN addgroup -S nodejs && adduser -S nodeuser -G nodejs

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

USER nodeuser

EXPOSE 4000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:4000/health/liveness || exit 1

CMD ["node", "index.js"]
