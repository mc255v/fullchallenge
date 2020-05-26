# Fullstack Engineer Challenge

## Getting Started

Create a new MySQL database and configure a .env file with the parameters seen in '/server/config.js'

After database creation:

Install dependencies
```
yarn
```

Run migration files to create tables from schema and seed the tables
```
yarn database
```

Start the backend and frontend
```
yarn start
```

### Other commands

Start the frontend only
```
yarn dev
```
Start the backend only
```
yarn serve
```
Make a migration file
```
yarn makemigration <filename>
```
Run migration
```
yarn migrate
```
Rollback migration
```
yarn rollback
```
Seed the database
```
yarn seed
```
Copy all configuration files and transitive dependencies (Webpack, Babel, ESLint, etc) into project
```
yarn eject
```
Run frontend tests
```
yarn test
```

# Database

employees
-----
id (string)

name (string)

position (string)

start_date (timestamp) - default to now

reviews
------
id (integer)

employee_id (string) -> employees.id

created_date (timestamp) - default to now

q1 (string) - default to 1

q2 (string) - default to 2

q3 (string) - default to ""

employee_feedback
-------------
id (integer)

review_id (integer) -> reviews.id

employee_id (string) -> employees.id

completed (boolean) - default to false

assigned_date (timestamp) - default to now

feedback (string) - default to ""

# API

## Employees

/api/employees - POST
-----------------
Expected
- employeeObj
    - id
    - name
    - position
    - start_date

Returned
- employeeObj
    - id
    - name
    - position
    - start_date

/api/employees - GET
----------------
Returned
- employeeObj
    - id
    - name
    - position
    - start_date

/api/employees/:id - POST
-----------------
Expected
- employeeObj
    - id
    - name
    - position
    - start_date

Returned
- employeeObj
    - id
    - name
    - position
    - start_date

/api/employees/:id - GET
-----------------
Expected
- employee_id

Returned
- employeeObj
    - id
    - name
    - position
    - start_date

/api/employees/:id - DELETE
-----------------
Expected
- employee_id

Returned
- "success"

/api/employees/custom/list - POST
------------------
Expected
- queryObj
  - query
  - where

Returned
- employeeObj
    - name
    - position

## Reviews

/api/reviews - POST
-----------------
Expected
- reviewObj
    - id
    - employee_id
    - created_date
    - q1
    - q2
    - q3

Returned
- reviewObj
    - id
    - employee_id
    - created_date
    - q1
    - q2
    - q3

/api/reviews - GET
----------------
Returned
- reviewObj
    - id
    - employee_id
    - created_date
    - q1
    - q2
    - q3

/api/reviews/:id - POST
-----------------
Expected
- reviewObj
    - id
    - employee_id
    - created_date
    - q1
    - q2
    - q3

Returned
- reviewObj
    - id
    - employee_id
    - created_date
    - q1
    - q2
    - q3

/api/employees/:id - GET
-----------------
Expected
- reviewId

Returned
- reviewObj
    - id
    - employee_id
    - created_date
    - q1
    - q2
    - q3

## Employee Feedback

/api/feedback - POST
-----------------
Expected
- feedbackObj
    - id
    - review_id
    - employee_id
    - completed
    - assigned_date
    - feedback

Returned
- feedbackObj
    - id
    - review_id
    - employee_id
    - completed
    - assigned_date
    - feedback

/api/feedback - GET
----------------
Returned
- feedbackObj
    - id
    - review_id
    - employee_id
    - completed
    - assigned_date
    - feedback

/api/feedback/:id - GET
-----------------
Expected
- queryObj
    - id
    - type

Returned
- feedbackObj
    - id
    - review_id
    - employee_id
    - completed
    - assigned_date
    - feedback

# Technology Used

### Front-end

- React
- React-Router-Dom
- Bootstrap
- React-Bootstrap
- Axios

### Back-end

- Node.js
- Express
- Knex
- Dotenv
- Moment
- MySQL

### Dev Dependencies

- Nodemon
- Mocha
- Chai
