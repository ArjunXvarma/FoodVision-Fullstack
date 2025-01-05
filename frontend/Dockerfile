FROM node:18-bookworm-slime
WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev", "--", "--host" ]