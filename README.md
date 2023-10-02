# Brielievers Frontend application

This application's MVP was built in a [2 week sprint] (https://trello.com/b/JjgnulJl/cheese-sommelier) as a final project of the Makers Academy fullstack development bootcamp.
It was built by a team of 5 developers ([Hazel] (https://github.com/hash-smy), [Oli] (https://github.com/OliLoftus), [Rich] (https://github.com/rashworth7), [Sam] (https://github.com/iamsahm), [Charlotte] (https://github.com/charlottemothersole)) using AGILE methodologies.

## About the application

The application is a cheese sommelier app, which allows users to

-   Search for cheeses by type
    -   Using the menu in the navbar to select a cheese type
-   Get a random cheese
    -   Each time a user visits the homepage a random cheese is displayed
-   Rate cheeses
    -   Users can rate cheeses out of 5 in the individual cheese pages
-   Get recommendations based on their rating
    -   User ratings are used to calculate a user preference and return a cheese that fits their highest rated preference but that they haven't yet rated
-   See a map of cheeses by country
    -   Users can see a map of the world with markers for cheeses and a link to the cheese page

## Running the app

Currently the database is hosted on MongoDB Atlas and can only be accessed by the team. If you would like to run the app locally, please contact one of the team members for the database connection string.

If you'd like to run it locally, you'll need to set up the database locally and populate it with the cheeses.json file. See the instructions below.

```
git clone https://github.com/iamsahm/cheese_api.git backend
cd backend
npm install
npm run init-database
```

Point the app at your local database by changing the `MONGODB_URI` in `api/.env` to `mongodb://localhost:27017/cheese-api`.

Then run npm start with a secret key.

```
JWT_SECRET=notverysecret npm start

```

## Folder Structure

Final project

-   cheese_api
-   cheese-frontend

    ```
    brew services start mongodb-community@5.0
    ```

### How to run automated tests

The automated tests run by sending actual HTTP requests to the API. Therefore, before anything, you'll need to start the backend server in test mode (so that it connects to the test DB).

**Note the use of an environment variable for the JWT secret**

```bash
# Make sure you're in the api directory

; JWT_SECRET=notverysecret npm run start:test
```

You should leave this running in a terminal.

Then, you can either run tests for the backend or the frontend following the steps below.

## MongoDB Connection Errors?

Some people occasionally experience MongoDB connection errors when running the tests or trying to use the application. Here are some tips which might help resolve such issues.

-   Check that MongoDB is installed using `mongo --version`
-   Check that it's running using `brew services list`

If you have issues that are not resolved by these tips, please reach out to a coach and, once the issue is resolved, we can add a new tip!

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

<!-- END GENERATED SECTION DO NOT EDIT -->
