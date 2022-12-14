import React, { useState } from 'react'
import { Modal } from 'react-native'
import { useForm } from 'react-hook-form'

import { InputForm } from '../../components/Form/InputForm/InputForm'
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

export interface FormData {
  [name: string] : string
}

export const Register = () => {
  const [transactionType, setTransactionType] =useState('')
  const [categoryModalOpen, setCategoryModalOpen] =useState(false)
  
  const [category, setCategory] =useState({
    key: 'category',
    name: 'Categoria',
  })

  const {
    control,
    handleSubmit,
  } = useForm()

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  const handleOpenSelectCategoryModal = () => {
    setCategoryModalOpen(true)
  }

  const handleCloseSelectCategoryModal = () => {
    setCategoryModalOpen(false)
  }

  const handleRegister = (form: FormData) => {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastros</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm 
            name='name'
            control={control}
            placeholder='Nome'
          />
          <InputForm 
            name='amount'
            control={control}
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
          onPress={handleSubmit(handleRegister)}
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
