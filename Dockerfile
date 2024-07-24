FROM openjdk:11-jdk

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get update && apt-get install -y nodejs

RUN npm install -g firebase-tools

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 4000 4400 5001 8080

CMD ["npx", "firebase", "emulators:start", "--only", "functions,firestore", "--project", "firebase-increment-id"]
