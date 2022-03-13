<h1 align = "center"> 🌱 Plantcycle 🌱</h1>
<h2 align = "center"> 🌱 An all in one app to look after my houseplants 🌱 </h2>

## Project Summary

☘️ I would like to create an application that will allow me to collect and store data on the condition of each of my plants, with additional features (such as a weather app) in a style that is simple and user friendly.

## How to use

1. [Click me to visit the deployed site for this project](https://my-plantapp.herokuapp.com/)
2. To view all of my plants, click the left and right arrows to navigate between them.
3. To add new notes, enter values into the form (orange text). This includes if the plant has been watered, a condition rating of the plant (out of 10), and write any notes to be recorded in the note viewer. 

## Why this subject?

🌲 I love to look after plants! My room is a small but growing jungle of various tropical plants, most of which I have grown from gifted cuttings.

🌿 Watering and checking the condition of each plant weekly takes a lot of time. Also, I do not have a record of how my plants are doing throughout the year, and what their optimal water/fertiliser conditions may be. I want to gather data to work towards understanding this process. As well, I would like to display the current weather conditions in my local area to make the platform multi purpose for myself.

## The plan

### Back-end

<details>
<summary>Expand to see Back-end Plan</summary>
<br>

#### Setting up my file structure, installing dependencies

- Use an ES6 NPX Generator to create the file structure for my project (https://www.npmjs.com/package/express-generator-esmodules)
  - Check that the import syntax is definitely ES6
  - Create .gitignore file - ignore node_modules
- Instal dependencies: pg, dot/env
- Instal dev dependencies: prettier, eslint
- Create a .prettierrc.json file to start using prettier
- Ensure the type is set to module in package.json
- Create a new cloud-based PostGres database on Heroku
- Link up:
  - Store my Heroku credentials in an env file
    - Hide this env file, use gitignore
  - Create a database folder, containing a config.js and index.js file
  - Use syntax 'process.env' to export values from env file
  - Inside of index file, create a pool referencing these values defined in config
  - Check scripts - change them to include "node -r dotenv/config your_script.js" so they run dot/env

#### Creating new table / populating a table in Heroku database

- Create a JS file with a hardcoded array of 3 plants and their respective values
- Create a scripts folder inside of the database folder
  - Create a createTable file which will create a new SQL table on the Heroku database.
    - Create a script in the package.json that will execute this file
    - Check to see if it works
  - Create a populateTable file which will create a new SQL table on the Heroku database.
    - Create a script in the package.json that will execute this file
    - Check to see if it works

#### Creating models for CRUD requests

- Create a models folder
- Create JS file containing functions for : for selecting data (return all, return by id, return by word close to name)
- Export each function

#### Use the models to make requests to the database

- Import each of the model functions
- Create requests in app.js for: creating (.post), reading (.get), updating (.put) and deleting (.delete)
- Test each request using Postman
</details>

### Front-end

<details>
<summary>Expand to see UI Design Plan</summary>
<br>

#### UI mockup with Figma

- Create a new Figma file. Inside it, makes notes on:

  - Information I would like to include for each plant
  - Required fields/functionality for entering data
  - How data will be viewed, how to move between data

  - Make a low-fi plan of the website
  - Take a break and then come back to rate out of 10 what works well, and what needs improved

  - Make a second low-fi plan of the website
  - Take a break and then come back - is the website looking easy to use? are the main features drawing enough attention?

- Make a high-fi plan of the website

  - For 5 minutes, pick out 3 separate colour palettes with coolors.co
  - Pick out 2-3 fonts on Google Fonts library
  - Add images of plants from the plant website as examples

#### HTML / CSS

- Create HTML structure by following the high fi plan

- Practice using CSS grid

  - Use a grid maker (https://grid.layoutit.com/) to generate grid layout for my page
  - Add to my CSS files and make a rough mockup of the site

- UI Research
  - Google how to create your own weather app by pulling from a website / from a api to a website
  - Google how to create UI that transitions like slides on a presentation to see if actually possible
  
</details>
