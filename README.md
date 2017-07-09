# votelocal

A small website highlighting local issues to give people reasons to vote in the next Cambridge municipal election.

## about



# technical

## how to build

This site is static, but the static content is generated using npm. We've done this for serveral reasons: so snippets of html can be included on all pages; minifying css; image manipulation.

To follow those steps:

- install [node.js](https://nodejs.org/en/)

Then, from the main directory of this project:

- run: ```npm install```
- run: ```npm run gulp```
- for continuous updates: ```npm run gulp-watch```
 

## how to run

Since the site uses interal paths relative to the root, for links to work locally, you'll either have to put everything in your computer's root or run a simple server, such as:

- ```npm run static```
- ```127.0.0.1:8080/```

[alternate one-liners](https://gist.github.com/willurd/5720255)


## how to modify

In general, if there is a file in "src", you should modify that one.

To change how the project is build, update ```gulpfile.js```.


### adding a new topic

- add an html file to `src/topic/`, such as `src/topic/your_topic.html`
- edit that file to include the information you want!
- build and run as suggested above

### updating a topic's text



# starting your own

Don't live in Cambridge, but want this to exist for your upcoming elections?

Awesome!

You'll want to:

- fork this project
- replace references to Cambridge with your city
- host it!

Feel free to contact us at admin@cambridge.vote. 


## hosting your own
