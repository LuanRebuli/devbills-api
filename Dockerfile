FROM node:20
    
WORKDIR /app

COPY . ./

RUN npm i

EXPOSE 3333

CMD ["npm", "run", "dev"]