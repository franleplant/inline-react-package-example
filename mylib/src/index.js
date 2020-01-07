import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

import dog1 from "./dog.jpg";
import dog2 from "./dog2.jpg";

const defaultTheme = {
  colors: {
    primary: "blue"
  }
};

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
  color: ${props => props.theme.colors.primary};
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
    <ThemeProvider
      theme={(ancestorTheme = {}) => {
        console.log("theme", ancestorTheme);
        return { ...defaultTheme, ...ancestorTheme };
      }}
    >
      <Container>
        <div>
          Im MyComponent, hi <Name>{props.name}</Name>, and my color comes from
          a theme
          <br />
          Here are some pictures of dogs
        </div>

        <Dog1 />
        <Dog2 />
      </Container>
    </ThemeProvider>
  );
}
