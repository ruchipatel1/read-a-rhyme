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
* Despite clicking on different words, the application plays the same audio.
# Install Guide
To run this app locally, clone this repository and install `node` and `npm` first. You can install `node` [here](https://nodejs.org/en/download/) according to the requirements of your computer. After that run

```
$ npm install
```
This will install all the needed dependencies for our project. Then run
```
npm install -g expo-cli
```
in the `read-a-rhyme-reactnative` directory of this repository. 

Then you can run 

```
$ npm run web
```
to run the app. 
