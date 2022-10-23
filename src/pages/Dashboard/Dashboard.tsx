import React from 'react'

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
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
        </UserWrapper>
      </Header>
    </Container>
  )
}
