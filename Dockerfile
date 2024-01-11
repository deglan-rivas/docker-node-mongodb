FROM node:alpine3.19

RUN mkdir /home/app

WORKDIR /home/app

COPY . .

EXPOSE 3000

CMD [ "node" , "index.js"]