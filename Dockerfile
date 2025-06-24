FROM node

WORKDIR /app

COPY . .

RUN chown -R node ./

USER node

RUN npm install

EXPOSE 3000

CMD [ "node", "app.js" ]
