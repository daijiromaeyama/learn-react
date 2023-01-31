import { useState } from 'react'

type Shape = {
  id: number
  type: 'circle' | 'square'
  x: number
  y: number
}

let initialShapes: Shape[] = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 }
]

export default function ShapeEditor(): JSX.Element {
  const [shapes, setShapes] = useState<Shape[]>(initialShapes)

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        // No change
        return shape
      } else {
        // Return a new cicle 50px below
        return {
          ...shape,
          y: shape.y + 50
        }
      }
    })
    setShapes(nextShapes)
  }

  return (
    <>
      <button onClick={handleClick}>
        Move circles down!
      </button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
            background: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === 'circle' ? '50%' : '0',
            width: 20,
            height: 20
          }}
        />
      ))}
    </>
  )
}
