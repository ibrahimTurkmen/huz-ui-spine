# OVERVIEW

huz-ui-spine is a sample huz component project. It can be used in huz.com in case that it's been deployed in npm.

It includes some pre-configured files to develop a huz component locally without an issue.

It has two optional test environments, [grapejs](https://grapesjs.com) and [storybook](https://storybook.js.org).

To test or get live preview in storybook:

* npm install
* npm run storybook
  
To test or get live preview in grapejs:

* npm install
* "npm run watch" AND "serve" in two seperate terminals.


# CHALLENGE

huz-ui-spine has @editor/assets folder. It contains two [spine](http://esotericsoftware.com/) 2d skeletons, powerup and raptor. Each skeleton has some animations like run, jump and etc.

Our target is to give new UX experience to users by using 2d skeletons and dom elements. So we wanted to create a spine card displaying available animations for each skeleton. A spine card is able to play the animation a user selected. A minimal spine card is our challenge. All extra features are welcome.

To use a 2d spine skeleton please check it [here](http://esotericsoftware.com/spine-runtimes).

Good lucks