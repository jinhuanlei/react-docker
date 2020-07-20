FROM node:alpine as builder

WORKDIR '/app'

# package.json into /app folder
COPY package.json . 
RUN npm install

COPY . .
# build step
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
