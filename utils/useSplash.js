import  {
  useEffect,
  useState
} from 'react'

const useSplash = (time) => {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, time)

    return () => clearTimeout(timer)
  }, [])

  return [showSplash]
}

export default useSplash