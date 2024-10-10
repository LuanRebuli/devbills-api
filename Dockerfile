FROM node:19.9.0-alpine

WORKDIR /home/app

COPY . ./

RUN npm i

EXPOSE 3333

CMD ["npm", "run", "dev"]