# Cover Band Website Project

## Overview

### Project Brief

Create A Website For A Band
Build a static (front-end only) website for a band.

The band has provided you, the developer, with the following assets that they would like to showcase on their website:

- Photos of the band members
- A video clip
- Audio clips

The band would also like to publicise upcoming gigs in the future. They would like users to be able to contact them with potential work related leads.

### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
    - **AngularJS** page routing and directives
- [Bootstrap](http://getbootstrap.com/)
    - **Bootstrap** was used to provide a responive layout 
- [npm](https://www.npmjs.com/)
    - **npm** was used to help manage some of the dependencies in the application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of libraries and frameworks

### Testing

The website has been tested in the following browsers;

Google Chrome (inc developer tools)
Mozilla Firefox (inc developer tools)
Microsoft Edge
Internet Explorer
Safari

The website has been tested using the following mobile devices

Sony Xperia X
Sony Xperia XC
iPhone 5C
iPhone 6

### Challenges Faced

- Creating a carousel with a background-image in Angular.js

I wanted to use an image carousel with background images for the home page. By using background images, rather than regular images, I was able to create an effect whereby the images would 'zoom out' when viewed on mobile (in comparison to when viewed on a larger screen). I was unable to acheive this using either a regular bootstrap carousel or a specific carousel created for use in angular.js (which both use regular images). As I was not interested in users being able to control the rotation of the images within the carousel, I decided to create my own 'image slider' using jQuery and background images.

- Using a fixed background image for the entire site

In order to acheive a reggae theme/appearance, I wanted to use a background image of wood with a multicoloured overlay. This worked fine on a desktop and also in chrome dev tools when emulating a mobile device. However, when testing the site on an actual mobile it became apparent that a fixed background does not work well on mobile (due to th address bar). To overcome this I used the :before selector in css. I found this solution on Stack Overflow

- Aligning text over the band member images

Another effect I set out to achieve was for desktop and larger screen users to  be able to hover their mouse or press on images of the bandmenbers to view their bio. A problem that I experienced for this was managing to center the text over the image correctly at various differrent screen sizes. To overcome this I used the vw (viewport width) setting for the text paragraphs on larger screens

- Creating a custom Twitter feed

I also wanted to create a custom styled Twitter feed to match the feel of the site. As the widget provided by Twitter is restricted in terms of customisation, I decided to use a javascript library (twitter-stream.js) which would allow a more flexible use of Twitter data. In order to create the effect I was aiming for I manipulated the data returned by twitter-stream.js into a table and then styled the elements of the data I wanted, whilst using display: none to remove the data I wasn't interested in.
 
## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request