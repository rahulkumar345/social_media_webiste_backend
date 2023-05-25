
## The APIs you need for any kind of social media websites.

this is a backend ready API project built with Node.js, Express.js which supports all the required APIs that is nedded for a social media website.

## APIs List : 

- POST api/authenticate: authenticates with email and password 
- POST /api/follow/{id} : authenticated user would follow user with {id}
- POST /api/unfollow/{id} : authenticated user would unfollow a user with {id}
- GET /api/user : authenticate the given user and return the respective user profile.
- POST api/posts/ : would add a new post created by the authenticated user.
- DELETE api/posts/{id} : would delete post with {id} created by the authenticated user.
- POST /api/like/{id} : would like the post with {id} by the authenticated user.
- POST /api/unlike/{id} :  would unlike the post with {id} by the authenticated user.
- POST /api/comment/{id} : add comment for post with {id} by the authenticated user.
- GET api/posts/{id} would return a single post with {id} populated with its number of likes and comments.
- GET /api/all_posts : would return all posts created by authenticated user sorted by post time.

## Tech

this uses a number of Libraries to work properly:

- Node.js
- Express.js
- mongoose
- For Database : MongoDB
- For authentication : jsonwebtoken
- And many more..

## Installation

this requires [Node.js](https://nodejs.org/) v10+ to run.

### Steps to run this project : 

```sh
Step 1 : Clone this Repo 
Step 2 : Open your bash shell and run code git clone {git clone url}
Step 3 : Install the dependencies and devDependencies and start the server.

Step 4 : 


npm i
npm start : For development enviorments
```
The local server will start at 127.0.0.1:5000/



