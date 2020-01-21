# DevRadar Mobile
MVP to study JS stack (Node.js, React, React Native) proposed by [RocketSeat](https://rocketseat.com.br/) on Omnistack Week 10.

## Description
This is the mobile part of the project, where you can search for some techs (ReactJS, Vue.js, Node.js, PHP, ...) and click on the button (without search, it shows just the map), to see devs who work with the searched techs and have their registered coordinates up to 10km of distance. Your coordinates will be taken by the mobile geolocation of your device.

When you click on dev's avatar, it pops up a callout showing dev's name, bio and techs. Clicking on this callout you will be redirected to the dev's github page (into the app, not on browser).

If you are in the middle of a search, and a new dev (that meets the search requirements) is registered, he will show automatically on the screen (pushed by websocket).

To build this we are using React Native, Expo, Websocket.io and geolocation features.

See the prints below:

### Mobile Screen
![Mobile Screen](https://raw.githubusercontent.com/carloswimmer/devradar-mobile/master/screen_shots/devradar_splash.jpg) 
![Mobile Screen](https://raw.githubusercontent.com/carloswimmer/devradar-mobile/master/screen_shots/devradar_main.jpg) 
![Mobile Screen](https://raw.githubusercontent.com/carloswimmer/devradar-mobile/master/screen_shots/devradar_profile.jpg) 

## Just clone, run and point
You will need to have installed [Expo.io](https://expo.io/) globally and, to use it with yarn, include this line on `.bashrc` file:
```bash
export PATH="$(yarn global bin):$PATH"
```

Now you can clone the repository and run on your computer:
```bash
git clone https://github.com/carloswimmer/devradar-mobile.git
cd devradar-mobile
yarn install
yarn start
```

Then, to see it working on your smartphone: 
* install the app Expo from your app store
* open it
* click on `read QR Code`
* point to QR Code on the screen of your computer