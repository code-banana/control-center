import { memo } from 'react'
import { useDrag } from 'react-dnd'
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  color: 'black',
  float: 'left',
}
export const Box = memo(function Box({ name, type }) {

  return (
    <div style={{ ...style}} data-testid="box">
       <s>{name}</s>
    </div>
  )
})
