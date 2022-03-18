import { useForm } from 'react-hook-form'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '../components/Layout'
import { Form } from '../components/Form'
import Field from '../components/Field'
import Button from '../components/Button'

const SignUpPage = () => {
  const {
    handleSubmit,
    register
  } = useForm()

  const handleSignUp = data => console.log(data)

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <Image
          src="/images/icon_dark.png"
          alt="Icone da Feemo"
          width={50}
          height={35}
        />

        <h1>Bora começar?</h1>
        <p>Crie uma conta para continuar, preencha os campos abaixo, é rapidinho :)</p>

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

        <Field
          register={register}
          id="confirm-password-field"
          name="confirm_password"
          label="Confirmar Senha"
          type="password"
          placeholder="Confirme sua senha"
        />

        <Button
          label="Confirmar"
          color="secondary"
          type="submit"
          style={{ marginTop: '2rem' }}
        />

        <Link href="/signin">
          <a className="link">Já tem uma conta? <span>Entrar</span></a>
        </Link>

        <footer>
          <Image
            src="/images/logo_dark.png"
            alt="Logotipo da Feemo"
            width={60}
            height={19}
          />
        </footer>
      </Form>
    </Container>
  )
}

export default SignUpPage