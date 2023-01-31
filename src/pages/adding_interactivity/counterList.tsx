import { useState } from 'react'

type Counter = number

let initialCounters: Counter[] = [
  0, 0, 0
]

export default function CounterList(): JSX.Element {
  const [counters, setCounters] = useState<Counter[]>(initialCounters)

  function handleIncrementClick(index: number): void {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1
      } else {
        // The rest haven't changed
        return c
      }
    })
    setCounters(nextCounters)
  }

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button onClick={() => {
            handleIncrementClick(i)
          }}>+1</button>
        </li>
      ))}
    </ul>
  )
}
