# берём нашу версию node 

FROM node:20.19.2

# создаём папку где будет всё храниться 

WORKDIR /app

# копируем package.json

COPY package*.json ./

# устанавливаем зависимости 

RUN npm ci

# копируем всё остальное 

COPY . .

# собираем приложение (КРИТИЧЕСКИ ВАЖНО!)

RUN npm run build

# открываем порт 

EXPOSE 3000

# запускаем приложение 

CMD ["npm", "start"]