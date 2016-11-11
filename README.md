# Genkin Dama

[Genkin Dama live][genkindama]

[genkindama]: http://genkindama.herokuapp.com/

Genkin Dama is a full-stack web application inspired by Kickstarter, where users can start campaigns for their projects and let other people fund their projects through rewards and pledges. ClickStarter is built on Ruby and Rails on the back-end, a PostgreSQL database, and React.js with a Redux architectural framework on the front-end.

## Features & Implementation

### Create / Finalize Project

Users can create campaigns for their projects with just three inputs: title, location, and category. Once the project is initialized successfully, the user is further prompted to enter the detail that his/her project has, some of which are funding end date, description, short blurb, and goal amount. Project cover image is optional. All images are uploaded onto AWS S3. A default image is given if the user chooses to not upload an image for the project. In addition, a project is only be funded through its rewards. User can attach as many rewards onto the project as possible. Each reward requires four inputs to be created: title, description, delivery date, and minimum cost. If user does not submit and finalize his/her project, the project would not appear on the home page nor the search result.

![Initialize Campaign](https://github.com/kikoo201/ClickStarter/blob/master/docs/screencaps/create_project1.jpg "Initialize Campaign")
![Create Campaign1](https://github.com/kikoo201/ClickStarter/blob/master/docs/screencaps/project_form1.jpg "Create Campaign1")
![Create Campaign2](https://github.com/kikoo201/ClickStarter/blob/master/docs/screencaps/project_form2.jpg "Create Campaign2")

### Pledge Project on the project show page

Users can back projects by pledging through rewards. This can be done by clicking the pledge button in the corresponding reward box on the project page after a value is entered in the box. In order to make a legal pledge, the user has to be logged in and the pledge amount has to be equal or greater than the minimum cost of the reward.

The project page displays the author name, title, description, location, category, rewards, goal amount, and short blurb of the project. In addition, it also displays the fund status of the project such as the number of unique backers, total pledge amount, and days remaining for funding.

![Show Project](https://github.com/kikoo201/ClickStarter/blob/master/docs/screencaps/project_show.jpg "Show Project")

### Search

Users can search project by author name, location, category, location, or the combination of these. A carousel will be shown if such projects are found with those parameters.

![Search Project](https://github.com/kikoo201/ClickStarter/blob/master/docs/screencaps/project_search.jpg "Search Project")
