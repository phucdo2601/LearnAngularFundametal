FROM node:latest as build
WORKDIR /app
RUN npm install -g @angular/cli

# Install the application's dependencies into the node_modules's cache directory.
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]