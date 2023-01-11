import { faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UseLocalStorage from '../../hooks/UseLocalStorage'
import React, { useState, useEffect } from 'react'
// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'
// import DragDrop from './DragDrop'
import TestPanel from './testPanel/TestPanel'
import Draggable from 'react-draggable';
import Resource from "./Resource";

function Board({ resourcePool, onRunTest }) {
    const [css, setCss] = UseLocalStorage('css', '')
    const [srcDoc, setSrcDoc] = useState('')
    const PictureList = {
        'vm': 'src/assets/box.svg',
        'loadbalancer': 'src/assets/box.svg',
        'runtime': 'src/assets/box.svg'
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(css)
        }, 250)

        return () => clearTimeout(timeout)
    }, [css])
    return (
        <div className='board' value={css} onChange={setCss}
        >
            <div className="editor-title">
                Board
                <FontAwesomeIcon
                    icon={faCompressAlt}
                />
            </div>
            <div className='board-area relative drop-box shadow-lg p-4 bg-gray-800'>
                {/* <DndProvider backend={HTML5Backend}>
            <div className="App">
                <DragDrop resourcePool={resourcePool}/>
            </div>
        </DndProvider> */}
                {resourcePool.map((item) => {
                    // return <Picture url={PictureList[item.tag[0]]} id={item.id} name={item.name} description={item.description} isDropped={isDropped(item.name)}/>;
                    return (<Draggable
                        defaultPosition={{ x: 100, y: 150 }}
                        position={null}
                        grid={[50, 50]}
                        scale={1}
                    > 
                            <Resource 
                                name={item.name}
                                url={PictureList['vm']}
                                id={item.index}
                            />
                    </Draggable>
                )})}
                <TestPanel onRunTest={onRunTest}></TestPanel>
            </div>
        </div>
    )
}

export default Board