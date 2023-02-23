# syntax=docker/dockerfile:1

FROM node:16-slim
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000
ENV PORT 3000

CMD [ "node", "index.js" ]