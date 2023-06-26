# Employee-Review-System
A full stack, app used for reviewing employee.
Hoisted Link :


### Description

A full stack app, in which the admin, can assign the employees, to review each other on the basic of there work. The admin has special power, to make any other employee
as the new admin. Admin can also make the new employee, and they can also assing, the reviewer and revieweee. The admin can see the current employee, and according to the
review, the admin can remove the employee. The review given to the employee, is always going to be store in the database.


### Tech Stack

Node , Express, Mongodb , EJS , javaScript , html, css

### How to setup the project on local system

  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory.

After reaching the project directory you have to run the following the command.
   ```` 
        npm install 
        npm start || nodemon index.js
   ````
### Basic initialization flow followed for any NodeJS Project

  1. "npm init" to get the package.json
  2. "npm i express" to get the node modules
  3. "npm i ejs" for using template engine
  4. "app.use(express.urlencoded())" is used to get the string conversion from req params
  5. "app.use(express.static('assets'))" is used for accessing the static files
  6. "npm i -g nodemon" for using nodemon which is helpful is running the server again after immediate changes
  7. "npm i mongoose" to setup the mongoDB database
  8. Inorder to ignore the node modules from saving to github we need to create ".gitignore" file and add the text "node_modules/"
  9. "npm i express-ejs-layouts" for creating layouts
  10. "npm i cookie-parser" is used for cookie generation
  11. "npm i passport" and "npm i passport-local" is used for authentication using passport.js
  12. "npm i express-session" is used to generate cookie in passport authentication
  13. "npm i connect-mongo" is used to keep the user signed in even after server restart
  14. "npm i node-sass-middleware" is used for setting up scss
  15. "npm i connect-flash" is used for flash notification
  16. "npm i dotenv" is used to store environmental variables. For this create .env file and while restoring variables use "require('dotenv').config()"


#### If you want to make an employee as admin then use the secret key : admin.

### Features

  You can review the employees. The admin has the special power to assing, the task to employee, remove the employee, add new admin, and also employee;
  
  
  # HomePage / Admin View

  # Home page / Employee view

  
  # Sign-Up


  # Sign-In

  # Forget Password
  
  # Assign Task

  # Employee List
  

  

### Folder Structure

```
Employee Review System
    |
    |               |--->css
    |--->assets---->|--->images
    |             
    |
    |               |--->flashMiddleware.js
    |--->config---->|--->mongoose.js
    |               |--->passport-local-Stradegy.js
    |
    |                  |-->admin_controller.js
    |--->controllers-->|-->home_controller.js
    |                  |-->review_controller.js
    |                  |-->user_controller.js
    |
    |               |-->review.js
    |--->models---->|
    |               |-->user.js
    |
    |              
    |               |-->admin.js
    |--->routes---->|-->index.js
    |               |-->review.js
    |               |-->user.js
    |
    |              |--->_header.ejs
    |              |---> addEmployee.ejs
    |              |---> admin.ejs
    |              |---> employe.ejs
    |--->views---->|--->forget_password.ejs
    |              |--->home.ejs
    |              |--->layout.ejs
    |              |--->sign_in.ejs
    |              |--->sign_up.ejs
    |
    |-->node_modules
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json
    
    ````
