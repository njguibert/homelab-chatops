#FROM node:16
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app/
#COPY package*.json /usr/src/app/
#RUN npm install
#COPY . /usr/src/app/
#CMD ["bin/hubot"]
FROM nginx:alpine
COPY . /usr/share/nginx/html
