# GenkinDama, a Kickstarter clone

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://genkindama.herokuapp.com/
[trello]: https://trello.com/b/kwnahtrO/kickstarterclone

## Minimum Viable Product
GenkinDama is a web application based on Kickstarter built on Rails/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [x] Hosting on Heroku
- [x] Display total money gathered relative to goal
- [x] Backend/Frontend Auth, include Guest login
- [x] Projects
- [x] Replace "image url" in submission form with image upload
- [x] Backing Projects
- [x] Reward Levels
- [x] Style Backing Form
- [x] Style Reward Form
- [ ] Tags on Projects
- [ ] Style project index
- [ ] Style Navbar
- [ ] **Bonus** Animate Progress Bar
- [ ] **Bonus** Search
- [ ] **Bonus** Recommended for You
- [ ] **Bonus** Caviar-esque login/signup popups (no HTTP request until registered)
- [ ] **Bonus** Project FAQ
- [ ] Production [README](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md


## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Projects Model, API (2 days)

**Objective:** Projects can be created, destroyed, edited through the API.

### Phase 3: Backing and Rewards API (2 days)

**Objective:** Users will be able to back projects through the API, or remove their backings. Projects will have reward levels and be able to total their earnings.

### Phase 4: Tags (1 day)

**Objective:** Projects can be tagged with multiple tags, and tags are searchable.

### Phase 5: CSS (2 days)

**objective:** Site will look like Kickstarter, with backing progress bar. Large slideshow banner on front page. Tabs on project form.

### Phase 6: - Bonus features (any remaining time)

**objective:** Login now works like Caviar. Projects have a FAQ feature. Progress bar on projects will fill up to their current backing level on reload (animated)
