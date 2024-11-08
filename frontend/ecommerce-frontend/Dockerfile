# Dockerfile para el Frontend
FROM node:16

# Crear directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración de npm
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
