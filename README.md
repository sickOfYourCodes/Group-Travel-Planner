# Our Vacation


## Table of Content 
- [Description](##description)
- [Usage](##developer usage)
- [Development](#development)
- [Tutorial](#tutorial)
- [Contributing](#contributing)
- [License](#license)
- [Badges](#badges)
## Description
This application is designed to help groups map out and record budget while on vacation. 
Anyone can use this application by clicking on the " sign up today" button on homepage. User must input their first and last name, a creative username, an email, and the password to generate an account and access the personal dashboard.

<img width="895" alt="Screen Shot 2023-01-09 at 4 22 43 PM" src="https://user-images.githubusercontent.com/114694158/211434172-19989428-3d61-4d38-920c-3d5cf2e71499.png">
 

On the dashboard, the user will have a calendar view and wedges on the side to access and input trips. 
When the user click on trips, they will have a card display with trip names.  
<img width="895" alt="Screen Shot 2023-01-09 at 4 22 19 PM" src="https://user-images.githubusercontent.com/114694158/211434130-5935edce-206d-4f90-a9d7-e39b28addbc8.png">

A new account user will have the option to create a trip by inputing the following fields: 
1. Unique trip name; 
2. String of number for trip ID; 
3. The location of the trip; 
4. Description for the trip; 
5. Total people going on the trip

<img width="899" alt="create-trip-form" src="https://user-images.githubusercontent.com/114694158/211434567-516295d9-9e56-40d0-8e8a-de9c3292ab50.png">
After all fields are collected, the user can click on "Create" 

After the trip is created, the user will be directed to the trip page where they can add themself or other participants. They may click on the detials button on the header to view their inputs of location, participants, weather forecast, and daily budget. 

If the user click on "check the forecast", they will be directed to a weather dashboard to search for a city in the global scope. 
The weather condition will display temeprature, windspeed, and humditiy; they will also have access to past searches. 
The weather widget is also accessible on the dashboard. 

If the user click on "daily budget" they will be directed to a form where they can input Activity name, who paid, and the amount. All fields must be entered. 

The budget record can be viewed by pressing total budget. 

Any user with the trip id can access the url by adding the trip ID as an extension of the url following " /dashboard/trips/trip/tripID" and add themself as a participant. 



## Developer Usage

Please follow the following steps to run the application locally on your machine: 
1. Clone this repo. 
2. Open the integrated terminal from 'server.js'.
3. Inside of terminal, enter ' NPM I -y' and then 'npm run seed'.
4. Create .env enter fields for 
  DB_NAME="groupvacations_db"
  DB_USER="root"
  DB_PASSWORD=""
6. Open Mysql workbench, enter the code from schema.sql 
7. Go into connection.js, verify information 
8. test Mysql connection, check schema to make sure database is existed and connected. 
9. Go back to code editor, enter node server.js 
10. In the browser, type 'http://localhost:3306'.




## Development 

Main languages: javascript, css, html. 
Open sourced libraries used: node.js, npm express,npm fs,npm path.
Database used: MYSQL


## Contributors  

Eileen Ma
Japbir Chhina
Brian Wang
Kevin Tran

## License 
MIT license 

## Badges
 ![image]({[BadgeURLHere](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)})
  ![image]({[BadgeURLHere](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1)})
