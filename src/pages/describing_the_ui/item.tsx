export default function Item({ name, isPacked }: { name: string, isPacked: boolean}) {
  let itemContent: string | JSX.Element = name
  if (isPacked) {
    itemContent = (
      <del>
        {name + ' ✔︎'}
      </del>
    )
  }
  return (
    <li className='item'>
      {itemContent}
    </li>
  )
}
