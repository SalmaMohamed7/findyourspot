FROM node:10-alpine
WORKDIR ./server
COPY package*.json ./ 
# RUN npm install
COPY . .
# EXPOSE 5000
CMD ["npm", "start"]