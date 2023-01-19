import Cup from './cup'

export default function TeaGathering(): JSX.Element[] {
  let cups: JSX.Element[] = []
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />)
  }
  return cups
}
