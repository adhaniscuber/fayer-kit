import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, ButtonOutline } from '../../src/atoms'

storiesOf('Atoms/Button', module)
  .add('Button', () => (
    <Button>Hello Button</Button>
  ))
  .add('Button Outline', () => (
    <ButtonOutline>Hello Button</ButtonOutline>
  ))