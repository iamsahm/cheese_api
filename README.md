# Cheeeeeeesssseeeeeeee

## Documentation

[More documentation of the codebase and its architecture can be found here.](./DOCUMENTATION.md) It's recommended you all read this _after making sure the whole setup below worked for everyone_. Then work together on a diagram describing how the application works.

## Card wall

https://trello.com/b/JjgnulJl/cheese-sommelier

## Quickstart

## Folder Structure

Final project
   - cheese_api
   - cheese-frontend

### Install Node.js

1. Install Node Version Manager (NVM)
    ```
    brew install nvm
    ```
    Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
    ```
    nvm install 18
    ```

### Setting up API - Backend

1. Clone the repo to your local machine
2. Install Node.js dependencies for both the `frontend` and `api` directories.
    ```
    ; npm install
    ```

> You might get warning messages about the installed dependencies at this point. You can ignore them, as long as the installation process doesn't fail. If the setup fails at this point, don't wait for too long and reach out to your coach.

3. Install an ESLint plugin for your editor. For example: [`linter-eslint`](https://github.com/AtomLinter/linter-eslint) for Atom.
4. Install MongoDB
    ```
    brew tap mongodb/brew
    brew install mongodb-community@5.0
    ```
    _Note:_ If you see a message that says `If you need to have mongodb-community@5.0 first in your PATH, run:`, follow the instruction. Restart your terminal after this.
5. Start MongoDB

    ```
    brew services start mongodb-community@5.0
    ```

6. Run the package.json command below to add the cheeses.json database to your local mongo database

```
npm run init-database
```

> If you've run this command before you'll get a load of error messages about populating database with duplicate keys. If we update the .json in the future we should wipe the current database and repopulate it with fresh data. (Sam: I think it actually updates with fresh inserted docs already, maybe we can just run it again and it'll poll and update new data??? Hopefully...)

### How to run the server and use the app (as a human)

1. Start the server application (in the `api` directory)

    **Note the use of an environment variable for the JWT secret**

    ```
    ; JWT_SECRET=notverysecret npm start
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

#### Running tests for the backend

Run the tests in a new terminal session:

```bash
# Make sure you're in the api directory

; JWT_SECRET=notverysecret npm run test
```

## MongoDB Connection Errors?

Some people occasionally experience MongoDB connection errors when running the tests or trying to use the application. Here are some tips which might help resolve such issues.

-   Check that MongoDB is installed using `mongo --version`
-   Check that it's running using `brew services list`

If you have issues that are not resolved by these tips, please reach out to a coach and, once the issue is resolved, we can add a new tip!

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---


<!-- END GENERATED SECTION DO NOT EDIT -->
