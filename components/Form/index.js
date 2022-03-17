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

export const Form = ({ children, ...props }) => {
  return (
    <FormWrapper {...props}>
      {children}
    </FormWrapper>
  )
}