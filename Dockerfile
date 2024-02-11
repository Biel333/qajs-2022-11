FROM node:20

COPY package*.json ./
RUN npm ci

COPY jest.config.js jest.config.js
COPY babel.config.json babel.config.json
COPY src ./src

CMD ["npm", "test"]