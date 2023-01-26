import { useState } from 'react'

export default function Counter(): JSX.Element {
  const [number, setNumber] = useState<number>(0)

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5)
        setNumber(n => n + 1)
        setNumber(42)
      }}
      >
        Increse the number
      </button>
    </>
  )
}
