import React from 'react'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { HighlightCard } from '../../components/HighlightCard/HighlightCard'
import { TransactionCard } from '../../components/TransactionCard/TransactionCard'

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
  Transactions,
  Title,
  TransactionsList,
} from './styles'

export const Dashboard = () => {
  const data = [{
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: "30/10/2022"
  },
  {
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: "30/10/2022"
  },
  {
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: "30/10/2022"
  }
  ]

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

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList 
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
        />

      </Transactions>
    </Container>
  )
}