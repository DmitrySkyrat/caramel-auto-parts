FROM node

EXPOSE 4200

WORKDIR /app

COPY . .

RUN npm install

CMD npm start