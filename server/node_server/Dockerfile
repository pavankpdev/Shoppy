FROM node:alpine
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
ENV NODE_ENV=development
ENV PORT=4000
ENV DB_HOST=shoppy-db.cexukr3eruop.ap-south-1.rds.amazonaws.com
ENV DB_USER=root
ENV DB_PWD=pavan
ENV DB_NAME=shoppy
CMD ["npm", "run", "start"]