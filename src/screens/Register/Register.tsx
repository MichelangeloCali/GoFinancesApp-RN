import React, { useState } from 'react'
import { Modal } from 'react-native'

import { Input } from '../../components/Form/Input/Input'
import { Button } from '../../components/Form/Button/Button'
import { TransactionButton } from '../../components/Form/TransactionButton/TransactionButton'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton/CategorySelectButton'
import { CategorySelect } from '../CategorySelect/CategorySelect'

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
  const [categoryModalOpen, setCategoryModalOpen] =useState(false)
  
  const [category, setCategory] =useState({
    key: 'category',
    name: 'Categoria',
  })

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  const handleOpenSelectCategoryModal = () => {
    setCategoryModalOpen(true)
  }

  const handleCloseSelectCategoryModal = () => {
    setCategoryModalOpen(false)
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

          <CategorySelectButton 
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button 
          title="Enviar"
        />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>

    </Container>
  )
}
