import React from 'react'
import { Button } from '../../components/Form/Button/Button'
import { Input } from '../../components/Form/Input/Input'


import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
} from './Register.styles'

export const Register = () => {
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
        </Fields>

        <Button 
          title="Enviar"
        />
      </Form>

    </Container>
  )
}
