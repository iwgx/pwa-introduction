import React from 'react'

import {
  Slide,
  Text,
  Heading,
  Appear
} from 'spectacle';

export default (
  <Slide transition={['fade']} bgColor="orangered">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      Presentasi ini
    </Heading>
    <Appear order="1">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        akan terus diperbarui
      </Heading>
    </Appear>
    <Appear order="2">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Saya ketinggalan sesuatu? Silakan kontak
      </Heading>
    </Appear>
  </Slide>
)