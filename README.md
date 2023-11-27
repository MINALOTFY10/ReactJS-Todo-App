# Todo App ReactJS

![React](https://img.shields.io/badge/React-18.0.0-blue)
![Redux](https://img.shields.io/badge/Redux-4.1.0-green)

This is a simple task manager web app built using React and Redux. It allows you to add, manage, and categorize tasks. You can switch between different task lists - All Tasks, Active Tasks, and Completed Tasks.
<div align="center">
  <img src="./App Screenshots/one.png" alt="Application Screenshot" height="400">
</div>


## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
- [Project Structure](#project-structure)
- [How To Use](#how-to-use)
- [Live Website](#live-website)

## Getting Started
Clone the repository to your local machine and follow the installation instructions below to get started.

## Features
- Add new tasks.
- Mark tasks as completed.
- Remove one or all tasks under the Completed tab.
- View all tasks, active tasks, or completed tasks.
- Automatically sync tasks with the server.
- Store the data in local storage (FireBase) that when user refresh the page he can still see his progress.
- Responsive layout.

## Project Structure
The project structure follows a standard React-Redux application layout:

- `components/`: Contains React components.
- `store/`: Redux store setup and actions.
- `store/TasksHttpActions.js`: HTTP actions for fetching and sending tasks data.
- `Layout.js`: Layout component.
- `App.js`: Main application component.

## How To use
<!-- For example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/MINALOTFY10/Todo-App-ReactJS

# Install dependencies
$ npm install

# Run the app
$ npm start
```

**Important:** If you're using the code for a module that requires API keys or a backend (e.g. the module about sending Http requests), you'll have to use **your backend URLs** or API keys. Mine won't work (I disabled my projects).

## Live Website
You can access the live version of this app at https://todo-app-react-js-pi.vercel.app/.
