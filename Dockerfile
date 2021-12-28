FROM node:14 as build

WORKDIR /zamdaa_page

ENV PATH /zamdaa_page/node_modules/.bin:$PATH

COPY package.json ./

RUN npm install 
# RUN npm install

RUN npm install react-scripts@3.4.1 -g

COPY . .

RUN npm run build

CMD ["npm", "start","start-debug"]

EXPOSE 3000
