import React from 'react'
import { HighlightCard } from '../../components/HighlightCard/HighlightCard'

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
} from './styles'

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri: 'https://avatars.githubusercontent.com/u/90471567?v=4' }} 
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Michelangelo</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type='up'
          title='Entrada'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard 
          type='down'
          title='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Última saída dia 9 de abril'
        />
        <HighlightCard
          type='total' 
          title='Total'
          amount='R$ 16.141,00'
          lastTransaction='01 a 13 de abril'
        />
      </HighlightCards>
    </Container>
  )
}
