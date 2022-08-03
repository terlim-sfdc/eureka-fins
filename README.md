# Eureka Finance (FINS)

## Introduction

Eureka FINS is built using React Native and Expo, showcasing the flexibility of using pro-code and open source tools such as Javascript to build a custom native mobile app, combining the power of the Salesforce Platform and multi-cloud to create an amazing Customer 360 experience.

If you are keen to read more about its implementation, check out this blog post [Inside a React Native Mobile App with Tableau Embedded](https://developer.salesforce.com/blogs/2022/05/inside-a-react-native-mobile-app-with-tableau-embedded).

<br />

## Tech Notes 🗒

### Building blocks of this project

<img width="300" src="./assets/images/eureka_fins_map.png">

- [Salesforce Platform](https://salesforce.com) for the data CRM layer (i.e. Sales cloud, Service cloud, Marketing cloud etc.)
- [Mulesoft](https://www.mulesoft.com) for the data integration layer
- [Slack](https://www.slack.com) for the Digital 360 integrated experience
- [Tableau](https://www.tableau.com) for the Data Visualization layer

<br />

## Set up instructions ⚙️

### Install dependencies

- Install the following dependencies and frameworks:

  1. [React Native](https://reactnative.dev/docs/environment-setup)
  2. [Expo](https://docs.expo.dev/get-started/installation/)
  3. [NodeJS](https://nodejs.org/en/download/)

- Install node modules, run the following command on the main folder:

```
npm install
```

- Finally, start the development server by running one of the following commands:

```
npm start
expo start
```

- To load your custom visualizations using Tableau Embedded, you need to set up some config variables in `tableauConfig.sample`. Rename it to `tableauConfig.js`.

  The instructions are documented here: [Inside a React Native Mobile App with Tableau Embedded](https://developer.salesforce.com/blogs/2022/05/inside-a-react-native-mobile-app-with-tableau-embedded).
