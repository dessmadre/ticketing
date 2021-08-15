FROM node:alpine

WORKDIR /usr/app

RUN apk add --update yarn

COPY ./package.json ./

RUN yarn --prod

COPY ./ ./

CMD ["yarn", "dev"]