import { memo } from 'react'
import { useDrop } from 'react-dnd'
const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}
export const Container = memo(function Container({
  accept,
  lastDroppedItem,
  onDrop,
}) {
    console.log(accept)
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = isOver && canDrop
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return (
    <div ref={drop} style={{ ...style, backgroundColor }} data-testid="Container">
      {isActive
        ? 'Release to drop'
        : `This Container accepts: ${accept.join(', ')}`}

      {lastDroppedItem && (
        <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
      )}
    </div>
  )
})
