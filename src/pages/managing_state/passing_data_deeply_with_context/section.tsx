import { LevelContext } from './levelContext'
import { ReactNode, useContext } from 'react'

export default function Section({ children }: { children: ReactNode }): JSX.Element {
  const level = useContext(LevelContext)
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  )
}
