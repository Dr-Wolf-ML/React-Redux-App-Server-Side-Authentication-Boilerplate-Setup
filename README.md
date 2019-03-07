# React-Redux-App-Server-Side-Authentication-Boilerplate-Setup
React-Redux App Server Side Authentication Boilerplate Setup

This repo is part of a client and server project setup for Authentication using the MERN Stack.  Please use in conjunction with https://github.com/Dr-Wolf-ML/React-Redux-App-Client-Side-Authentication-Boilerplate-Setup

Summary of local project setup:

NPM imports:
    * jwt-simple
    * mongoose
    * bcrypt-nodejs
    * passport
    * passport-jwt
    * passport-local
    * express
    * http
    * body-parser
    * morgan

Local MongoDB setup in terminal:
 - Documentation:
    * MongoDB.org
    * Find installation: https://docs.mongodb.com/manual/installation/
    * brew install mongodb
    * The first thing we need to do here is create the data directory:
           sudo mkdir -p /data/db
    * Take over ownership of the director we just created:
           sudo chown -R $USER /data/db
    * To start up MongoDB:
           mongod
    * Gotchas:
        * in mongoose.connect use option { useNewUrlParser: true }

Dev Tools:
    * Postman
    * Robo 3T:  robomongo.org

Happy Hacking!
