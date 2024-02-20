FROM node:slim

WORKDIR /app

COPY . .

RUN npm install

RUN apt-get update -y && apt-get install -y openssl

EXPOSE 5000

CMD ["npm", "start"]