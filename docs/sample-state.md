```js
{
  currentUser: {
    id: 1,
    username: "Guest"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createProject: {errors: ["body can't be blank"]}
  },
  backings: {
    1: {
      amount: 500,
      note: "is great for earth",
      project_id: 1,
    }
  },
  rewards: {
    id: 1,
    name: "A hug",
    description: "pledge $1 for a hug!!",
    backing_id: 1,
    backer_id: 1
  },
  projects: {
    1: {
      title: "Save the Whales",
      creator_id: 1,
      description: "Stop killing whales",
      category: {
        1: {
          id: 1
          name: "Environment"
        }
      },
      goal: 500000,
      image-url: "google.com"
    }
  }
}
```
