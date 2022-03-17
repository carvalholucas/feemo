import Image from 'next/image'
import Link from 'next/link'

import { Container } from '../components/Layout'
import { Form } from '../components/Form'
import Field from '../components/Field'
import Button from '../components/Button'

const SignUpPage = () => {
  return (
    <Container>
      <Form>
        <Image
          src="/images/icon_dark.png"
          width={50}
          height={35}
        />

        <h1>Bora começar?</h1>
        <p>Crie uma conta para continuar, é rapidinho :)</p>

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
          style={{ marginTop: '2rem' }}
        />

        <Link href="/signin">
          <a className="link">Já tem uma conta? <span>Entrar</span></a>
        </Link>

        <footer>
          <Image
            src="/images/logo_dark.png"
            width={60}
            height={19}
          />
        </footer>
      </Form>
    </Container>
  )
}

export default SignUpPage