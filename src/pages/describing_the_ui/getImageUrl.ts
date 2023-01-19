import { Person } from './person'

export function getImageUrl(person: Person): string {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  )
}
