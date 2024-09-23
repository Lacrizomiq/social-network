# Choix de l'image de base
FROM node:20-alpine

# Définir le dossier de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Copier le fichier .env
COPY .env ./

# Installer les dépendances, y compris les devDependencies
RUN npm install

# Supprimer esbuild s'il est installé et le réinstaller pour la plateforme actuelle
RUN npm uninstall esbuild && npm install esbuild

# Installer mongoose
RUN npm install mongoose

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Lancer l'application
CMD ["npx", "tsx", "index.ts"]