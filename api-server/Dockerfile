FROM node:slim

# ENV NODE_ENV development

WORKDIR /src

COPY . .

RUN npm install

CMD [ "npm", "run", "dev" ]

EXPOSE 3000