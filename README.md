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
Safari

The website has been tested using the following mobile devices

Sony Xperia X
Sony Xperia XC
iPhone 5C
iPhone 6

### Challenges Faced

image change/carousel on home page

text over img-responsive on band page

twitter feed

fixed no repeat background image on mobile
 
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