import React from 'react';
import styled from 'styled-components'

import { storiesOf } from '@storybook/react';
import {
  FillPicker,
  FillWrapper,
  IconProofs,
  RadioButtonCheckedIcon,
  RadioButtonUncheckedIcon,
  SocialIcons,
  ToggleIcons,
  WhatsHotIcon
} from '../components'
import { colors } from '../utils'

const StyledHot = styled(WhatsHotIcon)`
  fill: #FF4136;
`

const StyledProofs = styled(IconProofs)`
  font-family: sans-serif;
  color: #001f3f;
`

const NavyProofs = styled(IconProofs)`
  font-family: sans-serif;
  color: #001f3f;
  fill: #001f3f;
`

storiesOf('SocialIcons', module)
  .add('single icon', () => <WhatsHotIcon />)
  .add('styled icon', () => <StyledHot />)
  .add('icon collection', () => <NavyProofs label="SocialIcons" iconCollection={SocialIcons} />)
  .add('red collection', () => (
    <FillWrapper fill={colors.red}>
      <StyledProofs label="SocialIcons" iconCollection={SocialIcons} />
    </FillWrapper>
  ))
  .add('fill picker', () => (
    <FillPicker>
      <StyledProofs label="SocialIcons" iconCollection={SocialIcons} />
    </FillPicker>
  ))

storiesOf('ToggleIcons', module)
  .add('radio checked', () => <RadioButtonCheckedIcon />)
  .add('radio unchecked', () => <RadioButtonUncheckedIcon />)
  .add('icon collection', () => <NavyProofs label="ToggleIcons" iconCollection={ToggleIcons} />)

