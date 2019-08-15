![MERN](http://adsvento.in/images/react/mernstack.png)

# REACT Interview Questions

## Why does React needs a ROOT element?
Since React is all Javascript, it needs an element where it can render out its own DOM element.

## What is the difference between STATE and PROPS ?
1. State is used to store stuff which inside element.
2. Props is used to store stuff that can be passed to the next component.

## What is CONTEXT?
Context is a global Prop, that can be used on oncations when you need something that is going to be everywhere in the applicaiton.
Perphapes for text translation.

## What are PROP TYPES and what are its advantages and disadvantages?
**Advantages**
1. Prop types is used to know which type is component expecting.
2. When you want to know what component is working.

**Disadvantages**
They often become leagcy documentation and poeple forget to keep them updated.

## Which LIFE CYCLE EVENTS is the most common from your perspective?
1. ComponentWillMount and ComponentDidMount
2. ComponentWillRecieveProps -> Do something when component is getting a new state or update.

## When do use PURE COMPONENT and CLASS COMPONENTS?
1. Pure components are faster.(doesn't use state or lifecycle enebts).
2. I don't use classes if I am not storing a state or using a life cycle event.

## Explain how RREACT RENDERING works in your own terms?
React listens toDOM updates and renders the DOM tree on every change and react renders it only if there is a change/update using component diffing algotirhm.

## Whatis REDUX?
1. Redux is used to storing states in react.
2. It uses a pub/sub pattern and the idea is to store you state in a big object and use actions to change that state.

## How REDUX WORKS?
You declare a Reducer that takes in an Action and a State, when you dispatch an action, the state gets updated and React renders the DOM with state changes.
![REDUX](http://adsvento.in/images/react/mernstack.png)



# Import Export data from MongoDB Atlas
 - [x] Install Compass.
 - [x] Click Connect.
 - [x] Go to Atlasdatabase and Click Connect.
 - [x] Click. Connect with Compass.
 - [x] Add username and password & click connect.
 - [x] Now you can createdatabase and collection from compass.
 - [x] Create a Colleciton and Select it.
 - [x] Click Colleciton -> Import Data -> Import CSV file.
 
