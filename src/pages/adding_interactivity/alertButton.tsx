import { ReactNode } from 'react'

export default function AlertButton({ message, children}: { message: string, children: ReactNode }): JSX.Element {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  )
}
