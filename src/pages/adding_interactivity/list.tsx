import { useState } from 'react'

type List = {
  id: number
  title: string
}

let nextId = 3

let initialList: List[] = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' }
]

export default function List(): JSX.Element {
  const [list, setList] = useState<List[]>(initialList)

  function handleClick(): void {
    const nextList = [...list]
    nextList.reverse()
    setList(nextList)
  }

  return (
    <>
      <button onClick={handleClick}>
        Reverse
      </button>
      <ul>
        {list.map(artwork => (
          <li key={artwork.id}>
            {artwork.title}
          </li>
        ))}
      </ul>
    </>
  )
}
