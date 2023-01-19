function Profile(): JSX.Element {
  return (
    <img
      src='https://i.imgur.com/MK3eW3Am.jpg'
      alt='Katherine Johnson'
    />
  )
}

export default function Gallery(): JSX.Element {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}
