# Read-A-Rhyme 1.0 Release Notes
## Primary Features
* User can select Readings
* User can choose Reading Mode
* User can take quizzes based off entire reading
* User can take quizzes based off single words
## Bug Fixes
* Orientation wasn't changing when returning to Library, but should be working fine now
* Audio was not rerendering when loading a new long audio, but now it does. 
## Known bugs/defects
* Despite clicking on different words, the application plays the same audio in the non-narrated reading mode.
* Audio doesn't work on Android
* Styling for long press modal is not consistent with the other modals
* Audio doesn't stop when you go back
* Quiz for This Little Piggy doesn't show up
* Quiz UI for longer words doesn't display the word in a single line
* Mini-quiz is in landscape
* Play button needs to be moved off of image of reading
## To-Dos
* Integrate Login and DAP
# Install Guide
## Pre-requisites
Install `node` and `npm` first. You can install `node` [here](https://nodejs.org/en/download/) according to the requirements of your computer. 
Run to install the Expo CLI.
```
$ npm install -g expo-cli
```
## Dependencies
Run
```
$ npm install
```
and
```
$ expo install
```
This will install all the needed dependencies for our project.
## Download
Click the green `Code` button on above. Then press download to download a zip file of this repository. 

## Build
No build necessary for this app. 

## Running Application
You can run 

```
$ npm run web
```
to run the app. 
