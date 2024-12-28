FROM node:slim

# ENV NODE_ENV development

WORKDIR /src

COPY . .

RUN npm install

CMD [ "npm", "start" ]

EXPOSE 5000