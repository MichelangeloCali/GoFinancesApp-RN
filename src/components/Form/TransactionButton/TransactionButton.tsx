import React from 'react'
import { TouchableOpacityProps } from 'react-native';

import { 
  Container,
  Icon,
  Title,
} from './TransactionButton.styles'

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface Props extends TouchableOpacityProps {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

export const TransactionButton = ({
  type,
  isActive,
  title,
  ...rest 
} : Props) => {
  return (
    <Container 
      type={type}
      isActive={isActive}
      {...rest}
    >
      <Icon 
        type={type}
        name={icons[type]}
      />
      <Title>
        {title}
      </Title>
    </Container>
  )
}
