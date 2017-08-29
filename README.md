# Final Project | Brain Pain - Trivia game

#### Summary

A rapid-fire trivia game.  Players will be asked random simple questions of various categories that must be answered quickly!  Get as many correct answers in the shortest amount of time.  Can you get the highest score?


#### Technologies used
* React
* Redux
* Express
* Webpack
* Babel
* [Materialize-css](http://materializecss.com)

#### APIs
The app will use one of the following APIs (depending on the format of the quiz - to be decided)
* [Open Trivia DB](https://opentdb.com/) - User-contributed trivia question database.  (Multiple Choice & true/false questions)
* [jService](http://jservice.io) - Database of over 150,ooo Jeopardy questions

#### Database
User's scores will be stored in an Express database containing
* Username
* password
* single game hi-score
* total games played
* total points scored

#### Components/Utilities
* Navigation Bar - on top of page, links to Sign-up/Log-in and Top Scores page
* Leaderboard - on left or right of screen, will display top 10 overall leaders (top average score)
* Get Average Score - will calculate players average score based on total points and total games played

#### Pages
##### Home/Landing Page
* Welcome Message with prompt to sign-up or login
##### Quiz Page
* Quiz will take place in here
##### Results Page
* Shows users score for current game and their new average score for all played games
##### Top Scores
* Shows leaderboard for overall leader as well as top hi-score, most games played, best score based on category of questions
