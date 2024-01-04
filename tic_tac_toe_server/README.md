# Tic Tac Toe server

This is a server for tic tac toe app created with Node.js and Express. 

## Getting started
These instructions will get you a copy of the project up and running on your local machine.

### Installing
Make sure node.js is installed, navigate to the root of the backend directory (tic_tac_toe_server) and install the project prerequisites with:

`npm i`

### Starting the project
To run the project with node, start it with:  

`npm start`  

To runt the project in development mode that uses nodemon, start it with:  

`npm run dev`

The server will start on port 3001.

## More about the server
The server has only one endpoint: /api/history, that can be used to retreive the history or add a new event to the 
history. The data is stored in JSON format only in memory.

The logic of the server is very simple, so there are no unit tests. Integration tests were written using SuperTest and Jest.