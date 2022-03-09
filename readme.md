# Installation

## Software requirements

- PostgreSQL
- Node.js
- Services package for Node.js like npm or yarn(preferably npm)
- Any software to make http requests (preferably Postman)

## Step 1

- create a database called view in your local databases
- create .env file and add the environment variables(you have an example in file called .env.example)

## Step 2

- run the next npm commands:

```sh
npm i
```

```sh
npm run migrations:run
```

```sh
npm run serve
```

## Final Step

- if you want to make some http requests in the project you have a file called view.postman_collection.json, just import in Postman and test

if you have any problem or some ideas to apply for improve the project you can send me an email to albertoayalarodriguez97@gmail.com and we can talk about that ⭐