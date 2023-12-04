
FROM node:18-alpine As development
RUN apk add --update sudo
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app && chmod -R 777 /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY . .
USER node
RUN npm run build

FROM node:18-alpine as production
RUN apk add --update sudo
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app && chmod -R 777 /home/node/app
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY . .
USER node
COPY --from=development /home/node/app/dist ./dist
EXPOSE 4000
# CMD ["./wait-for.sh", "mysql:3306", "--", "node", "dist/main"]