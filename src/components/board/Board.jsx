import { faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UseLocalStorage from '../../hooks/UseLocalStorage'
import React, { useState, useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DragDrop from './DragDrop'
import TestPanel from '../testPanel/TestPanel'

function Board({resourcePool}) {
    const [css, setCss] = UseLocalStorage('css', '')
    const [srcDoc, setSrcDoc] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(css)
        }, 250)

        return () => clearTimeout(timeout)
    }, [ css])
  return (
    <div className='board' value={css} onChange={setCss}
    >
        <div className="editor-title">
        Board
                <FontAwesomeIcon
                    icon={faCompressAlt}
                />
        </div>
        <div className='board-area relative'>
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <DragDrop resourcePool={resourcePool}/>
            </div>
        </DndProvider>
        <TestPanel></TestPanel>
        </div>
    </div>
  )
}

export default Board