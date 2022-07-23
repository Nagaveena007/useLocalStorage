import React from "react";
import styled from "styled-components";
import Button from "./Button";
import "./style.css";

import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <Wrapper theme={theme}>
      <ContentWrapper>
        <TitleWrapper theme={theme}>
          <h1>useLocalStorage Hook</h1>
          <p>A browser's local storage is a good place to store small pieces of 
            information, like the user's preferred theme. Here is a useLocalStorage 
            hook to store a user's theme preference in the browser's local storage, and retrieve it.</p>
        </TitleWrapper>
        <Button
          text="Toggle theme"
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
        />
      </ContentWrapper>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  font-family: "Roboto";
  padding: 40px;
  background: ${(props) => (props.theme === "light" ? "white" : "#1a1433")};
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: grid;
  row-gap: 40px;
  justify-content: center;
  align-items: flex-start;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  color: ${(props) => (props.theme === "light" ? "black" : "white")};

  display: grid;
  row-gap: 10px;
`;
