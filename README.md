# A Confirm, Alert and Prompts (CAPs) library for React
> Dropin replacement for the browser's default and ugly alert, confirm and prompt dialogs for your React project

## Installing

Install via NPM running:

```
npm i react-caps --save

// OR

yarn add react-caps
```


## How to use

Add `CapsContainer` component to the root element of your application.
```js
import React from "react";

import { CapsContainer } from "react-caps";
import ExampleComponent from "./example-component";

class App extends React.Component {
  render() {
    return (
      <div className="App">

        // add 'caps' container to the root element of app
        <CapsContainer />

        // use your other components as usual
        <ExampleComponent/>
      </div>
    );
  }
}

export default App;
```

Then, in a React component, use `caps.alert()`, `caps.confirm()` and `caps.prompt()` instead of `alert()`, `confirm()` and `prompt()`

```js
import React from "react";
import caps from "react-caps";

class ExampleComponent extends React.Component {
  showAlert = () => {
    caps.alert("Your alert message");
  };

  showConfirm = () => {
      caps.confirm("Are you sure?", () => {
        // this function will run on clicking confirm
        caps.alert("You clicked Confirm!!");
      });
  };

  showPrompt = () => {
      caps.prompt("Label", (value) => {
        // this function will run on clicking ok
        caps.alert("You entered: "+value);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.showAlert}>
        <button onClick={this.showConfirm}>
        <button onClick={this.showPrompt}>
      </div>
    );
  }
}

export default ExampleComponent;
```

This component is very new and APIs may change in near future.
