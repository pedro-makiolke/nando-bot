FROM node:17.4.0

WORKDIR /usr/src/

RUN apt-get update || : && apt-get install python -y
RUN apt-get install ffmpeg -y

COPY package*.json ./

COPY src/ /usr/src/

RUN npm install

ENTRYPOINT ["node", "bot.js"]