# GenkinDama

[heroku]: http://www.herokuapp.com

GenkinDama is a full-stack web application based on Kickstarter. It will use a Rails backend and a Redux frontend. The name GenkinDama derives from a technique from Dragonball Z (Genki-Dama, localized in the USA as "Spirit Bomb"). It is a play on words, as "genkin" means "cash" in Japanese.

## Features & Implementation

### Projects

Projects are the largest part of Kickstarter, so they will naturally be the largest part of GenkinDama. On the database side, the `databases` table will hold columns `id`, `title`, `image_url`, `description`, `funding_goal`, and `creator_id`. A user can create a project, set up its funding goal, and contribute funds to projects. Funds are handled by backings.

Projects have a project page, which will display rewards, backers, and tags alongside the project itself.

The project index will display featured projects as well as recommended projects, and a large banner at the top of the page.

### Users and Backing

Users are joined to projects in two ways: creating projects and backing them. Users can back any project by committing any amount of money (there is no limit to the amount one can pledge), and by committing a certain amount of money, they can unlock rewards. Backings are stored in the database with columns `id`, `amount`, and `message`.

Backings are currently planned to be displayed on the project page, though can be moved to their own page or to an overlay if need be.

### Rewards

Users can get rewards by backing projects. Rewards are tied to a backing through a foreign key. Rewards are stored with columns `id`, `title`, and `description`.

Rewards are displayed on the project page.


### Tags

Projects are tagged, tied to tags with taggings. Tags only have an `id` and `name` in the database.

Tags are displayed on the project page.


## Future Directions for the Project

Once the minimal functions are completed, I will work on the following features.

### Image Uploading

Rather than simply submitting an image URL, the site will be able to upload the image to a host.

### Advanced Search

Projects can be searched by title and keywords rather than just tags.

### Recommended for You

The app will be able to display recommended projects to the user based on which projects they have backed.

### No-reload Auth

Similar to Caviar, the user will be able to sign up and login without refreshing the page.

### FAQ

Project creators can set up a FAQ and answer questions on each project. Users can submit any number of questions.
