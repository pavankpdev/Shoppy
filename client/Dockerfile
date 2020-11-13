FROM node:12.19.0 
WORKDIR /app
COPY package*.json ./
RUN node -v
RUN npm install node-sass@4.14.1
RUN npm install
COPY . ./
RUN npm run build

FROM nginx 
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html