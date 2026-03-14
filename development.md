# Development Document

## Install Prerequisites
- Clone the repo
  - ```git clone https://github.com/JasonYoder2026/freerecipe```
- cd into the repo
- Run ```npm install```

## Development workflow:
For general development use this flow to start the app:

- Start the database with: ```docker compose up postgres```
- Start the server with: ```cd API/``` and ```dotnet run```
- Start the frontend with: ```cd Client/``` and ```ng serve```
  - Note you may need to run ```npm install```

For testng major versions that might ship to production run: 
```docker compose up --build``` from the root of the project to containerize the whole app.
