import { Button } from "./style"

const FloatButton = ({
  isVisible,
  children,
  ...props
}) => {
  return (
    <Button
      className={isVisible ? 'button-enter' : 'button-out'}
      {...props}
    >
      {children}
    </Button>
  )
}

export default FloatButton