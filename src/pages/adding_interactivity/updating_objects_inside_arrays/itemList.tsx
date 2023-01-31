import { List } from './list'

export default function ItemList({ artworks, onToggle }: { artworks: List[], onToggle: (id: number, nextSeen: boolean) => void }): JSX.Element {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                )
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  )
}
