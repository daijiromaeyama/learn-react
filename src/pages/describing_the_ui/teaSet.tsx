import Cup from './cup'

export default function TeaSet(): JSX.Element {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  )
}
