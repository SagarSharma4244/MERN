![MERN](http://adsvento.in/images/react/mernstack.png)

<h1> REACT Interview Questions</h1>

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
![REDUX](https://github.com/SagarSharma4244/MERN/blob/master/Redux.gif)

## When do you USE REDUX?
When you need some Global state that is shared among different components.

## What is CONTAINER COMPONENT?
1. A Container Component is a popular way to seprate the jsx form the logic of a component.
2. But I only use it when my component is doing more than showing sme information or passing things through the view.

## What is a VIEW COMPONENT?
It is the dumb part of a component where you simply put the passed prop into jsx.

## What component make for a good  container candidate?
1. Component with no Logic.
2. I use container only when component becomes complex.

## React JUNIOR CODE TEST
A TODO APP using Node that allows user to add more todos.



# Import Export data from MongoDB Atlas
 - [x] Install Compass.
 - [x] Click Connect.
 - [x] Go to Atlasdatabase and Click Connect.
 - [x] Click. Connect with Compass.
 - [x] Add username and password & click connect.
 - [x] Now you can createdatabase and collection from compass.
 - [x] Create a Colleciton and Select it.
 - [x] Click Colleciton -> Import Data -> Import CSV file.
 
