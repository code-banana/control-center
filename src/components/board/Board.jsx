import { faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UseLocalStorage from '../../hooks/UseLocalStorage'
import React, { useState, useEffect } from 'react'
import Panel from './panel/Panel'
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
                <div className='border-2 border-dotted w-1/2 h-1/2 relative top-[15%] left-1/4'>
                    {resourcePool.map((item) => {
                        // return <Picture url={PictureList[item.tag[0]]} id={item.id} name={item.name} description={item.description} isDropped={isDropped(item.name)}/>;
                        return (<Draggable
                            defaultPosition={{ x: 120, y: 120 }}
                            position={null}
                            grid={[50, 50]}
                            scale={1}
                            bounds="parent"
                        >
                            <Resource
                                name={item.name}
                                url={PictureList['vm']}
                                id={item.index}
                            />
                        </Draggable>
                        )
                    })}
                </div>
                <Panel resourcePool={resourcePool} onRunTest={onRunTest} />
            </div>
        </div>
    )
}

export default Board