# React `useEffect` Practice Project

This starter includes a simple project with controls to configure the display of
a turkey drawing for kids.

It includes function components for image (_src/components/PictureDisplay_) and
message (_src/components/Message_), including appropriate props (`size` string, 
`featherCount` number, and `featureColors` array).

Also included are user controls (in _src/App.js_) connected using `onClick` and 
`onChange` events to state variables (set up with the `useState` hook).

The goal of this project is to practice different use cases for `useEffect` in 
*React* to improve understanding and confidence.

* Debugging prop changes
* Debugging state changes
* Catching state changes to generate another state value programmatically
* Catching prop changes to generate a state value programmatically

## Step 0: Orientation

Look through the existing JavaScript and CSS files to familiarize yourself with
the project.

Run `npm install` and `npm start` to see what is available. Go ahead and click 
on the controls to see what `console.log` messages have been included. Also, 
look for warnings or errors appearing in the *JavaScript Console* (part of the 
*Developer Tools* in your browser).

As you probably noticed, there are two function components in this project:

* _src/components/PictureDisplay_
* _src/components/Message_

Each one has at least one prop passed to it from _src/App.js_, and a 
`console.log` which writes out the component's name and each of its props.

## Step 1: Improve prop debugging

Problem: Every click in the UI - even on unrelated elements - causes the 
`console.log` in each of the two components to display. This can make it 
difficult to debug because changed values get lost in the middle of values that
did not change.

Solution: Wrap each `console.log` inside a `useEffect` hook, so it is only 
executed when the prop actually changes.

