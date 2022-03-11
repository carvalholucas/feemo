import Image from 'next/image'
import Link from 'next/link'

import { Container } from '../components/Layout'
import { Form } from '../components/Form'
import Field from '../components/Field'
import Button from '../components/Button'

const Reset = () => {
  return (
    <Container>
      <Form>
        <Image
          src="/images/logo_dark.png"
          width={162}
          height={50}
        />
        <Field
          label="Email"
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