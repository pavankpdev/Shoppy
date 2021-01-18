FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

ENV PORT=4000
ENV DB_HOST=shoppy-db.cexukr3eruop.ap-south-1.rds.amazonaws.com
ENV DB_USER=root
ENV DB_PWD=shoppy_password
ENV DB_NAME=shoppy
ENV DB_PORT=3306
ENV NODE_ENV=production

CMD ["npm", "run", "start"]