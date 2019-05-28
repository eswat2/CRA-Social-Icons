import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { IconProofs, SocialIcons, WhatsHotIcon } from "./components";

// NOTE: colors selected from clrs.cc
const AppContainer = styled.div`
  font-family: sans-serif;
  color: #001f3f;
  fill: #001f3f;
`;

const StyledHot = styled(WhatsHotIcon)`
  fill: #ff0000;
`;

// NOTE:  we're only doing this for demonstration purposes
//        in the REAL use case, you would only import the
//        specific icons you want to display, allowing
//        the treeshake to only include the icons you
//        actually use...
const icons = { ...SocialIcons, "WhatsHotIcon (Red)": StyledHot }

function App() {
  return (
    <AppContainer>
      <IconProofs label="SocialIcon" iconCollection={icons} />
    </AppContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
