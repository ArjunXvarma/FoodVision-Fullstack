FROM node:18-slim
WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev", "--", "--host" ]