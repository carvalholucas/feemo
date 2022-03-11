import {
  FieldtWrapper,
  Input,
  Label
} from './styles'

const Field = (props) => {
  const {
    label,
    type,
    placeholder,
    name
  } = props

  return (
    <FieldtWrapper>
      <Label>{label}</Label>
      <Input
        type={type || 'text'}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    </FieldtWrapper>
  )
}

export default Field