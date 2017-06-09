#Workout Blender
##Galvanize g48 Q3 project
###Benjamin Gamble, Cheryln Barber, Kay Krewson

Workout Blender is a CRUD / SPA that allows the user to see a detailed breakdown of existing the exercises in a given DVD workout; create a workout from scratch from a list of exercises; view their workout history To see how their body has responded to a given workout over time; and enter the stats from their heart rate monitor (HRM) after doing the workout. The vast majority of fitness trackers that are currently on the market are focused only on that last item (HRM data) and are not specifically targeted at the home exerciser.


* THE 'LANDING' VIEW
  * 'Suggested Workout' image link
  * 'Create a Workout' image link
  * 'Workout History' image link
  * Motivational quote
  * 1-week calendar summary of their workouts

* THE 'SUGGESTED WORKOUT' VIEW
  * Text area populated with the list of exercises from a single workout

* THE 'CREATE A DVD WORKOUT' VIEW
  * Text area with a list of DVD titles
  * Text area that populates with a list of exercises when a title is dragged there
  * Button to save the workout for future reference/editing

  * THE 'EDIT AN EXISTING DVD WORKOUT' VIEW
    * Text area with the body of the workout displayed
    * Fields to enter/display the user's calories burned, average heart rate and peak heart rate

* THE 'CREATE A PAPER WORKOUT' VIEW
  * Text area with a list of exercises
  * Text area that populates with exercises name when it is dragged there
  * Button to save the workout for future reference/editing

  * THE 'EDIT AN EXISTING PAPER WORKOUT' VIEW
    * Text area with the body of the workout displayed
    * Fields to enter/display the user's calories burned, average heart rate and peak heart rate

* THE 'WORKOUT HISTORY' VIEW
  * One-month calendar showing which days had workout activity
  * A text summary of the workouts, dates and calorie-burn

###Technologies used:
* Angularjs 1.6
* HTML/CSS
* SASS
* SASS port of Bootstrap
* Compass
* Node.js
* Javascript
* Express
* Knex
* PostgreSQL


####Deployed on Heroku


#INSTALLATION
Clone the repository

run yarn or npm Install
=================

To get sass up and running with compass:

 At the command line:
 gem Install sass (this is slow)
gem install compass (for compiling sass)

 In your project, add a file called config.rb. It has to be at the same level as the css folder of your project

 Back at the command line:
 Compass watch


====
