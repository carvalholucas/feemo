import { useForm } from 'react-hook-form'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '../components/Layout'
import { Form } from '../components/Form'
import Field from '../components/Field'
import Button from '../components/Button'

import { useModal } from '../utils/modalContext'

const SignInPage = () => {
  const { openModal } = useModal()

  const {
    handleSubmit,
    register
  } = useForm()

  const handleForgetPass = () => {
    openModal({
      isVisible: true,
      height: '40%',
    })
  }

  const handleSignIn = data => console.log(data)

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <Image
          src="/images/icon_dark.png"
          width={50}
          height={35}
        />

        <h1>Você de volta?</h1>
        <p>Seja bem-vindo de volta, você fez muita falta, conecte-se novamente :)</p>

        <Field
          register={register}
          id="email-field"
          name="email"
          label="Email"
          type="email"
          placeholder="Informe seu email"
        />

        <Field
          register={register}
          id="password-field"
          name="password"
          label="Senha"
          type="password"
          placeholder="Informe sua senha"
        />

        <a
          className="link link-forget"
          onClick={() => handleForgetPass()}
        >
          Esqueci senha?
        </a>

        <Button
          label="Entrar"
          color="secondary"
          type="submit"
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