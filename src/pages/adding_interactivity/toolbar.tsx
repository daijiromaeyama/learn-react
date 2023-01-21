import Button from './button'

export default function Toolbar({ onPlayMovie, onUploadImage }: { onPlayMovie: () => void, onUploadImage: () => void }): JSX.Element {
  return (
    <div className="Toolbar" onClick={() => {alert('You clicked on the toolbar!')}}>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
  )
}
