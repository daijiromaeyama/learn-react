import { getImageUrl } from './getImageUrl'
import { Person } from './person'

export default function Avatar({ person, size = 100 }: { person: Person, size: number }): JSX.Element {
  return (
    <img
      className='avatar'
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}
