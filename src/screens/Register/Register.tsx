import React, { useState } from 'react'
import { Button } from '../../components/Form/Button/Button'
import { Input } from '../../components/Form/Input/Input'
import { TransactionButton } from '../../components/Form/TransactionButton/TransactionButton'


import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from './Register.styles'

export const Register = () => {
  const [transactionType, setTransactionType] =useState('')

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastros</Title>
      </Header>

      <Form>
        <Fields>
          <Input 
            placeholder='Nome'
          />
          <Input 
            placeholder='Preço'
          />

          <TransactionsTypes>
            <TransactionButton 
              title='Income' 
              type='up' 
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionButton 
              title='Outcome' 
              type='down' 
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsTypes>
        </Fields>

        <Button 
          title="Enviar"
        />
      </Form>

    </Container>
  )
}
