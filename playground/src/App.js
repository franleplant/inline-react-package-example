import React from 'react';
// In _real_ applications you would use it like this
import MyComponent from 'my-lib'
// In here we are just importing the compiled file
//import MyComponent from './mylib'

function App() {
  return (
    <div>
      <h1>We are using MyComponent</h1>
      <p>It was Actively Compiled and now we can use it from a Create React App Application</p>
      <MyComponent name="Luke Skywalker"/>
    </div>
  );
}

export default App;
