import { ReactNode } from 'react'

export default function Button({ onClick, children }: { onClick: () => void, children: ReactNode }): JSX.Element {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick()
    }}>
      {children}
    </button>
  )
}
