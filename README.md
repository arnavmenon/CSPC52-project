# Airport Management System
## CSPC52 Mini Project

ReactJS + NodeJS and MySQL

## setup

## db
`cd src/db` then `node seed.js`

### routing and controller structure
1. under `cd src/db/models` make CRUD functions for each schema to interact with db
2. under `src/controllers` make CRUD functions to be used by routes linking the created model file to it
3. under `src/routes` make routes (GET - display, POST - insert, PUT - update, DELETE - delete)
4. import routes to index.js using `require("./src/routes/<file_name>.js")(app);` before app.listen()

### backend

1. `npm i` in  root directory
2. Create `src/env/.env` from `src/env/.env.example`
3. Run `node index.js`

### frontend

`cd frontend` then `npm i` then `npm start`