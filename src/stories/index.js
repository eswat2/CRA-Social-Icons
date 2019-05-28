import React from 'react';
import styled from 'styled-components'

import { storiesOf } from '@storybook/react';
import { IconProofs, SocialIcons, WhatsHotIcon } from '../components'

const StyledHot = styled(WhatsHotIcon)`
  fill: #ff0000;
`

const StyledProofs = styled(IconProofs)`
  font-family: sans-serif;
  color: #001f3f;
  fill: #001f3f;
`

storiesOf('SocialIcons', module)
  .add('single icon', () => <WhatsHotIcon />)
  .add('styled icon', () => <StyledHot />)
  .add('icon collection', () => <StyledProofs label="SocialIcons" iconCollection={SocialIcons} />)
