import { useState } from 'react'
import { useImmer } from 'use-immer'
import { List } from './list'
import ItemList from './itemList'

let nextId = 3
const initialList: List[] = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true }
]

export default function BucketList(): JSX.Element {
  const [myList, updateMyList] = useImmer<List[]>(initialList)
  const [yourList, updateYourList] = useImmer<List[]>(initialList)

  function handleToggleMyList(id: number, nextSeen: boolean ): void {
    updateMyList(draft => {
      const artwork: List | undefined = draft.find(a => a.id === id)
      if (artwork) {
        artwork.seen = nextSeen
      }
    })
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean): void {
    updateYourList(draft => {
      const artwork: List | undefined = draft.find(a => a.id === artworkId)
      if (artwork) {
        artwork.seen = nextSeen
      }
    })
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList}
      />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList}
      />
    </>
  )
}
