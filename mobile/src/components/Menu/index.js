import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Code
} from './styles';

export default function Menu(){
  return (
    <Container>
      <Code>
        <QRCode
          value="https://rocketseat.com.br"
          size={80}
          Color="#fff"
          backgroundColor="#8B10AE"
        />
      </Code>
    </Container>
  )
}
