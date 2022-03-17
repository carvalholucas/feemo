import Image from 'next/image'
import Link from 'next/link'

import { Container } from '../components/Layout'
import { Form } from '../components/Form'
import Field from '../components/Field'
import Button from '../components/Button'

const SignInPage = () => {
  return (
    <Container>
      <Form>
        <Image
          src="/images/icon_dark.png"
          width={50}
          height={35}
        />

        <h1>Você de volta?</h1>
        <p>Seja bem-vindo de volta, você fez falta, conecte-se novamente :)</p>

        <Field
          label="Email"
          placeholder="Informe seu email"
        />

        <Field
          label="Senha"
          type="password"
          placeholder="Informe sua senha"
        />

        <Link href="/reset">
          <a className="link link-forget">Esqueci senha?</a>
        </Link>

        <Button
          label="Entrar"
          color="secondary"
          style={{ marginTop: '2rem' }}
        />

        <Link href="/signup">
          <a className="link">Sem acesso ainda? <span>Criar conta</span></a>
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

export default SignInPage