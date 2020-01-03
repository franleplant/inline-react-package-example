import React from "react";
// You potentially want to make emotion a peerDependency and externalize it
// if you are going to be using variuos packages that depend on it.
import styled from "@emotion/styled";

import dog1 from "./dog.jpg";
import dog2 from "./dog2.jpg";

// Use regular CSS features through CSS-in-JS
// instrumented by Emotion
const Container = styled.div`
  margin: 10px;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  & > div {
    margin: 10px;
  }
`;

const Name = styled.span`
  font-weight: bold;
  color: blue;
`;

// Use the image from CSS-in-JS
const Dog2 = styled.div`
  background: center / contain no-repeat url(${dog2});
  width: 100px;
  height: 100px;
`;

// Use the image from Javascript code
const Dog1 = () => (
  <div>
    <img src={dog1} width="100" />
  </div>
);

export default function MyComponent(props) {
  return (
    <Container>
      <div>
        Im MyComponent, hi <Name>{props.name}</Name>
        <br/>
        Here are some pictures of dogs
      </div>

      <Dog1 />
      <Dog2 />
    </Container>
  );
}
