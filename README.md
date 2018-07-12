# HypeRelease
- An app using a webscraper to build a custom API for Yeezy shoe release data

## Objectives

### We are building a front end app to connect to our web scraper we built earlier today and our deployed API

[x] Wipe out all create-react-app garbage I dont need
[x] Build components for the page
- [x] Header
- [x] Body/Main
- [x] Container for shoe data
[x] Style components using bootswatch
[x] Fetch request for API data
[x] Render data
[x] Sort data by release date (wasnt needed, object came in that way - tis rare!!!)

## TODAYS OBJECTIVES 7/11/2018

### Set up layout for additional items/brands
[x] React Router
  - [x] npm install react-router-dom
  - [x] setup Routes
[x] Restyle landing to display all
- [x] buttons for Router
- [x] section for display all

[x] Scrape new shoe data
[x] Bring in new data to frontend
* Saving for new scraped data, likely new date formats we'll need to normalize b/t data sets
- [x] Display all...
- [] sorted by month of release/date of Release

## TONIGHT's REFACTOR OBJECTIVE

### Refactor wherever it needs it!

[x] Leverage state in App.js and pass props to Yeez or Jordan
- [x] Set up ShowAll, Yeezy and Jordan as components in App.js
- [x] move jordan api fetch to the App.js methods
- [x] pass state as props to those components
[XXX] Build NavBar components
- [-] Home (showall)
- [-] Releases
- [-] Contact
- [-] About
[x] Nav bar background color ?!?!? bootswatch
[x] Fix text-shadow in card text
[x] Link to StockX
[XXX] Card header should be unique color!
[XXX] Logos for buttons in Hero (JORDAN, ADIDAS)
[x] Import JS for bootstrap
- [x] verify that JS is working, ex. hamburger menu in mobile view...


### Remaining fixes...
[] Contact form
[] normalize Date data
- [] render all sorted by date
[] Colors?
[] Cross-browser compatibility
[] preload anything???
[] asset reduction?
[] manifest files for PWA
[] google calendar / iCal integration for each Release
