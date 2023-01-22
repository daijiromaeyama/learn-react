import { useState } from 'react'
import { Sculpture, sculptureList } from './sculptureListData'

export default function Gallery(): JSX.Element {
  const [index, setIndex] = useState<number>(0)
  const [showMore, setShowMore] = useState<boolean>(false)

  function handleClick(): void {
    setIndex(index + 1)
  }

  function handleMoreClick(): void {
    setShowMore(!showMore)
  }

  let sculpture: Sculpture = sculptureList[index]
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of  {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show more'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  )
}
