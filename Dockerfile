# Docker to generate the node application
# This docker use the node image and copy the application files to run


FROM node


WORKDIR /usr/app


COPY package*.json /usr/app


RUN npm install


COPY .  .


EXPOSE 3334


CMD ["npm", "run", "start:nodemon"]