import { useState } from "react"
import {
  HiOutlineEye,
  HiOutlineEyeOff
} from "react-icons/hi"

import {
  FieldtWrapper,
  Input,
  Label
} from './styles'

const Field = (props) => {
  const [passIsVisible, setPassIsVisible] = useState(false)

  const handlePassword = () => {
    if (passIsVisible) {
      return (
        <HiOutlineEye
          className="icon-eye"
          size="2rem"
          onClick={() => setPassIsVisible(!passIsVisible)}
        />
      )
    } else {
      return (
        <HiOutlineEyeOff
          className="icon-eye"
          size="2rem"
          onClick={() => setPassIsVisible(!passIsVisible)}
        />
      )
    }
  }

  const {
    id,
    label,
    type,
    placeholder,
    name,
    register
  } = props

  const typeField = type === 'password' && passIsVisible ? 'text' : type

  return (
    <FieldtWrapper>
      <Label htmlFor={id}>{label}</Label>

      <div>
        {type === "password" && handlePassword(type)}

        <Input
          {...register(name)}
          id={id}
          type={typeField}
          name={name}
          placeholder={placeholder}
        />
      </div>

    </FieldtWrapper>
  )
}

export default Field