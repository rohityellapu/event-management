# Task Manager

This repo contains the source code for Task/Todo Manager app [rohits-todo.com](https://rohits-todo.onrender.com/).

## Table of Content

* [Features](#features)
* [Technologies used](#technologies-used)
* [Getting started](#getting-started)
* [Installation](#installation)
* [Contrubuting](#contributing)
* [Working Tree](#working-tree)
* [TroubleShooting](#troubleshooting)
* [Connect](#author-rohit-yellapu)


## Features


* Add your daily tasks or todos with ease. Your task data is securely stored in the database and can be retrieved wherever you are with simple authentication.
* Manage your activities quickly completing the tasks one by one.
* User can also pause his activity and start another activity, thus completing the tasks at user's own pace.


## Technologies used
<li>➡️JavaScript <img height="20" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"></li>
<li>➡️React <img height="20" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"></li>
<li>➡️NPM <img height="20" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png"></li>
<li>➡️RESTful API <img height="20" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png"></li>
<li>➡️HTTP/HTTPS <img height="20" src="https://user-images.githubusercontent.com/25181517/192107854-765620d7-f909-4953-a6da-36e1ef69eea6.png"></li>
<li>➡️HTML <img height="20" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"></li>
<li>➡️CSS <img height="20" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"></li>
<li>➡️TailWind CSS <img height="20" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"></li>
<li>➡️Visual Studio Code <img height="20" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png"></li>
<li>➡️GIT <img height="20" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"></li>
<li>➡️GitHub <img height="20" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png"></li>


## Getting started

### Prerequisites

1. Git
1. Node: any 12.x version starting with v12.0.0 or greater
1. A fork of the repo (for any contributions)
1. [React](https://reactjs.org/)

### Installation

1. `git clone https://github.com/rohityellapu/task-manager.git` to clone the repo in your local environment
1. `cd task-manager` to go into the project root
1. `npm install or npm i` to install the website's npm dependencies

### Running locally

1. Change apiUrl to your backend api or refer the backend implemtation [task-manager-api](https://github.com/rohityellapu/task-manager-api)
1. `npm start` to start the hot-reloading development server
1. `open http://localhost:3000` to open the site in your favorite browser

## Contributing


### Create a branch

1. `git checkout main` from any folder in your local `task-manager` repository
1. `git pull origin main` to ensure you have the latest main code
1. `git checkout -b the-name-of-my-branch` (replacing `the-name-of-my-branch` with a suitable name) to create a branch

### Make the change

1. Follow the ["Running locally"](#running-locally) instructions
1. Save the files and check in the browser
  1. Changes to React components in `src` will hot-reload
  1. Changes to markdown files in `content` will hot-reload
  1. If working with plugins, you may need to remove the `.cache` directory and restart the server

### Test the change

1. If possible, test any visual changes in all latest versions of common browsers, on both desktop and mobile.
1. Run `yarn check-all` from the project root. (This will run Prettier, ESLint, and Flow.)

### Push it

1. `git add -A && git commit -m "My message"` (replacing `My message` with a commit message, such as `Fix header logo on Android`) to stage and commit your changes
1. `git push my-fork-name the-name-of-my-branch`
1. Go to the [task-manager repo](https://github.com/rohityellapu/task-manager) and you should see recently pushed branches.
1. Follow GitHub's instructions.
1. If possible, include screenshots of visual changes. A preview build is triggered after your changes are pushed to GitHub.

## Working Tree
```cmd
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
│
├───public
│       index.html
│
└───src
    │   index.js
    │
    ├───components
    │       App.jsx
    │       Home.jsx
    │       Loading.jsx       
    │       Login.jsx
    │       Nav.jsx
    │       Register.jsx      
    │       SideBar.jsx       
    │       Todo.jsx
    │
    └───images
            loading.gif 
```

## Troubleshooting

- `yarn reset` to clear the local cache
- If any issue faced while running the app, please let us know [here](https://github.com/rohityellapu/task-manager/issues)


# Author: Rohit Yellapu
## Reach me
* [Git](https://github.com/rohityellapu)
* [Linkedin](https://www.linkedin.com/in/rohit-yellapu)
* [Twitter](https://twitter.com/rohit_yellapu)
