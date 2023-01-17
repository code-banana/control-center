import { faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UseLocalStorage from '../../hooks/UseLocalStorage'
import React, { useState, useEffect } from 'react'
import Panel from './panel/Panel'
import Draggable from 'react-draggable';
import Resource from "./Resource";
import Xarrow from "react-xarrows";

function Board({ resourcePool, onRunTest }) {
    const [css, setCss] = UseLocalStorage('css', '')
    const [srcDoc, setSrcDoc] = useState('')
    const PictureList = {
        'vm': 'src/assets/box.svg',
        'loadbalancer': 'src/assets/box.svg',
        'runtime': 'src/assets/box.svg'
    };
    const [selectedResource, setSelected] = useState(-1)
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
            <div id="start" className='relative top-[30.5%] h-full'></div>
            <Xarrow
                start="start" //can be react ref
                end="box" //or an id
                color="hsl(225, 6%, 25%)"
                curveness="0"
                labels={<div style={{ fontSize: "1em", fontStyle: "bold", color: "hsl(225, 6%, 25%)", position: "relative", bottom: "10px" }}>Traffic</div>}
                strokeWidth={2}
            />
                <div id="box" className='border-2 border-dotted w-1/2 h-1/2 relative top-[5%] left-1/4'>
                    {resourcePool.map((item, index) => {
                        // return <Picture url={PictureList[item.tag[0]]} id={item.id} name={item.name} description={item.description} isDropped={isDropped(item.name)}/>;
                        return (<Draggable
                            defaultPosition={{ x: 60 + index*120, y: 160 }}
                            position={null}
                            grid={[50, 50]}
                            scale={1}
                            bounds="parent"
                            
                        >
                            <Resource
                                name={item.name}
                                url={PictureList['vm']}
                                id={index}
                                onSelect={(id) => { setSelected(id) }}
                                isHighlight={index == selectedResource ? true : false}
                            />
                        </Draggable>
                        )
                    })}
                </div>
                <Panel resourcePool={resourcePool} onRunTest={onRunTest} selectedResource={selectedResource} setSelectedResource={setSelected} onTestPanel={() => {setSelected(-1)}}/>
            </div>
        </div>
    )
}

export default Board