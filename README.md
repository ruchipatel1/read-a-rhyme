# Read-A-Rhyme 1.0 Release Notes
## Primary Features
* User can select a story to read from their library.
* User can choose a reading mode.
  * Listening mode: The story is narrated to the user.
  * Reading mode: The user is able to select individual words from the story to hear read aloud, as well as the word's definition.
* User can take quizzes based on the entire reading.
* User can take quizzes based on single words.
## Bug Fixes
* Orientation wasn't changing when returning to the Library, but this has been resolved.
* Audio was not re-rendering when loading a new narration, but this has been resolved.
* Despite clicking on different words, the application would play bthe same audio in the non-narrated reading mode. This has been fixed withour new integration with s3.
## Known bugs/defects
* Audio doesn't work on Android.
* Styling for long press modal is not consistent with the other modals.
* Audio doesn't stop when you go back.
* Quiz for This Little Piggy doesn't appear.
* Quiz UI for longer words doesn't display the word in a single line.
* Mini-quiz is in landscape, and should be portrait.
* Play button needs to be moved off of the image in reading mode.
## To-Dos
* Integrate Login and D.A.P.
# Install Guide
## Pre-requisites
Install `node` and `npm` first. You can install `node` [here](https://nodejs.org/en/download/) according to the requirements of your computer.
Run to install the Expo CLI.
```
$ npm install -g expo-cli
```
## Download
This application is still in a developmental build. To download the application, click the green `Code` button above, then press download to download a zip file of this repository, or use ```git clone```.
Additionally, you will need to install the Expo-Go application on a mobile device (if you intend to use the mobile version of this application)

## Dependencies
Run the following two commands in the read-a-rhyme-reactnative directory.
```
$ npm install
```
```
$ expo install
```
This will install all the needed dependencies for our project. These dependencies can be viewed in the package.json file.

## Build
As this application is built using the Expo framework, when the application is run (see below), Expo will automatically create a development build.
To produce a release build for app stores, please see the following documentation: https://docs.expo.dev/build/setup/

## Running Application
In the read-a-rhyme-reactnative directory, run the following command.
```
$ expo start
```
This will load the Expo interface, from here you can either scan the QR code and use Expo-Go to view the mobile application, or open the application in a browser. For further information on how to use Expo-Go please see: https://expo.dev/client

## Troubleshooting
* A dependency is not installed.
    * To resolve this, please run ```expo install``` again. If this does not work, ensure that you have the most up-to-date package.json file.
* Expo-Go is not connecting.
    * If you are using a lan connection, ensure the computer and mobile device are connected to the same wifi network.
    * If this issue persists, use a tunnel connection. This can be selected on the Expo interface.
* The Expo interface did not appear.
    * Press the 'd' key in the terminal where the Expo server is running.


