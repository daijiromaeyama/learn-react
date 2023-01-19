import { people } from './data'
import { getImageUrl } from './getImageUrl'

export default function List(): JSX.Element {
  const listItems: JSX.Element[] = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  )
  return <ul>{listItems}</ul>
}
