# Genkin Dama

[Genkin Dama live][genkindama]

[genkindama]: http://genkindama.herokuapp.com/

Genkin Dama is a full-stack web application inspired by Kickstarter, where users can start campaigns for their projects and let other people fund their projects through rewards and pledges. Genkin Dama is built on Ruby and Rails on the back-end, a PostgreSQL database, and React.js with a Redux architectural framework on the front-end.

The name Genkin Dama is inspired by the iconic technique "Spirit Bomb," or "Genki Dama" from Dragon Ball Z. The technique involves gathering power from many contributors, much like a Kickstarter campaign. "Genkin" in Japanese means "cash."

## Features & Implementation

### Starting a Project

Like Kickstarter, the user needs to enter a title, short description, image, funding goal, and end date. The title and description are strings, the image is stored as a URL in the database, the funding goal is an integer, and the end date is a date object.

Image upload is handled by the Imgur API through an HTML5 file input.
End date is entered by an HTML5 date input, though it currently does not work on certain browsers such as Firefox.

![Project Index Carousel](https://github.com/txie1993/genkin-dama/blob/master/docs/screencaps/Screen%20Shot%202016-11-11%20at%203.04.20%20PM.png)
![Project Index Items](https://github.com/txie1993/genkin-dama/blob/master/docs/screencaps/Screen%20Shot%202016-11-11%20at%203.04.50%20PM.png?raw=true)
![New Project Form](https://github.com/txie1993/genkin-dama/blob/master/docs/screencaps/Screen%20Shot%202016-11-11%20at%203.06.44%20PM.png?raw=true)
![Project Show](https://github.com/txie1993/genkin-dama/blob/master/docs/screencaps/Screen%20Shot%202016-11-11%20at%203.35.09%20PM.png?raw=true)

### Backing a Project

Users can back projects if they are not the creator of that project. On the show page for each project that was not created by the currently logged in user, there is a "Back this Project" button that takes the user to a page where they can view reward levels. There is also an option to donate an arbitrary amount without receiving a reward. By clicking the first option, the user can fill out a small form to enter the amount they wish to donate.

By clicking a reward level, a reward and backing are added to the database. Also, by selecting a reward, the user automatically qualifies for all lower-level rewards for that project.

![Back Project](https://github.com/txie1993/genkin-dama/blob/master/docs/screencaps/Screen%20Shot%202016-11-11%20at%203.07.38%20PM.png?raw=true)
![Reward Creation](https://github.com/txie1993/genkin-dama/blob/master/docs/screencaps/Screen%20Shot%202016-11-11%20at%203.06.44%20PM.png?raw=true)

### Adding Tags

The creator of a project can add tags to their project to categorize them. Tags are added by a hidden form that can be opened and closed by the UI.

![Tag Project](https://github.com/txie1993/genkin-dama/blob/master/docs/screencaps/Screen%20Shot%202016-11-11%20at%203.06.22%20PM.png?raw=true")
