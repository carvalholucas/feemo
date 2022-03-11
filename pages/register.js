import Image from 'next/image'
import Link from 'next/link'

import { Container } from '../components/Layout'
import { Form } from '../components/Form'
import Field from '../components/Field'
import Button from '../components/Button'

const Register = () => {
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

        <Field
          label="Senha"
          type="password"
          placeholder="Informe sua senha"
        />

        <Field
          label="Confirmar Senha"
          type="confirm_password"
          placeholder="Confirme sua senha"
        />

        <Button
          label="Confirmar"
          color="secondary"
          style={{ marginTop: '1rem' }}
        />

        <Link href="/login">
          <a className="link">Já tem uma conta? <span>Entrar</span></a>
        </Link>
      </Form>
    </Container>
  )
}

export default Register