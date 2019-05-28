import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { SocialIcons } from "./components";

// NOTE: colors selected from clrs.cc
const AppContainer = styled.div`
  font-family: sans-serif;
  color: #001f3f;
  fill: #001f3f;
`;

const Box = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.span`
  margin-left: 15px;
  font-size: 12px;
  font-style: italic;
  color: #aaaaaa;
`;

const CollectionName = styled.div`
  margin: 10px;
  font-weight: bold;
  font-style: italic;
`;

// NOTE:  we're only doing this for demonstration purposes
//        in the REAL use case, you would only import the
//        specific icons you want to display, allowing
//        the treeshake to only include the icons you
//        actually use...
const iconNames = Object.keys(SocialIcons);
const count = iconNames.length;
const HotIcon = SocialIcons.whatsHot;
const StyledHot = styled(HotIcon)`
  fill: #ff0000;
`;

function App() {
  return (
    <AppContainer>
      <CollectionName>
        SocialIcons <sup>{count}</sup>
      </CollectionName>
      <hr />
      <Box>
        {iconNames.map((name, index) => {
          const Icon = SocialIcons[name];
          return (
            <Row key={index}>
              <Icon />
              <Label>{name}</Label>
            </Row>
          );
        })}
        <Row>
          <StyledHot />
          <Label>whatsHot (Red)</Label>
        </Row>
      </Box>
    </AppContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
