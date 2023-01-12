FROM node:14
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app
COPY . .
CMD ["bin/hubot","-a","telegram"]
