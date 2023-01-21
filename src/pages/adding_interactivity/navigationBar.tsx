import Toolbar from './toolbar'

export default function NavigationBar(): JSX.Element {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
  )
}
