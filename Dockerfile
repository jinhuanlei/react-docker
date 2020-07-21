FROM node:alpine

WORKDIR '/app'

# package.json into /app folder
COPY package*.json ./
RUN npm install

COPY . .
# build step
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/build /usr/share/nginx/html
