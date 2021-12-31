<h1 align = "center"> Holiday Project </h1>
<h2 align = "center"> 🌱 Plantcycle - An all in one app to look after my houseplants 🌱 </h2>

## Project Summary 

☘️ I would like to create an application that will allow me to collect and store data on the condition of each of my plants, with additional features (such as a weather app) in a style that is simple and user friendly. 

## Why this subject?

🌲 I love to look after plants! My room is a small but growing jungle of various tropical plants, most of which I have grown from gifted cuttings. 

🌿 Watering and checking the condition of each plant weekly takes a lot of time. Also, I do not have a record of how my plants are doing throughout the year, and what their optimal water/fertiliser conditions may be. I want to gather data to work towards understanding this process. As well, I would like to display the current weather conditions in my local area to make the platform multi purpose for myself. 

## The plan

### Back-end

#### Setting up my file structure, installing dependencies
- Instal dependencies: pg, dot/env
- Instal dev dependencies: prettier, 
- Create a .prettierrc.json file to start using prettier
- Ensure the type is set to module in package.json
- Use an ES6 NPX Generator to create the file structure for my project
    - Check that the import syntax is definitely ES6 
- Create a new cloud-based PostGres database on Heroku
- Link up:
    - Store my Heroku credentials in an env file
    - Create a config file 
    - Check scripts - change them to include "node -r dotenv/config your_script.js" so they run dot/env

#### Creating new table / populating a table in Heroku database
- Create a JS file with a hardcoded array of 3 plants and their respective values
- Create a scripts folder
    - Create a createTable file which will create a new SQL table on the Heroku database.
        - Create a script in the package.json that will execute this file
        - Check to see if it works
    - Create a populateTable file which will create a new SQL table on the Heroku database.
        - Create a script in the package.json that will execute this file
        - Check to see if it works

#### Creating models for CRUD requests 
- Create a models folder
- Create JS file containing functions for : creating, reading, updating and deleting the table created in SQL
- Export each function

#### Use the models to make requests to the database
- Import each of the model functions
- Create requests for: creating (.post), reading (.get), updating (.put) and deleting (.delete)
- Test each request using Postman

### Front-end

TBC