import { useForm } from 'react-hook-form'
import Image from 'next/image'

import { Container } from '../components/Layout'
import { Form } from '../components/Form'
import Field from '../components/Field'
import Button from '../components/Button'

const Reset = () => {
  const {
    handleSubmit,
    register
  } = useForm()

  const handleReset = data => console.log(data)

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleReset)}>
        <Image
          src="/images/logo_dark.png"
          alt="Icone da Feemo"
          width={162}
          height={50}
        />
        
        <Field
          register={register}
          id="email-field"
          name="email"
          label="Email"
          type="email"
          placeholder="Informe seu email"
        />

        <Button
          label="Confirmar"
          color="secondary"
          style={{ marginTop: '1rem' }}
        />
      </Form>
    </Container>
  )
}

export default Reset