import React from "react";
// In _real_ applications you would use it like this
import MyComponent from "my-lib";

// Theming API!
import { ThemeProvider } from "emotion-theming";

const appTheme = {
  colors: {
    primary: "green"
  }
};

function App() {
  return (
    <div>
      <h1>We are using MyComponent</h1>
      <p>
        It was Actively Compiled and now we can use it from a Create React App
        Application
      </p>
      <ThemeProvider theme={appTheme}>
        <MyComponent name="Luke Skywalker" />
      </ThemeProvider>
    </div>
  );
}

export default App;
