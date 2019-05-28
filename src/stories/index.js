import React from 'react';
import styled from 'styled-components'

import { storiesOf } from '@storybook/react';
import { SocialIcons } from '../components'

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

const iconNames = Object.keys(SocialIcons)

const HotIcon = SocialIcons.whatsHot;
const StyledHot = styled(HotIcon)`
  fill: #ff0000;
`;

storiesOf('SocialIcons', module)
  .add('single icon', () => <HotIcon />)
  .add('styled icon', () => <StyledHot />)
  .add('icon collection', () => {
    const count = iconNames.length
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
      </Box>
    </AppContainer>
    )
  })
