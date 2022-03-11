import {
  FormWrapper,
  FormItemWrapper
} from './styles'

export const FormItem = ({ children }) => {
  return (
    <FormItemWrapper>
      {children}
    </FormItemWrapper>
  )
}

export const Form = ({ children }) => {
  return (
    <FormWrapper>
      {children}
    </FormWrapper>
  )
}